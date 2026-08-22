import Link from "next/link";
import { groupedSections } from "@/lib/admin/sections";

export default function AdminDashboard() {
  const groups = groupedSections();

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-poppins text-2xl font-semibold text-gray-900">
          Content Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Edit any section of the website. Changes publish to the live site after
          you save.
        </p>
      </div>

      {groups.map(({ group, items }) => (
        <section key={group} className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            {group}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <Link
                key={s.key}
                href={`/admin/${s.key}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:border-brand-blue hover:shadow-sm"
              >
                <h3 className="font-poppins font-semibold text-gray-900 group-hover:text-brand-blue">
                  {s.label}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
