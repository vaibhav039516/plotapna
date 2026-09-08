"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { properties } from "@/lib/properties";
import { supabase } from "@/lib/supabase";

type Property = {
  id: string;
  title: string;
  city: string;
  location: string;
  type: string;
  purpose: string;
  price: number | string;
  bedrooms: number | string;
  area: number | string;
  image?: string | null;
  description?: string | null;
  owner_email?: string | null;
  owner_name?: string | null;
  owner_mobile?: string | null;
  created_at?: string;
};

export default function SearchPage() {
  const [propertiesFromDatabase, setPropertiesFromDatabase] = useState<
    Property[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [purpose, setPurpose] = useState("All");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("All");

  const [favorites, setFavorites] = useState<string[]>([]);

  /*
   * LOAD ALL PROPERTIES
   *
   * IMPORTANT:
   * There is deliberately NO owner_email filter here.
   * Every property in the public properties table is loaded.
   */
  useEffect(() => {
    let cancelled = false;

    async function loadProperties() {
      try {
        setLoading(true);
        setErrorMessage("");

        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .order("created_at", { ascending: false });

        console.log("PLOTAPNA - ALL SUPABASE PROPERTIES:", data);
        console.log("PLOTAPNA - SUPABASE ERROR:", error);

        if (cancelled) {
          return;
        }

        if (error) {
          console.error("Unable to load properties:", error);
          setErrorMessage(error.message);
          setPropertiesFromDatabase([]);
          return;
        }

        setPropertiesFromDatabase((data || []) as Property[]);
      } catch (error) {
        console.error("Property loading error:", error);

        if (!cancelled) {
          setErrorMessage("Unable to load properties.");
          setPropertiesFromDatabase([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProperties();

    const savedFavorites = localStorage.getItem("plotapna_favorites");

    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch {
        setFavorites([]);
      }
    }

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * COMBINE DATABASE PROPERTIES + SAMPLE PROPERTIES
   */
  const allProperties = useMemo<Property[]>(() => {
    const sampleProperties: Property[] = properties.map((property) => ({
      id: String(property.id),
      title: property.title,
      city: property.city,
      location: property.location,
      type: property.type,
      purpose: property.purpose,
      price: property.price,
      bedrooms: property.bedrooms,
      area: property.area,
      image: property.image,
      description: undefined,
      owner_email: null,
      owner_name: null,
      owner_mobile: null,
    }));

    /*
     * Database properties are placed first.
     * Therefore newly posted properties appear first.
     */
    return [...propertiesFromDatabase, ...sampleProperties];
  }, [propertiesFromDatabase]);

  /*
   * FILTER PROPERTIES
   */
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const propertyPurpose = String(property.purpose || "")
        .trim()
        .toLowerCase();

      const propertyCity = String(property.city || "")
        .trim()
        .toLowerCase();

      const propertyLocation = String(property.location || "")
        .trim()
        .toLowerCase();

      const propertyType = String(property.type || "")
        .trim()
        .toLowerCase();

      const propertyPrice = Number(property.price) || 0;
      const propertyBedrooms = Number(property.bedrooms) || 0;

      /*
       * PURPOSE
       */
      if (
        purpose !== "All" &&
        propertyPurpose !== purpose.trim().toLowerCase()
      ) {
        return false;
      }

      /*
       * CITY
       */
      if (
        city.trim() &&
        !propertyCity.includes(city.trim().toLowerCase())
      ) {
        return false;
      }

      /*
       * LOCALITY
       */
      if (
        location.trim() &&
        !propertyLocation.includes(location.trim().toLowerCase())
      ) {
        return false;
      }

      /*
       * PROPERTY TYPE
       */
      if (
        type !== "All" &&
        propertyType !== type.trim().toLowerCase()
      ) {
        return false;
      }

      /*
       * MAXIMUM BUDGET
       */
      if (budget.trim()) {
        const maximumBudget = Number(budget);

        if (
          Number.isFinite(maximumBudget) &&
          propertyPrice > maximumBudget
        ) {
          return false;
        }
      }

      /*
       * BEDROOMS
       */
      if (bedrooms !== "All") {
        if (propertyBedrooms !== Number(bedrooms)) {
          return false;
        }
      }

      return true;
    });
  }, [
    allProperties,
    purpose,
    city,
    location,
    type,
    budget,
    bedrooms,
  ]);

  /*
   * FAVORITES
   */
  const toggleFavorite = (id: string) => {
    setFavorites((current) => {
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];

      localStorage.setItem(
        "plotapna_favorites",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  /*
   * CLEAR FILTERS
   */
  const clearFilters = () => {
    setPurpose("All");
    setCity("");
    setLocation("");
    setType("All");
    setBudget("");
    setBedrooms("All");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            PLOTAPNA
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/search"
              className="text-blue-600"
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
          </nav>
        </div>
      </header>

      {/* PAGE */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-600">
            PLOTAPNA PROPERTIES
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Search Properties
          </h1>

          <p className="mt-2 text-gray-600">
            Discover properties listed by owners on PlotApna.
          </p>
        </div>

        {/* FILTERS */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {/* PURPOSE */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Purpose
              </label>

              <select
                value={purpose}
                onChange={(event) =>
                  setPurpose(event.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
              >
                <option value="All">All</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
              </select>
            </div>

            {/* CITY */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                City
              </label>

              <input
                type="text"
                value={city}
                onChange={(event) =>
                  setCity(event.target.value)
                }
                placeholder="Gurgaon"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
              />
            </div>

            {/* LOCALITY */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Locality
              </label>

              <input
                type="text"
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
                placeholder="Sector 65"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
              />
            </div>

            {/* TYPE */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Property Type
              </label>

              <select
                value={type}
                onChange={(event) =>
                  setType(event.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
              >
                <option value="All">All</option>
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

            {/* BUDGET */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Max Budget (₹)
              </label>

              <input
                type="number"
                value={budget}
                onChange={(event) =>
                  setBudget(event.target.value)
                }
                placeholder="5000000"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
              />
            </div>

            {/* BEDROOMS */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Bedrooms
              </label>

              <select
                value={bedrooms}
                onChange={(event) =>
                  setBedrooms(event.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
              >
                <option value="All">All</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="5">5 BHK</option>
              </select>
            </div>
          </div>

          <button
            onClick={clearFilters}
            className="mt-4 text-sm font-medium text-blue-600 hover:underline"
          >
            Clear Filters
          </button>
        </div>

        {/* RESULTS HEADER */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {filteredProperties.length} Properties Found
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {propertiesFromDatabase.length} owner-listed properties
            </p>
          </div>
        </div>

        {/* ERROR */}
        {errorMessage && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Unable to load owner properties: {errorMessage}
          </div>
        )}

        {/* LOADING */}
        {loading ? (
          <div className="mt-6 rounded-2xl bg-white p-12 text-center shadow-sm">
            <div className="text-4xl">🏠</div>

            <p className="mt-4 text-gray-500">
              Loading properties...
            </p>
          </div>
        ) : filteredProperties.length === 0 ? (
          /* NO RESULTS */
          <div className="mt-6 rounded-2xl bg-white p-12 text-center shadow-sm">
            <div className="text-5xl">🏠</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              No properties found
            </h3>

            <p className="mt-2 text-gray-500">
              Try changing your search filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          /* PROPERTY GRID */
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => {
              const propertyId = String(property.id);

              const isFavorite =
                favorites.includes(propertyId);

              const image =
                typeof property.image === "string"
                  ? property.image.trim()
                  : "";

              const ownerListed =
                Boolean(property.owner_email);

              return (
                <div
                  key={propertyId}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* IMAGE */}
                  <div className="relative">
                    {image ? (
                      <img
                        src={image}
                        alt={property.title}
                        className="h-56 w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="flex h-56 items-center justify-center bg-gray-200">
                        <div className="text-center text-gray-500">
                          <div className="text-4xl">🏠</div>

                          <p className="mt-2 text-sm font-medium">
                            Photo coming soon
                          </p>
                        </div>
                      </div>
                    )}

                    {/* FAVORITE */}
                    <button
                      type="button"
                      onClick={() =>
                        toggleFavorite(propertyId)
                      }
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl shadow hover:bg-white"
                      aria-label={
                        isFavorite
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      {isFavorite ? "❤️" : "♡"}
                    </button>

                    {/* PURPOSE */}
                    <span className="absolute bottom-3 left-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      {property.purpose}
                    </span>

                    {/* OWNER LISTED */}
                    {ownerListed && (
                      <span className="absolute right-3 bottom-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                        Owner Listed
                      </span>
                    )}
                  </div>

                  {/* DETAILS */}
                  <div className="p-5">
                    <h3 className="line-clamp-2 font-bold text-gray-900">
                      {property.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      📍 {property.location},{" "}
                      {property.city}
                    </p>

                    {/* PRICE */}
                    <p className="mt-4 text-xl font-bold text-gray-900">
                      ₹
                      {Number(property.price).toLocaleString(
                        "en-IN"
                      )}

                      {property.purpose === "Rent" && (
                        <span className="text-sm font-normal text-gray-500">
                          {" "}
                          / month
                        </span>
                      )}
                    </p>

                    {/* PROPERTY INFO */}
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                      <span>
                        {Number(property.area).toLocaleString(
                          "en-IN"
                        )}{" "}
                        sq ft
                      </span>

                      {Number(property.bedrooms) > 0 && (
                        <span>
                          {Number(property.bedrooms)} BHK
                        </span>
                      )}

                      <span>{property.type}</span>
                    </div>

                    {/* OWNER */}
                    {ownerListed && (
                      <div className="mt-4 rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">
                          Listed by
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {property.owner_name ||
                            "Property Owner"}
                        </p>
                      </div>
                    )}

                    {/* DETAILS BUTTON */}
                    <Link
                      href={`/property/${property.id}`}
                      className="mt-5 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}