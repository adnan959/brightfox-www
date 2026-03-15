"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { SITE } from "@/lib/constants";

const HERO_IMAGES = [
  { src: "/images/outdoor-play.jpeg", alt: "Children playing outdoors at Bright Fox Dayhome" },
  { src: "/images/space-1.jpeg", alt: "Bright and welcoming play space" },
  { src: "/images/activity-2.jpeg", alt: "Creative activities and learning" },
  { src: "/images/room-1.jpeg", alt: "Cozy rest and nap area" },
  { src: "/images/space-3.jpeg", alt: "Safe indoor play environment" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % HERO_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <Badge variant="cream" className="mb-6">
              Alberta Approved Family Day Home &middot; Nolan Hill, Calgary
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown leading-tight">
              Bright Fox Dayhome
            </h1>

            <p className="mt-3 text-xl sm:text-2xl text-gold font-display italic">
              Growing Smart, Playing Bright
            </p>

            <p className="mt-6 text-lg text-text/80 font-body leading-relaxed max-w-lg">
              Certified home-based childcare in Nolan Hill, NW Calgary. Infant
              spots and sibling spaces available.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE.phoneRaw}`}
                trackingEvent="phone_call_click"
                fullWidth
                className="sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call or Text Now &mdash; {SITE.phone}
              </Button>
              <Button
                variant="secondary"
                href={`mailto:${SITE.email}`}
                trackingEvent="email_click"
                fullWidth
                className="sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </div>

            <div className="mt-6">
              <Badge variant="gold">
                Infant spots available &middot; Siblings welcome!
              </Badge>
            </div>
          </div>

          <div className="lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg max-h-[280px] sm:max-h-none overflow-hidden">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl -rotate-3" />
              <div className="relative rounded-2xl shadow-xl overflow-hidden aspect-[4/3]">
                {HERO_IMAGES.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === current ? "opacity-100" : "opacity-0"
                    }`}
                    priority={i === 0}
                  />
                ))}

                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors z-10"
                >
                  <ChevronLeft className="h-4 w-4 text-brown" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors z-10"
                >
                  <ChevronRight className="h-4 w-4 text-brown" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {HERO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
