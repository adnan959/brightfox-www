import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Bright Fox Dayhome website.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brown mb-8">Privacy Policy</h1>
        <div className="prose max-w-none space-y-6 text-text/80 font-body leading-relaxed">
          <p>
            <strong>Last updated:</strong> March 2026
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Information We Collect
          </h2>
          <p>
            When you use our contact form, we collect the information you
            provide: your name, email address, phone number, and message. We use
            this information solely to respond to your enquiry about our
            childcare services.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            How We Use Your Information
          </h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your enquiries about childcare services</li>
            <li>Communicate with you about enrolment</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Analytics
          </h2>
          <p>
            We use Google Analytics and Google Tag Manager to understand how
            visitors use our website. This data is collected anonymously and
            helps us improve our site. You can opt out of Google Analytics by
            installing the Google Analytics Opt-out Browser Add-on.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Cookies
          </h2>
          <p>
            Our website uses cookies for analytics purposes. These cookies do
            not collect personal information and are used solely to improve your
            browsing experience.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Your Rights
          </h2>
          <p>
            You have the right to request access to, correction of, or deletion
            of any personal information we hold about you. To exercise these
            rights, please contact us.
          </p>

          <h2 className="text-2xl font-bold text-brown font-display mt-8">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-orange hover:underline"
            >
              {SITE.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="text-orange hover:underline"
            >
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
