"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { properties } from "@/lib/properties";

function formatPrice(price: number, purpose: string) {
  if (purpose === "Rent") {
    return "₹" + price.toLocaleString("en-IN") + "/month";
  }

  if (price >= 10000000) {
    return "₹" + (price / 10000000).toFixed(2) + " Cr";
  }

  if (price >= 100000) {
    return "₹" + (price / 100000).toFixed(0) + " Lakh";
  }

  return "₹" + price.toLocaleString("en-IN");
}

type UserProperty = {
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

export default function SearchPage() {
  const [userProperties, setUserProperties] = useState<UserProperty[]>([]);

  const [purpose, setPurpose] = useState("Buy");
  const [city, setCity] = useState("All Cities");
  const [locality, setLocality] = useState("");

  const [propertyType, setPropertyType] = useState("All Types");
  const [budget, setBudget] = useState("Any Budget");
  const [bedrooms, setBedrooms] = useState("Any");

  const [appliedPurpose, setAppliedPurpose] = useState("Buy");
  const [appliedCity, setAppliedCity] = useState("All Cities");
  const [appliedLocality, setAppliedLocality] = useState("");
  const [appliedPropertyType, setAppliedPropertyType] =
    useState("All Types");
  const [appliedBudget, setAppliedBudget] =
    useState("Any Budget");
  const [appliedBedrooms, setAppliedBedrooms] =
    useState("Any");

  const [favorites, setFavorites] = useState<string[]>([]);

  // Load properties posted by users
  useEffect(() => {
    try {
      const savedProperties = JSON.parse(
        localStorage.getItem("plotapna_user_properties") || "[]"
      );

      setUserProperties(savedProperties);
    } catch {
      setUserProperties([]);
    }

    try {
      const savedFavorites = JSON.parse(
        localStorage.getItem("plotapna_favorites") || "[]"
      );

      setFavorites(savedFavorites);
    } catch {
      setFavorites([]);
    }
  }, []);

  function handleSearch() {
    setAppliedPurpose(purpose);
    setAppliedCity(city);
    setAppliedLocality(locality);
    setAppliedPropertyType(propertyType);
    setAppliedBudget(budget);
    setAppliedBedrooms(bedrooms);

    console.log("Search:", {
      purpose,
      city,
      locality,
      propertyType,
      budget,
      bedrooms,
    });
  }

  function handleReset() {
    setPurpose("Buy");
    setCity("All Cities");
    setLocality("");

    setPropertyType("All Types");
    setBudget("Any Budget");
    setBedrooms("Any");

    setAppliedPurpose("Buy");
    setAppliedCity("All Cities");
    setAppliedLocality("");
    setAppliedPropertyType("All Types");
    setAppliedBudget("Any Budget");
    setAppliedBedrooms("Any");
  }

  function toggleFavorite(id: string) {
    setFavorites((current) => {
      const updatedFavorites = current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id];

      localStorage.setItem(
        "plotapna_favorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  }

  // Combine demo properties + properties posted by users
  const allProperties: UserProperty[] = [...properties, ...userProperties];

  const filteredProperties = allProperties.filter((property) => {
    const matchesPurpose =
      appliedPurpose === "All" ||
      property.purpose === appliedPurpose;

    const matchesCity =
      appliedCity === "All Cities" ||
      property.city === appliedCity;

    const searchText = appliedLocality.toLowerCase().trim();

    const matchesLocality =
      searchText === "" ||
      property.location.toLowerCase().includes(searchText) ||
      property.title.toLowerCase().includes(searchText);

    const matchesPropertyType =
      appliedPropertyType === "All Types" ||
      property.type === appliedPropertyType;

    let matchesBudget = true;

    if (appliedBudget === "Under ₹50 Lakh") {
      matchesBudget = property.price < 5000000;
    } else if (appliedBudget === "₹50 Lakh - ₹1 Cr") {
      matchesBudget =
        property.price >= 5000000 &&
        property.price <= 10000000;
    } else if (appliedBudget === "₹1 Cr - ₹2 Cr") {
      matchesBudget =
        property.price > 10000000 &&
        property.price <= 20000000;
    } else if (appliedBudget === "Above ₹2 Cr") {
      matchesBudget = property.price > 20000000;
    }

    let matchesBedrooms = true;

    if (appliedBedrooms === "1 BHK") {
      matchesBedrooms = property.bedrooms === 1;
    } else if (appliedBedrooms === "2 BHK") {
      matchesBedrooms = property.bedrooms === 2;
    } else if (appliedBedrooms === "3 BHK") {
      matchesBedrooms = property.bedrooms === 3;
    } else if (appliedBedrooms === "4+ BHK") {
      matchesBedrooms = property.bedrooms >= 4;
    }

    return (
      matchesPurpose &&
      matchesCity &&
      matchesLocality &&
      matchesPropertyType &&
      matchesBudget &&
      matchesBedrooms
    );
  });

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

          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              href="/search"
              className="text-blue-700"
            >
              Properties
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-blue-700"
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

      {/* Search Bar */}
      <section className="border-b bg-white px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="rounded-lg border px-4 py-3"
            >
              <option>Buy</option>
              <option>Rent</option>
              <option>Commercial</option>
              <option>All</option>
            </select>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-lg border px-4 py-3"
            >
              <option>All Cities</option>
              <option>Gurgaon</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>

            <input
              type="text"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search locality, sector or project"
              className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
            />

            <button
              type="button"
              onClick={handleSearch}
              className="rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Properties for Sale & Rent
            </h1>

            <p className="mt-1 text-gray-500">
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1
                ? "property"
                : "properties"}{" "}
              available on PlotApna
            </p>

            {userProperties.length > 0 && (
              <p className="mt-1 text-sm font-medium text-green-600">
                {userProperties.length} recently posted{" "}
                {userProperties.length === 1
                  ? "property"
                  : "properties"}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            Reset Search
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Filters */}
          <aside className="h-fit rounded-xl border bg-white p-5">
            <h2 className="text-lg font-bold text-gray-900">
              Filters
            </h2>

            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700">
                Property Type
              </label>

              <select
                value={propertyType}
                onChange={(e) =>
                  setPropertyType(e.target.value)
                }
                className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-700"
              >
                <option>All Types</option>
                <option>Apartment</option>
                <option>Independent House</option>
                <option>Plot</option>
                <option>Villa</option>
                <option>Land</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-gray-700">
                Budget
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-700"
              >
                <option>Any Budget</option>
                <option>Under ₹50 Lakh</option>
                <option>₹50 Lakh - ₹1 Cr</option>
                <option>₹1 Cr - ₹2 Cr</option>
                <option>Above ₹2 Cr</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-gray-700">
                Bedrooms
              </label>

              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-700"
              >
                <option>Any</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4+ BHK</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="mt-6 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Apply Filters
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="mt-3 w-full rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Reset Filters
            </button>
          </aside>

          {/* Property List */}
          <div className="space-y-5">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <article
                  key={property.id}
                  className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Property Image */}
                    <div className="h-56 bg-gray-100 md:w-64">
                      {property.image ? (
                        <img
                          src={property.image}
                          alt={property.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                            <div className="text-5xl">
                              🏡
                            </div>

                            <p className="mt-2 text-xs text-gray-500">
                              Photo coming soon
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Property Details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {property.purpose}
                          </span>

                          <h2 className="mt-3 text-xl font-bold text-gray-900">
                            {property.title}
                          </h2>

                          <p className="mt-1 text-gray-500">
                            {property.location},{" "}
                            {property.city}
                          </p>
                        </div>

                        {/* Favorite */}
                        <button
                          type="button"
                          onClick={() =>
                            toggleFavorite(
                              String(property.id)
                            )
                          }
                          aria-label="Add property to favorites"
                          className={
                            favorites.includes(
                              String(property.id)
                            )
                              ? "text-2xl text-red-500"
                              : "text-2xl text-gray-400 hover:text-red-500"
                          }
                        >
                          {favorites.includes(
                            String(property.id)
                          )
                            ? "♥"
                            : "♡"}
                        </button>
                      </div>

                      {/* Property Info */}
                      <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-600">
                        <span>
                          <strong className="text-gray-900">
                            {property.area}
                          </strong>{" "}
                          sq.ft
                        </span>

                        {property.bedrooms > 0 && (
                          <span>
                            <strong className="text-gray-900">
                              {property.bedrooms}
                            </strong>{" "}
                            BHK
                          </span>
                        )}

                        <span>{property.type}</span>
                      </div>

                      {/* Price + Details */}
                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatPrice(
                              property.price,
                              property.purpose
                            )}
                          </p>

                          {property.ownerName && (
                            <p className="mt-1 text-xs text-gray-500">
                              Listed by {property.ownerName}
                            </p>
                          )}
                        </div>

                        <Link
                          href={`/property/${property.id}`}
                          className="rounded-lg border border-blue-700 px-5 py-2 font-semibold text-blue-700 transition hover:bg-blue-50"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-xl border bg-white p-10 text-center shadow-sm">
                <div className="text-5xl">🏠</div>

                <h2 className="mt-4 text-xl font-bold text-gray-900">
                  No properties found
                </h2>

                <p className="mt-2 text-gray-500">
                  Try changing your city, locality, budget,
                  property type, or bedroom preference.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-5 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}