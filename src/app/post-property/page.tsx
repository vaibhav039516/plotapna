"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  mobile: string;
  email: string;
};

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
  description: string;
  ownerId: string;
  ownerName: string;
  ownerEmail: string;
  ownerMobile: string;
  createdAt: string;
};

export default function PostPropertyPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const [purpose, setPurpose] = useState("Buy");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("2");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("plotapna_current_user");

    if (!savedUser) {
      router.push("/login");
      return;
    }

    try {
      setUser(JSON.parse(savedUser));
    } catch {
      localStorage.removeItem("plotapna_current_user");
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!user) {
      setError("Please login before posting a property.");
      return;
    }

    if (
      !title ||
      !city ||
      !location ||
      !price ||
      !area ||
      !description
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const newProperty: Property = {
      id: `user-${Date.now()}`,
      title,
      city,
      location,
      type: propertyType,
      purpose,
      price: Number(price),
      bedrooms:
        propertyType === "Plot" ||
        propertyType === "Land" ||
        propertyType === "Commercial"
          ? 0
          : Number(bedrooms),
      area: Number(area),
      image: "",
      description,
      ownerId: user.email,
      ownerName: user.name,
      ownerEmail: user.email,
      ownerMobile: user.mobile,
      createdAt: new Date().toISOString(),
    };

    const existingProperties = JSON.parse(
      localStorage.getItem("plotapna_user_properties") || "[]"
    );

    localStorage.setItem(
      "plotapna_user_properties",
      JSON.stringify([...existingProperties, newProperty])
    );

    setMessage("Property posted successfully!");

    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            PLOTAPNA
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/search"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Search
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Page */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            LIST YOUR PROPERTY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Post Your Property
          </h1>

          <p className="mt-2 text-gray-600">
            Reach buyers and tenants looking for properties on PlotApna.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-8"
        >
          {/* Purpose */}
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Property Details
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Tell us about the property you want to list.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Buy / Rent */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Purpose *
              </label>

              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="Buy">Sell / Buy</option>
                <option value="Rent">Rent</option>
              </select>
            </div>

            {/* Property type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Property Type *
              </label>

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="Apartment">Apartment</option>
                <option value="Independent House">
                  Independent House
                </option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
                <option value="Land">Land</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Title */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Property Title *
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Example: Premium 3 BHK Apartment in Gurgaon"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* City */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                City *
              </label>

              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Example: Gurgaon"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Locality / Sector *
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Example: Sector 65"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Price *
              </label>

              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Example: 8500000"
                min="0"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <p className="mt-1 text-xs text-gray-500">
                Enter the amount in Indian Rupees.
              </p>
            </div>

            {/* Area */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Area (sq.ft.) *
              </label>

              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Example: 1500"
                min="1"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Bedrooms */}
            {propertyType !== "Plot" &&
              propertyType !== "Land" &&
              propertyType !== "Commercial" && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Bedrooms
                  </label>

                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  >
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    <option value="5">5+ BHK</option>
                  </select>
                </div>
              )}

            {/* Description */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Description *
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your property, amenities, nearby facilities, location advantages, etc."
                rows={6}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Image notice */}
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-900">
              📷 Property photos
            </p>

            <p className="mt-1 text-sm text-blue-800">
              Photo uploading is coming next. For today's MVP launch,
              you can publish the property without photos.
            </p>
          </div>

          {/* Messages */}
          {error && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          {message && (
            <div className="mt-5 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              {message}
            </div>
          )}

          {/* Submit */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Post Property
            </button>

            <Link
              href="/dashboard"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}