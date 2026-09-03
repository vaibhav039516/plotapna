"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  mobile: string;
  email: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

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

  const logout = () => {
    localStorage.removeItem("plotapna_current_user");
    router.push("/login");
  };

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading...</p>
      </main>
    );
  }

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
              Search Properties
            </Link>

            <button
              onClick={logout}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-600">
            MY ACCOUNT
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Welcome, {user.name}
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your properties and account from here.
          </p>
        </div>

        {/* Action cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/post-property"
            className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm transition hover:bg-blue-700"
          >
            <div className="text-3xl">🏠</div>

            <h2 className="mt-4 text-xl font-bold">
              Post a Property
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              List your property for sale or rent on PlotApna.
            </p>

            <div className="mt-5 font-semibold">
              Post Property →
            </div>
          </Link>

          <Link
            href="/search"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
          >
            <div className="text-3xl">🔎</div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Search Properties
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Find plots, apartments, houses, villas and commercial
              properties.
            </p>

            <div className="mt-5 font-semibold text-blue-600">
              Start Searching →
            </div>
          </Link>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="text-3xl">👤</div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              My Profile
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>

            <p className="mt-1 text-sm text-gray-600">
              <strong>Mobile:</strong> {user.mobile}
            </p>
          </div>
        </div>

        {/* My Properties */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                My Properties
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Properties posted from your account will appear here.
              </p>
            </div>

            <Link
              href="/post-property"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              + Post Property
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-10 text-center">
            <div className="text-4xl">🏡</div>

            <h3 className="mt-3 font-semibold text-gray-900">
              No properties posted yet
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Start by posting your first property on PlotApna.
            </p>

            <Link
              href="/post-property"
              className="mt-5 inline-block rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Post Your Property
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}