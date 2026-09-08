"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type User = {
  name: string;
  mobile: string;
  email: string;
};

type Conversation = {
  id: number;
  property_id: string;
  buyer_email: string;
  owner_email: string;
  created_at: string;
  updated_at: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [chats, setChats] = useState<Conversation[]>([]);
  const [loadingChats, setLoadingChats] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("plotapna_current_user");

    if (!savedUser) {
      router.push("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
    } catch {
      localStorage.removeItem("plotapna_current_user");
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const userEmail = user.email;

    async function loadChats() {
      try {
        setLoadingChats(true);

        const { data, error } = await supabase
          .from("conversations")
          .select("*")
          .or(
            `buyer_email.eq.${userEmail},owner_email.eq.${userEmail}`
          )
          .order("updated_at", { ascending: false });

        if (error) {
          console.error("Unable to load chats:", error);
          return;
        }

        setChats(data || []);
      } catch (error) {
        console.error("Chat loading error:", error);
      } finally {
        setLoadingChats(false);
      }
    }

    loadChats();
  }, [user]);

  const logout = () => {
    localStorage.removeItem("plotapna_current_user");
    router.push("/login");
  };

  const getChatUrl = (chat: Conversation) => {
    const isBuyer = chat.buyer_email === user?.email;

    const otherEmail = isBuyer
      ? chat.owner_email
      : chat.buyer_email;

    const otherName = isBuyer
      ? "Property Owner"
      : "Property Buyer";

    return `/chat?propertyId=${encodeURIComponent(
      chat.property_id
    )}&ownerEmail=${encodeURIComponent(
      otherEmail
    )}&ownerName=${encodeURIComponent(
      otherName
    )}&propertyTitle=${encodeURIComponent(
      `Property ${chat.property_id}`
    )}`;
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

        {/* My Chats */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                💬 My Chats
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View and continue your property conversations.
              </p>
            </div>

            <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              {chats.length}{" "}
              {chats.length === 1 ? "Chat" : "Chats"}
            </div>
          </div>

          {loadingChats ? (
            <div className="mt-6 rounded-xl bg-gray-50 p-8 text-center">
              <p className="text-sm text-gray-500">
                Loading conversations...
              </p>
            </div>
          ) : chats.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-10 text-center">
              <div className="text-4xl">💬</div>

              <h3 className="mt-3 font-semibold text-gray-900">
                No conversations yet
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Chat with property owners or interested buyers.
              </p>

              <Link
                href="/search"
                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Find Properties
              </Link>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {chats.map((chat) => {
                const isBuyer = chat.buyer_email === user.email;

                return (
                  <Link
                    key={chat.id}
                    href={getChatUrl(chat)}
                    className="block rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900">
                          🏠 Property {chat.property_id}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {isBuyer
                            ? `Owner: ${chat.owner_email}`
                            : `Buyer: ${chat.buyer_email}`}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Started{" "}
                          {new Date(
                            chat.created_at
                          ).toLocaleDateString("en-IN")}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                        Open Chat →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
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