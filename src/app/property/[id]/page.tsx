"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { properties } from "@/lib/properties";

type Property = {
  id: string;
  title: string;
  city: string;
  location: string;
  type: string;
  purpose: string;
  price: number;
  bedrooms: number;
  area: number;
  image: string;
  description?: string;
  ownerId?: string;
  ownerName?: string;
  ownerEmail?: string;
  ownerMobile?: string;
  createdAt?: string;
};

export default function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        const { id } = await params;

        // First check the original demo properties
        const staticProperty = properties.find(
          (item) => String(item.id) === String(id)
        );

        if (staticProperty) {
          setProperty(staticProperty);
          setLoading(false);
          return;
        }

        // If not found, check properties posted by users
        const savedProperties = JSON.parse(
          localStorage.getItem("plotapna_user_properties") || "[]"
        );

        const userProperty = savedProperties.find(
          (item: Property) => String(item.id) === String(id)
        );

        if (userProperty) {
          setProperty(userProperty);
        }
      } catch (error) {
        console.error("Unable to load property:", error);
      }

      setLoading(false);
    };

    loadProperty();
  }, [params]);

  function formatPrice(price: number, purpose: string) {
    if (purpose === "Rent") {
      return (
        "₹" +
        price.toLocaleString("en-IN") +
        "/month"
      );
    }

    if (price >= 10000000) {
      return (
        "₹" +
        (price / 10000000).toFixed(2) +
        " Cr"
      );
    }

    if (price >= 100000) {
      return (
        "₹" +
        (price / 100000).toFixed(0) +
        " Lakh"
      );
    }

    return "₹" + price.toLocaleString("en-IN");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">
          Loading property...
        </p>
      </main>
    );
  }

  if (!property) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <div className="text-6xl">🏠</div>

        <h1 className="mt-5 text-3xl font-bold text-gray-900">
          Property Not Found
        </h1>

        <p className="mt-2 max-w-md text-gray-500">
          The property you are looking for does not exist
          or may have been removed.
        </p>

        <Link
          href="/search"
          className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Browse Properties
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-700"
          >
            PLOTAPNA
          </Link>

          <div className="flex items-center gap-5 text-sm font-medium">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              href="/search"
              className="text-gray-700 hover:text-blue-700"
            >
              Properties
            </Link>

            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-700"
            >
              Dashboard
            </Link>

            <Link
              href="/post-property"
              className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
            >
              Post Property
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        {/* Back */}
        <Link
          href="/search"
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          ← Back to Properties
        </Link>

        {/* Property Card */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          {/* Image */}
          <div className="h-72 bg-gray-100 md:h-96">
            {property.image ? (
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
                <div className="text-center">
                  <div className="text-7xl">🏡</div>

                  <p className="mt-3 text-sm text-gray-500">
                    Property photos coming soon
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {property.purpose}
                </span>

                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                  {property.title}
                </h1>

                <p className="mt-2 text-gray-500">
                  📍 {property.location}, {property.city}
                </p>
              </div>

              <div className="md:text-right">
                <p className="text-3xl font-bold text-gray-900">
                  {formatPrice(
                    property.price,
                    property.purpose
                  )}
                </p>
              </div>
            </div>

            {/* Property Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-y py-6 md:grid-cols-4">
              <div>
                <p className="text-sm text-gray-500">
                  Property Type
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {property.type}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Area
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {property.area.toLocaleString("en-IN")} sq.ft
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Bedrooms
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {property.bedrooms > 0
                    ? `${property.bedrooms} BHK`
                    : "Not Applicable"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Listing
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  For {property.purpose}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">
                Property Description
              </h2>

              <p className="mt-3 whitespace-pre-line leading-7 text-gray-600">
                {property.description ||
                  "No description has been provided for this property."}
              </p>
            </div>

            {/* Owner */}
            {property.ownerName && (
              <div className="mt-8 rounded-xl bg-gray-50 p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Contact Property Owner
                </h2>

                <div className="mt-4">
                  <p className="font-semibold text-gray-900">
                    {property.ownerName}
                  </p>

                  {property.ownerMobile && (
                    <p className="mt-1 text-gray-600">
                      📞 {property.ownerMobile}
                    </p>
                  )}

                  {property.ownerEmail && (
                    <p className="mt-1 text-gray-600">
                      ✉️ {property.ownerEmail}
                    </p>
                  )}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  {property.ownerMobile && (
                    <a
                      href={`tel:${property.ownerMobile}`}
                      className="rounded-lg bg-blue-700 px-6 py-3 text-center font-semibold text-white hover:bg-blue-800"
                    >
                      Call Owner
                    </a>
                  )}

                  {property.ownerEmail && (
                    <a
                      href={`mailto:${property.ownerEmail}`}
                      className="rounded-lg border border-blue-700 px-6 py-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
                    >
                      Email Owner
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Bottom actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/search"
                className="rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
              >
                ← Browse More Properties
              </Link>

              <Link
                href="/post-property"
                className="rounded-lg bg-blue-700 px-6 py-3 text-center font-semibold text-white hover:bg-blue-800"
              >
                Post Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}