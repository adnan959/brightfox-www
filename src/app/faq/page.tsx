import type { Metadata } from "next";
import Accordion from "@/components/ui/Accordion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FAQ_ITEMS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Bright Fox Dayhome | Nolan Hill, NW Calgary",
  description:
    "Frequently asked questions about Bright Fox Dayhome in Nolan Hill, Calgary. Hours, pricing, subsidies, infant care, and more.",
  openGraph: { images: ["/images/social.png"] },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ_ITEMS as unknown as { question: string; answer: string }[])} />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Badge variant="cream" className="mb-4">
            Common Questions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-brown mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-text/80 font-body">
            Everything you need to know about Bright Fox Dayhome. Can&apos;t
            find what you&apos;re looking for? Get in touch.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <Accordion items={[...FAQ_ITEMS]} />
          </div>

          <div className="mt-8 bg-cream-dark/30 rounded-2xl p-8 text-center">
            <p className="text-text/70 font-body mb-4">
              Still have questions?
            </p>
            <Button
              href={`tel:${SITE.phoneRaw}`}
              trackingEvent="phone_call_click"
            >
              Call or Text Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
