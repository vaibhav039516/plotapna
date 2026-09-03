"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("plotapna_current_user");
    setIsLoggedIn(!!currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("plotapna_current_user");
    setIsLoggedIn(false);
  };

  const categories = [
    {
      name: "Apartments",
      type: "Apartment",
      image: "/properties/property-1.jpg",
    },
    {
      name: "Independent Houses",
      type: "Independent House",
      image: "/properties/property-5.jpg",
    },
    {
      name: "Villas",
      type: "Villa",
      image: "/properties/property-4.jpg",
    },
    {
      name: "Plots",
      type: "Plot",
      image: "/properties/property-3.jpg",
    },
    {
      name: "Land",
      type: "Land",
      image: "/properties/property-3.jpg",
    },
    {
      name: "Commercial",
      type: "Commercial",
      image: "/properties/property-2.jpg",
    },
  ];

  const featuredProperties = [
    {
      id: "1",
      title: "Premium 3 BHK Apartment",
      location: "Sector 65, Gurgaon",
      price: "₹1.85 Cr",
      image: "/properties/property-1.jpg",
    },
    {
      id: "2",
      title: "Residential Plot",
      location: "Sector 150, Noida",
      price: "₹72 Lakh",
      image: "/properties/property-3.jpg",
    },
    {
      id: "3",
      title: "Luxury Villa",
      location: "Whitefield, Bangalore",
      price: "₹3.25 Cr",
      image: "/properties/property-4.jpg",
    },
  ];

  const cities = [
    "Gurgaon",
    "Delhi",
    "Noida",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-blue-700"
          >
            PLOTAPNA
          </Link>

          <div className="hidden gap-8 md:flex">
            <Link
              href="/search?purpose=Buy"
              className="text-gray-700 transition hover:text-blue-700"
            >
              Buy
            </Link>

            <Link
              href="/search?purpose=Rent"
              className="text-gray-700 transition hover:text-blue-700"
            >
              Rent
            </Link>

            <Link
              href="/search"
              className="text-gray-700 transition hover:text-blue-700"
            >
              Projects
            </Link>

            <Link
              href="/search?type=Commercial"
              className="text-gray-700 transition hover:text-blue-700"
            >
              Commercial
            </Link>
          </div>

          {/* ACCOUNT + POST PROPERTY */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="hidden rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-700 hover:text-blue-700 sm:block"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="hidden rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-red-600 sm:block"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-700 hover:text-blue-700"
                >
                  Login
                </Link>

                <Link
                  href="/login"
                  className="hidden rounded-lg px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 sm:block"
                >
                  Sign Up
                </Link>
              </>
            )}

            <Link
              href="/post-property"
              className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
            >
              Post Property
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 font-medium text-blue-700">
            INDIA&apos;S PROPERTY MARKETPLACE
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Find a place you can
            <br />
            call your own.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover plots, homes, apartments and commercial properties
            across India.
          </p>

          {/* SEARCH BOX */}
          <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-white p-3 shadow-xl">
            <div className="flex flex-col gap-3 md:flex-row">
              <select className="rounded-xl border px-5 py-4 text-gray-700 md:w-36">
                <option>Buy</option>
                <option>Rent</option>
                <option>Commercial</option>
              </select>

              <select className="rounded-xl border px-5 py-4 text-gray-700 md:w-48">
                <option>Gurgaon</option>
                <option>Delhi</option>
                <option>Noida</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
              </select>

              <input
                type="text"
                placeholder="Search locality, sector or project"
                className="flex-1 rounded-xl border px-5 py-4 text-gray-700 outline-none focus:border-blue-500"
              />

              <Link
                href="/search"
                className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE PROPERTIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore properties
          </h2>

          <p className="mt-2 text-gray-500">
            Find the right property for your next move.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/search?type=${encodeURIComponent(category.type)}`}
              className="group overflow-hidden rounded-2xl border bg-white text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-32 overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-700">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured properties
              </h2>

              <p className="mt-2 text-gray-500">
                Handpicked properties worth exploring.
              </p>
            </div>

            <Link
              href="/search"
              className="hidden font-semibold text-blue-700 hover:text-blue-800 md:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-2xl font-bold text-gray-900">
                    {property.price}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {property.title}
                  </h3>

                  <p className="mt-1 text-gray-500">
                    {property.location}
                  </p>

                  <Link
                    href={`/property/${property.id}`}
                    className="mt-5 block w-full rounded-lg border py-3 text-center font-medium text-blue-700 transition hover:bg-blue-50"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR CITIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">
          Popular cities
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/search?city=${encodeURIComponent(city)}`}
              className="rounded-xl border bg-white px-5 py-4 text-center font-medium transition hover:border-blue-500 hover:text-blue-700"
            >
              {city}
            </Link>
          ))}
        </div>
      </section>

      {/* POST PROPERTY CTA */}
      <section className="bg-blue-700 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">
              Have a property to sell or rent?
            </h2>

            <p className="mt-2 text-blue-100">
              Reach thousands of property seekers on PlotApna.
            </p>
          </div>

          <Link
            href="/post-property"
            className="rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Post Your Property
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 px-6 py-10 text-gray-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-white"
            >
              PLOTAPNA
            </Link>

            <p className="mt-2 text-sm">
              Your place. Your future.
            </p>
          </div>

          <p className="text-sm">
            © 2026 PlotApna. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}