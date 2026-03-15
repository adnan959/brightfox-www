import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Badge from "@/components/ui/Badge";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery | Bright Fox Dayhome",
  description:
    "See our dayhome space, outdoor play area, and daily activities at Bright Fox Dayhome in Nolan Hill, Calgary.",
  openGraph: { images: ["/images/social.png"] },
};

const IMAGES = [
  { src: "/images/outdoor-play.jpeg", alt: "Outdoor play at Bright Fox Dayhome", category: "Outdoor Play" },
  { src: "/images/space-1.jpeg", alt: "Children playing outdoors", category: "Outdoor Play" },
  { src: "/images/space-2.jpeg", alt: "Indoor play area", category: "Indoor Space" },
  { src: "/images/space-3.jpeg", alt: "Dayhome activities", category: "Activities" },
  { src: "/images/caregiver.jpeg", alt: "Caregiver with children", category: "Activities" },
  { src: "/images/activity-1.jpeg", alt: "Daily activities at Bright Fox", category: "Activities" },
  { src: "/images/activity-2.jpeg", alt: "Learning and play", category: "Activities" },
  { src: "/images/activity-3.jpeg", alt: "Creative activities", category: "Activities" },
  { src: "/images/room-1.jpeg", alt: "Rest area with crib", category: "Indoor Space" },
  { src: "/images/room-2.jpeg", alt: "Play room", category: "Indoor Space" },
  { src: "/images/room-3.jpeg", alt: "Indoor facilities", category: "Indoor Space" },
  { src: "/images/room-4.jpeg", alt: "Dayhome room", category: "Indoor Space" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ])}
      />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="cream" className="mb-4">
            Our Space
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-brown mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-text/80 font-body max-w-2xl">
            Take a look inside Bright Fox Dayhome. Real photos of our space,
            outdoor play area, and daily activities in Nolan Hill, Calgary.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={IMAGES} />
        </div>
      </section>
    </>
  );
}
