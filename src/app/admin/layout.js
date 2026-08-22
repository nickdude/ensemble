import AdminHeader from "@/components/admin/AdminHeader";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-roboto text-gray-900">
      <AdminHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
