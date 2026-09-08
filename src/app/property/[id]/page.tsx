"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { properties } from "@/lib/properties";
import { supabase } from "@/lib/supabase";

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
  owner_email?: string;
  owner_name?: string;
  owner_mobile?: string;
  created_at?: string;
};

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = String(params.id);

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProperty() {
      try {
        setLoading(true);

        // First check the original sample properties.
        const sampleProperty = properties.find(
          (item) => String(item.id) === id
        );

        if (sampleProperty) {
          setProperty({
            ...sampleProperty,
            image: sampleProperty.image || "",
          });

          return;
        }

        // If it isn't a sample property, get it from Supabase.
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("id", id)
          .maybeSingle();

        if (error) {
          console.error("Unable to load property:", error);
          return;
        }

        if (data) {
          setProperty(data as Property);
        }
      } catch (error) {
        console.error("Property loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProperty();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading property...</p>
      </main>
    );
  }

  if (!property) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Property Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            This property may have been removed or is no longer available.
          </p>

          <Link
            href="/search"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  const isUserProperty = Boolean(property.owner_email);

  const formattedPrice =
    property.purpose === "Rent"
      ? `₹${Number(property.price).toLocaleString("en-IN")}/month`
      : `₹${Number(property.price).toLocaleString("en-IN")}`;

  const chatUrl = isUserProperty
    ? `/chat?propertyId=${encodeURIComponent(
        property.id
      )}&ownerEmail=${encodeURIComponent(
        property.owner_email || ""
      )}&ownerName=${encodeURIComponent(
        property.owner_name || "Property Owner"
      )}&propertyTitle=${encodeURIComponent(property.title)}`
    : "";

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            PLOTAPNA
          </Link>

          <div className="flex items-center gap-5 text-sm font-medium">
            <Link
              href="/search"
              className="text-gray-700 hover:text-blue-600"
            >
              Properties
            </Link>

            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </Link>

            <Link
              href="/post-property"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Post Property
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <Link
          href="/search"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Properties
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {property.image ? (
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-[420px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center bg-gray-200">
                  <div className="text-center text-gray-500">
                    <div className="text-5xl">🏠</div>

                    <p className="mt-3 font-medium">
                      Photo coming soon
                    </p>
                  </div>
                </div>
              )}

              <div className="p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {property.purpose}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                    {property.type}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                  {property.title}
                </h1>

                <p className="mt-2 text-gray-600">
                  📍 {property.location}, {property.city}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">
                      Price
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {formattedPrice}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">
                      Area
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {Number(property.area).toLocaleString(
                        "en-IN"
                      )}{" "}
                      sq ft
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">
                      Bedrooms
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {property.bedrooms > 0
                        ? property.bedrooms
                        : "N/A"}
                    </p>
                  </div>
                </div>

                {property.description && (
                  <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-900">
                      Property Description
                    </h2>

                    <p className="mt-3 whitespace-pre-line leading-7 text-gray-600">
                      {property.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-6 rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Property Price
              </p>

              <p className="mt-1 text-3xl font-bold text-gray-900">
                {formattedPrice}
              </p>

              {isUserProperty ? (
                <>
                  <div className="mt-6 border-t pt-6">
                    <p className="text-sm text-gray-500">
                      Listed by
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      {property.owner_name ||
                        "Property Owner"}
                    </p>

                    {property.owner_mobile && (
                      <p className="mt-2 text-sm text-gray-600">
                        📞 {property.owner_mobile}
                      </p>
                    )}

                    {property.owner_email && (
                      <p className="mt-1 break-all text-sm text-gray-600">
                        ✉️ {property.owner_email}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link
                      href={chatUrl}
                      className="block w-full rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
                    >
                      💬 Chat with Owner
                    </Link>

                    {property.owner_mobile && (
                      <a
                        href={`tel:${property.owner_mobile}`}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-3 text-center font-semibold text-gray-800 hover:bg-gray-50"
                      >
                        📞 Call Owner
                      </a>
                    )}

                    {property.owner_email && (
                      <a
                        href={`mailto:${property.owner_email}`}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-3 text-center font-semibold text-gray-800 hover:bg-gray-50"
                      >
                        ✉️ Email Owner
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <div className="mt-6 rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">
                    Contact information for this sample property
                    is not available yet.
                  </p>

                  <Link
                    href="/post-property"
                    className="mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    List Your Property
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}