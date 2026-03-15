import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Bright Fox Dayhome | Book a Visit | Nolan Hill Calgary",
  description:
    "Get in touch with Bright Fox Dayhome. Call, text, email, or visit us in Nolan Hill, NW Calgary. Book a tour today.",
  openGraph: { images: ["/images/social.png"] },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="cream" className="mb-4">
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-brown mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-text/80 font-body max-w-2xl">
            We&apos;d love to hear from you. Send us a message, give us a call,
            or schedule a visit to see our dayhome in person.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors">
                    <Phone className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-text/50 font-body">
                      Call or Text
                    </p>
                    <p className="text-brown font-body font-semibold">
                      {SITE.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors">
                    <Mail className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-text/50 font-body">Email</p>
                    <p className="text-brown font-body font-semibold break-all">
                      {SITE.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                    <MapPin className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-text/50 font-body">Address</p>
                    <p className="text-brown font-body font-semibold">
                      {SITE.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                    <Clock className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-text/50 font-body">Hours</p>
                    <p className="text-brown font-body font-semibold">
                      {SITE.hours}
                    </p>
                    <p className="text-sm text-text/50 font-body">
                      {SITE.days}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-sm aspect-video">
                <iframe
                  src={SITE.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bright Fox Dayhome location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
