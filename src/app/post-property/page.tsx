"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function PostPropertyPage() {
  const router = useRouter();

  const [user, setUser] = useState<{
    name: string;
    email: string;
    mobile: string;
  } | null>(null);

  const [purpose, setPurpose] = useState("Buy");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      return;
    }

    setError("");

    if (!title || !city || !location || !price || !area) {
      setError("Please fill in all required fields.");
      return;
    }

    if (
      propertyType !== "Plot" &&
      propertyType !== "Land" &&
      propertyType !== "Commercial" &&
      !bedrooms
    ) {
      setError("Please enter the number of bedrooms.");
      return;
    }

    try {
      setLoading(true);

      const { data, error: insertError } = await supabase
        .from("properties")
        .insert({
          owner_email: user.email,
          owner_name: user.name,
          owner_mobile: user.mobile,
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
          description,
          image: "",
        })
        .select()
        .single();

      if (insertError) {
        console.error("Property insert error:", insertError);
        setError(insertError.message);
        return;
      }

      console.log("Property created:", data);

      router.push(`/property/${data.id}`);
    } catch (err) {
      console.error(err);
      setError("Unable to post property. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </main>
    );
  }

  const showBedrooms =
    propertyType !== "Plot" &&
    propertyType !== "Land" &&
    propertyType !== "Commercial";

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
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-600">
            LIST YOUR PROPERTY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Post Your Property
          </h1>

          <p className="mt-2 text-gray-600">
            Reach buyers and tenants searching for properties on
            PlotApna.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Property Purpose
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPurpose("Buy")}
                className={`rounded-xl border px-4 py-3 font-semibold ${
                  purpose === "Buy"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Buy
              </button>

              <button
                type="button"
                onClick={() => setPurpose("Rent")}
                className={`rounded-xl border px-4 py-3 font-semibold ${
                  purpose === "Rent"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Property Type
            </label>

            <select
              value={propertyType}
              onChange={(event) =>
                setPropertyType(event.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option>Apartment</option>
              <option>Independent House</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Property Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Example: Premium Commercial Land"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                City
              </label>

              <input
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Example: Gurgaon"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Locality / Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
                placeholder="Example: Sector 65"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {purpose === "Rent"
                  ? "Monthly Rent (₹)"
                  : "Price (₹)"}
              </label>

              <input
                type="number"
                min="0"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                placeholder="Example: 5000000"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Area (sq ft)
              </label>

              <input
                type="number"
                min="0"
                value={area}
                onChange={(event) => setArea(event.target.value)}
                placeholder="Example: 1200"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {showBedrooms && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Bedrooms
              </label>

              <input
                type="number"
                min="0"
                value={bedrooms}
                onChange={(event) =>
                  setBedrooms(event.target.value)
                }
                placeholder="Example: 3"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Describe the property, location, amenities, road access, nearby facilities, etc."
              rows={6}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? "Posting Property..." : "Post Property"}
          </button>
        </form>
      </section>
    </main>
  );
}