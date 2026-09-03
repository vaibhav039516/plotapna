"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("plotapna_users") || "[]");

    if (isSignup) {
      if (!name || !email || !mobile || !password) {
        setError("Please fill all fields.");
        return;
      }

      const existingUser = users.find(
        (user: { email: string }) =>
          user.email.toLowerCase() === email.toLowerCase()
      );

      if (existingUser) {
        setError("An account with this email already exists.");
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        mobile,
        password,
      };

      localStorage.setItem(
        "plotapna_users",
        JSON.stringify([...users, newUser])
      );

      localStorage.setItem("plotapna_current_user", JSON.stringify(newUser));

      router.push("/dashboard");
      return;
    }

    const user = users.find(
      (item: { email: string; password: string }) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("plotapna_current_user", JSON.stringify(user));

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-700"
          >
            PLOTAPNA
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-10">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {isSignup ? "Create your account" : "Welcome back"}
            </h1>

            <p className="mt-2 text-gray-500">
              {isSignup
                ? "Join PlotApna and list your property."
                : "Login to manage your PlotApna properties."}
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {isSignup && (
              <>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter mobile number"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
              </>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-700 py-3.5 font-semibold text-white transition hover:bg-blue-800"
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup);
                setError("");
              }}
              className="ml-1 font-semibold text-blue-700 hover:text-blue-800"
            >
              {isSignup ? "Login" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}