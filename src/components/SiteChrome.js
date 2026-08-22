"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Wraps page content with the public site chrome (Navbar + Footer), except on
// the admin panel (/admin/*), which has its own layout. This keeps every public
// route rendering exactly as before while giving the CMS a clean, chrome-free UI
// — without moving any route folders.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
