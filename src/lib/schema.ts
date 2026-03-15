import { SITE } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: SITE.name,
    description:
      "Alberta Approved Family Day Home in Nolan Hill, NW Calgary. Infant care, toddler care, and sibling enrolment available.",
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "81 Nolancrest Green NW",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.15,
      longitude: -114.18,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "17:30",
    },
    priceRange: "$326.25/month",
    image: `${SITE.url}/images/brightfox-logo-only.png`,
    areaServed: [
      { "@type": "Place", name: "Nolan Hill, Calgary" },
      { "@type": "Place", name: "Sage Hill, Calgary" },
      { "@type": "Place", name: "Evanston, Calgary" },
      { "@type": "Place", name: "Kincora, Calgary" },
      { "@type": "Place", name: "Sherwood, Calgary" },
    ],
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}
