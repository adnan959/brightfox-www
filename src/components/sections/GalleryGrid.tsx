"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const CATEGORIES = ["All", "Indoor Space", "Outdoor Play", "Activities"];

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`shrink-0 px-4 py-2 rounded-full font-body font-medium text-sm transition-all cursor-pointer ${
              active === cat
                ? "bg-orange text-white"
                : "bg-white text-brown hover:bg-cream-dark"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <div
            key={img.src}
            className="break-inside-avoid rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              loading={i < 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </>
  );
}
