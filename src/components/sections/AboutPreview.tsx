import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-orange/5 rounded-3xl rotate-2" />
            <Image
              src="/images/caregiver.jpeg"
              alt="Bright Fox Dayhome caregiver with children"
              width={500}
              height={400}
              className="relative rounded-2xl shadow-lg object-cover w-full aspect-[4/3]"
            />
          </div>

          <div>
            <SectionHeading
              label="Who We Are"
              title="A warm, certified home your child will love."
            />
            <p className="text-text/80 font-body leading-relaxed mb-4">
              At Bright Fox Dayhome, your child becomes part of our family. We
              provide a safe, nurturing, and stimulating environment where
              children learn through play, explore their creativity, and build
              the foundations for lifelong learning.
            </p>
            <p className="text-text/80 font-body leading-relaxed mb-8">
              As an Alberta Approved Family Day Home, we meet the highest
              standards of safety and care — all within the comfort of a real
              home in the heart of Nolan Hill.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange text-white rounded-full px-6 py-3 font-body font-semibold hover:bg-orange-light hover:shadow-lg transition-all text-base"
              >
                Schedule a Visit
              </Link>
              <Link
                href="/about"
                className="text-orange font-body font-semibold hover:underline underline-offset-4 text-lg py-3"
              >
                Read Our Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
