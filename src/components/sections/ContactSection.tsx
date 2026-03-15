"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section className="py-20 bg-orange relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange to-orange-dark" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            Ready to book a visit?
          </h2>
          <p className="mt-3 text-white/80 font-body text-lg">
            Call, text, or email &mdash; we respond quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <a
            href={`tel:${SITE.phoneRaw}`}
            onClick={() =>
              trackEvent("phone_call_click", { location: "contact_section" })
            }
            className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-colors"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 font-body text-sm">Call or Text</p>
              <p className="text-white font-body font-semibold text-lg">
                {SITE.phone}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            onClick={() =>
              trackEvent("email_click", { location: "contact_section" })
            }
            className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-colors"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 font-body text-sm">Email Us</p>
              <p className="text-white font-body font-semibold text-base break-all">
                {SITE.email}
              </p>
            </div>
          </a>

          <a
            href={SITE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-colors"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 font-body text-sm">Visit Us</p>
              <p className="text-white font-body font-semibold text-base">
                {SITE.address}
              </p>
            </div>
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              src={SITE.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bright Fox Dayhome location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
