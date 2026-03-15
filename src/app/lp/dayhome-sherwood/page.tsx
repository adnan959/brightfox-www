import type { Metadata } from "next";
import LandingPage from "@/components/sections/LandingPage";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dayhome Near Sherwood, Calgary | Bright Fox Dayhome",
  description:
    "Alberta Approved Family Day Home just minutes from Sherwood. Open 6:30 AM. Infant and toddler spots available. From $326.25/mo with subsidy.",
  openGraph: { images: ["/images/space-2.jpeg"] },
};

export default function DayhomeSherwoodLP() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <LandingPage
        trustBadge="Alberta Approved · Just Minutes from Sherwood"
        headline="Dayhome Near Sherwood — Spots Available"
        subheadline="Bright Fox Dayhome in Nolan Hill is just a short drive from Sherwood. Certified, affordable childcare with a personal touch."
        primaryCta="Call or Text Now — (587) 889-4788"
        heroImage="/images/space-2.jpeg"
        heroImageAlt="Welcoming learning space at Bright Fox Dayhome near Sherwood"
        features={[
          {
            title: "Minutes from Sherwood",
            description: "Located in neighbouring Nolan Hill — easily accessible from Sherwood via Shaganappi Trail or Stoney Trail.",
          },
          {
            title: "Open from 6:30 AM",
            description: "One of the earliest start times in NW Calgary. Ideal for parents with early work schedules.",
          },
          {
            title: "$326.25/mo with Subsidy",
            description: "Alberta's Affordability Grant applied automatically. No income test — every family qualifies.",
          },
          {
            title: "Home-Cooked Meals Included",
            description: "Nutritious meals and snacks prepared fresh each day. Allergies and dietary needs always accommodated.",
          },
          {
            title: "Small Group — Max 6 Kids",
            description: "Individual attention and consistent, trusted care in a home-like environment.",
          },
          {
            title: "Infant & Sibling Spots",
            description: "Infant care from birth and sibling spots available. Keep your children together under one roof.",
          },
        ]}
        aboutTitle="Quality Childcare Close to Sherwood"
        aboutText={[
          "Sherwood is one of Calgary's newest communities, and finding established, trusted childcare nearby can be a challenge. Bright Fox Dayhome in Nolan Hill bridges that gap — just minutes away, with the personal care your family deserves.",
          "Our Alberta Approved home provides a warm, nurturing environment with a maximum of 6 children. Every child receives individual attention, nutritious home-cooked meals, and a full day of play-based learning activities.",
          "From tummy time for infants to outdoor adventures for toddlers, we tailor our programme to each child's age and stage. Sherwood families are discovering what Nolan Hill parents already know — Bright Fox is a dayhome that truly feels like family.",
        ]}
        galleryImages={[
          { src: "/images/space-2.jpeg", alt: "Learning and activity space" },
          { src: "/images/activity-1.jpeg", alt: "Arts and crafts" },
          { src: "/images/room-1.jpeg", alt: "Rest area" },
          { src: "/images/outdoor-play.jpeg", alt: "Outdoor play" },
          { src: "/images/space-3.jpeg", alt: "Safe play environment" },
          { src: "/images/activity-2.jpeg", alt: "Creative activities" },
        ]}
        testimonials={[
          {
            quote: "Bright Fox has been amazing for our family. Our kids love going every day, and we love the peace of mind knowing they are in such great hands.",
            name: "Sarah M.",
          },
          {
            quote: "The care and attention our infant receives is outstanding. We feel so lucky to have found a spot here.",
            name: "James & Priya R.",
          },
          {
            quote: "Both our kids attend Bright Fox and they absolutely love it. The meals are great, the activities are engaging, and the caregiver is wonderful.",
            name: "Amina K.",
          },
        ]}
        faqs={[
          {
            question: "How far is Bright Fox from Sherwood?",
            answer: "We're at 81 Nolancrest Green NW in Nolan Hill — approximately a 5-minute drive from Sherwood via Shaganappi Trail.",
          },
          {
            question: "What are your hours?",
            answer: "6:30 AM to 5:30 PM, Monday through Friday.",
          },
          {
            question: "How much does it cost?",
            answer: "$326.25/month full-time under Alberta's Affordability Grant. No income testing required.",
          },
          {
            question: "Do you accept infants?",
            answer: "Yes — we accept infants from birth. Alberta limits dayhomes to 2 infants, ensuring your baby gets focused, personal care.",
          },
        ]}
      />
    </>
  );
}
