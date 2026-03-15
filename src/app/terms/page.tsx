import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Bright Fox Dayhome website.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brown mb-8">Terms of Use</h1>
        <div className="prose max-w-none space-y-6 text-text/80 font-body leading-relaxed">
          <p>
            <strong>Last updated:</strong> March 2026
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Use of This Website
          </h2>
          <p>
            This website is provided by {SITE.name} for informational purposes
            about our childcare services. By accessing and using this website,
            you agree to these terms of use.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Accuracy of Information
          </h2>
          <p>
            We strive to keep all information on this website accurate and up to
            date. However, pricing, availability, and service details may change
            without notice. Please contact us directly to confirm current
            information.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, logos, and
            design elements, is the property of {SITE.name} and is protected by
            copyright law. You may not reproduce, distribute, or use any content
            without our written permission.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Limitation of Liability
          </h2>
          <p>
            {SITE.name} is not liable for any damages arising from the use of
            this website. This website is provided &ldquo;as is&rdquo; without
            warranties of any kind.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Contact
          </h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-orange hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
