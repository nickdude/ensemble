"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  // The login page renders no header (no session yet).
  if (pathname === "/admin/login") return null;

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/admin" className="flex items-center gap-2">
          <span className="font-poppins text-lg font-semibold text-gray-900">
            Ensemble
          </span>
          <span className="rounded bg-brand-blue/10 px-2 py-0.5 text-xs font-medium text-brand-blue">
            Content Admin
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Dashboard
          </Link>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            View site ↗
          </a>
          <button
            type="button"
            onClick={logout}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}
