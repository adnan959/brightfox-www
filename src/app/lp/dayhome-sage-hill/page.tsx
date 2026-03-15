import type { Metadata } from "next";
import LandingPage from "@/components/sections/LandingPage";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dayhome Near Sage Hill, Calgary | Bright Fox Dayhome",
  description:
    "Alberta Approved Family Day Home just minutes from Sage Hill. Open 6:30 AM. Infant and toddler spots available. From $326.25/mo with subsidy.",
  openGraph: { images: ["/images/outdoor-play.jpeg"] },
};

export default function DayhomeSageHillLP() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <LandingPage
        trustBadge="Alberta Approved · Just Minutes from Sage Hill"
        headline="Dayhome Near Sage Hill — Spots Available"
        subheadline="Bright Fox Dayhome in Nolan Hill is just a short drive from Sage Hill. Certified home-based childcare with infant and toddler spots available."
        primaryCta="Call or Text Now — (587) 889-4788"
        heroImage="/images/outdoor-play.jpeg"
        heroImageAlt="Children playing outdoors at Bright Fox Dayhome near Sage Hill"
        features={[
          {
            title: "Minutes from Sage Hill",
            description: "Located in neighbouring Nolan Hill — a quick 3-minute drive via Shaganappi Trail. Perfect for parents commuting from Sage Hill.",
          },
          {
            title: "Open from 6:30 AM",
            description: "One of the earliest start times in NW Calgary. Drop off before work without the stress.",
          },
          {
            title: "$326.25/mo with Subsidy",
            description: "Alberta's Affordability Grant applied automatically. No income test required — every family pays the same rate.",
          },
          {
            title: "Home-Cooked Meals Included",
            description: "Nutritious meals and snacks prepared fresh daily. Allergies and dietary restrictions accommodated.",
          },
          {
            title: "Small Group — Max 6 Kids",
            description: "Your child gets individual attention and consistent care in a warm, home-like setting.",
          },
          {
            title: "Infant & Sibling Spots",
            description: "We accept infants from birth and welcome sibling enrolments — keep your kids together.",
          },
        ]}
        aboutTitle="Trusted Childcare Close to Sage Hill"
        aboutText={[
          "Finding quality childcare near Sage Hill can be challenging. Bright Fox Dayhome, located in neighbouring Nolan Hill, offers the kind of personal, attentive care that families in Sage Hill are looking for — just minutes from your doorstep.",
          "Our Alberta Approved dayhome provides a warm, home-based environment where children learn through play, enjoy nutritious home-cooked meals, and build lasting bonds with a consistent, trusted caregiver.",
          "With a maximum of 6 children, your child receives the focused attention they need to thrive. Many Sage Hill families already trust us with their children — we'd love to welcome yours too.",
        ]}
        galleryImages={[
          { src: "/images/space-1.jpeg", alt: "Indoor play area" },
          { src: "/images/activity-1.jpeg", alt: "Arts and crafts activities" },
          { src: "/images/room-1.jpeg", alt: "Cozy rest area" },
          { src: "/images/outdoor-play.jpeg", alt: "Outdoor play time" },
          { src: "/images/space-2.jpeg", alt: "Learning space" },
          { src: "/images/activity-3.jpeg", alt: "Toddler activities" },
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
            question: "How far is Bright Fox from Sage Hill?",
            answer: "We're located at 81 Nolancrest Green NW in Nolan Hill — approximately a 3-minute drive from Sage Hill via Shaganappi Trail.",
          },
          {
            question: "What are your hours?",
            answer: "We are open 6:30 AM to 5:30 PM, Monday through Friday.",
          },
          {
            question: "How much does it cost?",
            answer: "$326.25/month for full-time care under Alberta's Affordability Grant. No income testing required.",
          },
          {
            question: "Can I visit before enrolling?",
            answer: "Absolutely! Call or text (587) 889-4788 to schedule a visit.",
          },
        ]}
      />
    </>
  );
}
