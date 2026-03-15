"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  CheckCircle,
  Star,
  Quote,
  Clock,
  DollarSign,
  ShieldCheck,
  Heart,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Accordion from "@/components/ui/Accordion";
import Logo from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";

type Feature = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  name: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type LandingPageProps = {
  trustBadge: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  features: Feature[];
  testimonials: Testimonial[];
  heroImage: string;
  heroImageAlt: string;
  galleryImages: { src: string; alt: string }[];
  aboutTitle: string;
  aboutText: string[];
  faqs: FaqItem[];
};

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Alberta Approved" },
  { icon: Clock, label: "Open 6:30 AM" },
  { icon: DollarSign, label: "$326.25/mo" },
  { icon: Heart, label: "Infant Care" },
];

export default function LandingPage({
  trustBadge,
  headline,
  subheadline,
  primaryCta,
  features,
  testimonials,
  heroImage,
  heroImageAlt,
  galleryImages,
  aboutTitle,
  aboutText,
  faqs,
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-cream border-b border-cream-dark">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Logo />
          <Button
            href={`tel:${SITE.phoneRaw}`}
            trackingEvent="phone_call_click"
            className="text-sm"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <Badge variant="cream" className="mb-6">
              {trustBadge}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown max-w-3xl mx-auto leading-tight">
              {headline}
            </h1>

            <p className="mt-6 text-lg text-text/80 font-body max-w-2xl mx-auto">
              {subheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${SITE.phoneRaw}`}
                trackingEvent="phone_call_click"
              >
                <Phone className="h-5 w-5" />
                {primaryCta}
              </Button>
              <Button
                variant="secondary"
                href={`mailto:${SITE.email}`}
                trackingEvent="email_click"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={1000}
              height={500}
              className="w-full aspect-[2/1] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brown">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 justify-center"
              >
                <item.icon className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm font-semibold text-white font-body">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brown font-display text-center mb-10">
            Why Families Choose Bright Fox
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-cream rounded-xl"
              >
                <CheckCircle className="h-6 w-6 text-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-brown font-display mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-text/70 font-body text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold/10 rounded-3xl -rotate-2" />
              <Image
                src="/images/caregiver.jpeg"
                alt="Bright Fox Dayhome caregiver"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-lg object-cover w-full aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown font-display mb-6">
                {aboutTitle}
              </h2>
              <div className="space-y-4 text-text/80 font-body leading-relaxed">
                {aboutText.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brown font-display text-center mb-10">
              See Our Space
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="rounded-xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brown font-display text-center mb-10">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm relative">
                <Quote className="h-8 w-8 text-gold/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-text/80 font-body leading-relaxed mb-4 italic text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-orange/10 text-orange flex items-center justify-center font-bold font-body text-sm">
                    {t.name[0]}
                  </div>
                  <p className="text-brown font-body font-semibold text-sm">
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brown font-display text-center mb-10">
              Common Questions
            </h2>
            <div className="bg-cream rounded-2xl p-6 sm:p-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-brown">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gold font-display mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/70 font-body mb-8">
            Call, text, or email today. We respond quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`tel:${SITE.phoneRaw}`}
              trackingEvent="phone_call_click"
            >
              <Phone className="h-5 w-5" />
              {primaryCta}
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${SITE.email}`}
              trackingEvent="email_click"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </Button>
          </div>
          <p className="mt-6 text-white/50 font-body text-sm">
            {SITE.address}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown border-t border-white/10 py-6">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-sm">
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/40 font-body text-sm hover:text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-white/40 font-body text-sm hover:text-white/60"
            >
              Visit Main Site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
