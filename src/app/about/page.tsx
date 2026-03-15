import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Bright Fox Dayhome | Nolan Hill Calgary",
  description:
    "Meet the heart behind Bright Fox Dayhome. Learn about our story, philosophy, and commitment to quality childcare in Nolan Hill, NW Calgary.",
  openGraph: { images: ["/images/social.png"] },
};

const CREDENTIALS = [
  "Alberta Approved Family Day Home",
  "First Aid & CPR Certified",
  "Child Development Training",
  "Criminal Record & Vulnerable Sector Check",
  "Home Safety Inspection Approved",
  "Ongoing Professional Development",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />

      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl -rotate-2" />
              <Image
                src="/images/caregiver.jpeg"
                alt="Bright Fox Dayhome caregiver with children outdoors"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-xl object-cover w-full aspect-[4/3]"
                priority
              />
            </div>

            <div>
              <Badge variant="cream" className="mb-4">
                Alberta Approved
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-brown mb-6">
                Meet the Heart Behind Bright Fox
              </h1>
              <p className="text-xl text-gold font-display italic">
                Where every child is family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Story" title="Why I started Bright Fox" />
          <div className="prose prose-lg max-w-none space-y-5 text-text/90 font-body leading-relaxed">
            <p>
              Starting Bright Fox Dayhome came from a deeply personal place. As
              a parent myself, I understand how difficult it is to find childcare
              that feels right — somewhere your child is truly cared for, not
              just supervised.
            </p>
            <p>
              I wanted to create a space where children feel at home. Where they
              are greeted with warmth every morning, fed nutritious home-cooked
              meals, and given the freedom to learn through play and exploration.
              A place where parents can go to work knowing their child is safe,
              happy, and thriving.
            </p>
            <blockquote className="text-xl italic text-gold font-display border-l-4 border-orange pl-6 my-8">
              &ldquo;With a maximum of 6 children, every child gets the individual attention they deserve.&rdquo;
            </blockquote>
            <p>
              Bright Fox is that place. Located in the heart of Nolan Hill, our
              dayhome provides the personal attention and consistent care that
              only a small, home-based setting can offer. With a maximum of 6
              children, every child gets the individual attention they deserve.
            </p>
            <p>
              We follow Alberta&apos;s highest standards for family day homes and are
              committed to continuous learning and improvement. But beyond
              certifications and standards, what truly sets us apart is the love
              and dedication we bring to every single day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Credentials"
            title="Qualified and committed"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREDENTIALS.map((credential) => (
              <div
                key={credential}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-orange shrink-0" />
                <span className="text-brown font-body font-medium">
                  {credential}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Philosophy"
            title="Learning through love and play"
          />
          <div className="space-y-5 text-text/90 font-body leading-relaxed">
            <p>
              We believe that the early years are the most important. Children
              learn best when they feel safe, loved, and free to explore. Our
              approach centres on play-based learning — where curiosity leads the
              way and every moment is an opportunity to grow.
            </p>
            <p>
              From arts and crafts to outdoor adventures, storytime to music and
              movement, our days are full of engaging activities designed to
              build social skills, creativity, and confidence. We also value
              routine, nutrition, and rest — the foundations that help children
              thrive.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button
              href={`tel:${SITE.phoneRaw}`}
              trackingEvent="phone_call_click"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
