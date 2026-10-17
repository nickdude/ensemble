import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: staticDescription("/privacy-policy"),
  path: "/privacy-policy",
});

const commitments = [
  "collected fairly and for lawful purposes only",
  "kept reasonably up to date",
  "protected from unauthorised access by anyone inside or outside the company",
  "used only for the purposes in this policy",
];

const restrictions = [
  "share it unless you agree or the law requires it",
  "keep it longer than we need it",
  "transfer it outside India except where the law allows",
  "sell it to anyone",
];

const uses = [
  "deliver our design, build and furniture services",
  "respond to enquiries and requests",
  "present our services to prospective clients",
  "engage vendors and consultants for client projects",
  "recruit staff",
  "promote our work, including case studies and award entries",
  "meet legal requirements and lawful requests from authorities",
];

function PolicyList({ items }) {
  return (
    <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-brand-blue">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="privacy-policy-page bg-white text-black">
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-16 md:py-24">
        <header className="privacy-policy-page__header max-w-3xl border-b border-gray-200 pb-10">
          <p className="privacy-policy-page__muted font-poppins text-sm uppercase tracking-[0.2em] text-gray-500">
            Ensemble Infrastructure
          </p>
          <h1 className="mt-5 font-poppins text-4xl font-semibold leading-tight md:text-6xl">
            Privacy Policy
          </h1>
          <p className="privacy-policy-page__muted mt-6 font-roboto text-base leading-7 text-gray-600 md:text-lg">
            Ensemble Infrastructure India Ltd (&quot;Ensemble&quot;, &quot;EIIL&quot;, &quot;we&quot;) handles the personal information it receives through ensemble.co.in with care and in confidence. We collect, store and use it fairly and openly, and in a way that respects your rights.
          </p>
        </header>

        <div className="privacy-policy-page__body mt-12 max-w-4xl space-y-12 font-roboto text-base leading-7 text-gray-700 md:text-lg">
          <p>
            This policy covers anyone who shares personal information with us through this website. Personal information means any data that can identify a person, such as a name, address, phone number, email address, photograph or browsing data.
          </p>

          <section>
            <h2 className="font-poppins text-2xl font-medium text-black md:text-3xl">
              We will make sure personal data is:
            </h2>
            <PolicyList items={commitments} />
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-medium text-black md:text-3xl">
              We will not:
            </h2>
            <PolicyList items={restrictions} />
          </section>

          <section className="space-y-8">
            <h2 className="font-poppins text-2xl font-medium text-black md:text-3xl">
              Data protection under the DPDP Act
            </h2>
            <p>
              We collect, use and disclose personal data in line with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000. We do this only with your consent or where the law allows it.
            </p>

            <div>
              <h3 className="font-poppins text-xl font-medium text-black md:text-2xl">
                Collection
              </h3>
              <p className="mt-3">
                We receive personal data from clients, prospective clients, vendors, consultants, job applicants and others, and use it only for the purpose it was given. When you visit the site, we also collect basic technical data, such as your IP address, browser type and the pages you view. If you share someone else&apos;s details with us, you must have their consent first.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-xl font-medium text-black md:text-2xl">
                Use
              </h3>
              <p className="mt-3">We use personal data to:</p>
              <PolicyList items={uses} />
            </div>

            <div>
              <h3 className="font-poppins text-xl font-medium text-black md:text-2xl">
                Cookies
              </h3>
              <p className="mt-3">
                The site uses cookies to work properly and to help us understand how visitors use it. You can block or delete cookies in your browser settings, but some parts of the site may not work without them.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-xl font-medium text-black md:text-2xl">
                Sharing and security
              </h3>
              <p className="mt-3">
                We share personal data only with employees, group companies, vendors and consultants who need it for their work. We share it with other third parties only with your consent and under a confidentiality agreement. Only authorised staff can access personal data, and we protect it with standard technical and organisational security measures.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-xl font-medium text-black md:text-2xl">
                Accuracy and retention
              </h3>
              <p className="mt-3">
                We try to keep the data we hold accurate and complete, based on what you or a third party gave us. We delete it once we no longer need it for the purpose it was collected or for any legal requirement.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-xl font-medium text-black md:text-2xl">
                Your rights
              </h3>
              <p className="mt-3">
                You can ask us what personal data we hold about you, ask us to correct or delete it, or withdraw your consent at any time. When you withdraw consent, we stop using your data unless the law requires us to keep it.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-xl font-medium text-black md:text-2xl">
                Data breaches
              </h3>
              <p className="mt-3">
                If a breach affects your data, we will inform you and the Data Protection Board of India as the law requires.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
