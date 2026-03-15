import type { Metadata } from "next";
import LandingPage from "@/components/sections/LandingPage";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dayhome Near Evanston, Calgary | Bright Fox Dayhome",
  description:
    "Alberta Approved Family Day Home just minutes from Evanston. Open 6:30 AM. Infant and toddler spots available. From $326.25/mo with subsidy.",
  openGraph: { images: ["/images/space-1.jpeg"] },
};

export default function DayhomeEvanstonLP() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <LandingPage
        trustBadge="Alberta Approved · Just Minutes from Evanston"
        headline="Dayhome Near Evanston — Spots Available"
        subheadline="Bright Fox Dayhome in Nolan Hill is just a short drive from Evanston. Certified, affordable childcare with infant spots available."
        primaryCta="Call or Text Now — (587) 889-4788"
        heroImage="/images/space-1.jpeg"
        heroImageAlt="Bright and welcoming play space at Bright Fox Dayhome near Evanston"
        features={[
          {
            title: "Minutes from Evanston",
            description: "Located in neighbouring Nolan Hill — a quick drive via Symons Valley Road. Convenient for Evanston families.",
          },
          {
            title: "Open from 6:30 AM",
            description: "One of the earliest start times in NW Calgary, ideal for parents with early morning commutes.",
          },
          {
            title: "$326.25/mo with Subsidy",
            description: "Alberta's Affordability Grant applied automatically. No income test — every family pays the same rate.",
          },
          {
            title: "Home-Cooked Meals Included",
            description: "Nutritious meals and snacks prepared fresh daily. Allergies and dietary needs accommodated.",
          },
          {
            title: "Small Group — Max 6 Kids",
            description: "Individual attention and consistent care in a warm, home-like environment.",
          },
          {
            title: "Infant & Sibling Spots",
            description: "We accept infants from birth and welcome sibling enrolments — keep your children together.",
          },
        ]}
        aboutTitle="Quality Childcare Close to Evanston"
        aboutText={[
          "For Evanston families looking for trusted childcare nearby, Bright Fox Dayhome in Nolan Hill is an ideal choice. We're just a few minutes away, offering the kind of personal, home-based care that larger centres simply can't match.",
          "Our Alberta Approved dayhome maintains a maximum of 6 children, ensuring your child receives the focused attention they deserve. Days are filled with play-based learning, outdoor adventures, arts and crafts, and nutritious home-cooked meals.",
          "We understand the importance of finding childcare that feels right. That's why we invite every family to visit, meet us, and see our space before making a decision. Many Evanston parents already call Bright Fox their childcare home.",
        ]}
        galleryImages={[
          { src: "/images/space-1.jpeg", alt: "Indoor play area" },
          { src: "/images/activity-2.jpeg", alt: "Creative activities" },
          { src: "/images/room-1.jpeg", alt: "Rest and nap area" },
          { src: "/images/outdoor-play.jpeg", alt: "Outdoor play" },
          { src: "/images/space-3.jpeg", alt: "Safe play environment" },
          { src: "/images/activity-1.jpeg", alt: "Arts and crafts" },
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
            question: "How far is Bright Fox from Evanston?",
            answer: "We're at 81 Nolancrest Green NW in Nolan Hill — approximately a 5-minute drive from Evanston via Symons Valley Road.",
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
            question: "Do you have infant spots?",
            answer: "Yes — we accept infants from birth. Alberta limits dayhomes to 2 infants, ensuring focused care.",
          },
        ]}
      />
    </>
  );
}
