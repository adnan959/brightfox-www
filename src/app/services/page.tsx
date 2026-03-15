import type { Metadata } from "next";
import {
  Heart,
  Blocks,
  CalendarCheck,
  Clock,
  UtensilsCrossed,
  Users,
  ExternalLink,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Infant & Toddler Day Home Services | Bright Fox Dayhome Calgary",
  description:
    "Full-time and part-time childcare for infants and toddlers in Nolan Hill, Calgary. Meals included. Alberta subsidies accepted. From $326.25/month.",
  openGraph: { images: ["/images/social.png"] },
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby: Heart,
  Blocks,
  CalendarCheck,
  Clock,
  UtensilsCrossed,
  Users,
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />

      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="cream" className="mb-4">
              Nolan Hill, NW Calgary
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-brown mb-6">
              Everything Your Family Needs
            </h1>
            <p className="text-lg text-text/80 font-body leading-relaxed">
              From infant care to full-time toddler programmes, Bright Fox
              Dayhome offers comprehensive childcare services in a warm, home
              setting. All meals included. Alberta subsidies accepted.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <Card key={service.title} className="p-8">
                  {Icon && (
                    <div className="h-14 w-14 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-orange" />
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-brown font-display mb-3">
                    {service.title}
                  </h2>
                  <p className="text-text/70 font-body leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Affordability"
            title="Alberta Childcare Subsidy"
            centered
          />
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <p className="text-4xl font-bold text-orange font-display mb-2">
              $326.25<span className="text-lg text-text/50">/month</span>
            </p>
            <p className="text-text/70 font-body mb-6">
              Full-time care under Alberta&apos;s Affordability Grant
            </p>
            <div className="text-left max-w-lg mx-auto space-y-3 text-text/80 font-body">
              <p>
                Under Alberta&apos;s Affordability Grant, full-time childcare
                costs just <strong>$326.25 per month</strong>. Part-time care is{" "}
                <strong>$230 per month</strong>.
              </p>
              <p>
                No income testing required. All families pay the same rate. The
                grant is applied automatically — there is no separate application
                needed.
              </p>
            </div>
            <a
              href="https://www.alberta.ca/child-care-subsidy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange font-body font-semibold mt-6 hover:underline"
            >
              Learn more at Alberta.ca
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 text-center">
            <Button
              href={`tel:${SITE.phoneRaw}`}
              trackingEvent="phone_call_click"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
