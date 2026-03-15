import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const GALLERY_IMAGES = [
  { src: "/images/space-1.jpeg", alt: "Children playing outdoors at Bright Fox Dayhome" },
  { src: "/images/space-2.jpeg", alt: "Indoor play area at Bright Fox Dayhome" },
  { src: "/images/activity-1.jpeg", alt: "Activities at Bright Fox Dayhome" },
  { src: "/images/room-3.jpeg", alt: "Bright Fox Dayhome facilities" },
];

export default function GalleryPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading
            label="Our Space"
            title="See where the fun happens."
          />
          <Link
            href="/gallery"
            className="text-orange font-body font-semibold hover:underline underline-offset-4 hidden sm:block"
          >
            See More Photos &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/gallery"
            className="text-orange font-body font-semibold hover:underline underline-offset-4"
          >
            See More Photos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
