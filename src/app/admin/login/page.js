"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error || "Login failed");
        setLoading(false);
        return;
      }
      const from = params.get("from") || "/admin";
      router.replace(from);
    } catch {
      setError("Network error");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 font-roboto">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        <h1 className="font-poppins text-xl font-semibold text-gray-900">
          Ensemble Content Admin
        </h1>
        <p className="mt-1 text-sm text-gray-500">Enter the admin password to continue.</p>

        <label className="mt-6 block text-xs font-medium uppercase tracking-wide text-gray-500">
          Password
        </label>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
        />

        {error && <p className="mt-3 text-sm text-brand-red">{error}</p>}

        <button
          type="submit"
          disabled={loading || !password}
          className="mt-6 w-full rounded-md bg-brand-blue py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-40"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
