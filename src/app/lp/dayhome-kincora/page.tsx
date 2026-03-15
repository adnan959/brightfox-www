import type { Metadata } from "next";
import LandingPage from "@/components/sections/LandingPage";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dayhome Near Kincora, Calgary | Bright Fox Dayhome",
  description:
    "Alberta Approved Family Day Home just minutes from Kincora. Open 6:30 AM. Infant and toddler care available. From $326.25/mo with subsidy.",
  openGraph: { images: ["/images/activity-2.jpeg"] },
};

export default function DayhomeKincoraLP() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <LandingPage
        trustBadge="Alberta Approved · Just Minutes from Kincora"
        headline="Dayhome Near Kincora — Spots Available"
        subheadline="Bright Fox Dayhome in Nolan Hill is just minutes from Kincora. Certified, affordable childcare in a warm home setting."
        primaryCta="Call or Text Now — (587) 889-4788"
        heroImage="/images/activity-2.jpeg"
        heroImageAlt="Children engaged in activities at Bright Fox Dayhome near Kincora"
        features={[
          {
            title: "Minutes from Kincora",
            description: "Located in neighbouring Nolan Hill — a quick drive via Kincora Glen. Easy drop-off on your way to work.",
          },
          {
            title: "Open from 6:30 AM",
            description: "One of the earliest start times in NW Calgary. Perfect for parents with early commutes.",
          },
          {
            title: "$326.25/mo with Subsidy",
            description: "Alberta's Affordability Grant applied automatically. No income test — affordable for every family.",
          },
          {
            title: "Home-Cooked Meals Included",
            description: "Fresh, nutritious meals and snacks every day. We accommodate allergies and dietary needs.",
          },
          {
            title: "Small Group — Max 6 Kids",
            description: "Your child gets the individual attention and consistent routines they need to thrive.",
          },
          {
            title: "Infant & Sibling Spots",
            description: "Infant care from birth and sibling enrolments welcome. Keep your children together in one trusted setting.",
          },
        ]}
        aboutTitle="Trusted Childcare Close to Kincora"
        aboutText={[
          "Kincora families don't need to look far for quality childcare. Bright Fox Dayhome in neighbouring Nolan Hill provides the personal, attentive care that only a small home-based setting can offer — just minutes from your front door.",
          "With a maximum of 6 children, every child at Bright Fox receives individual attention, consistent routines, and the warmth of a family environment. Our days include play-based learning, outdoor time, arts and crafts, storytime, and music.",
          "We're Alberta Approved, First Aid and CPR certified, and committed to providing the safest, most nurturing care possible. Come visit us and see why Kincora families choose Bright Fox.",
        ]}
        galleryImages={[
          { src: "/images/activity-2.jpeg", alt: "Creative activities" },
          { src: "/images/space-1.jpeg", alt: "Indoor play area" },
          { src: "/images/room-2.jpeg", alt: "Comfortable rest area" },
          { src: "/images/outdoor-play.jpeg", alt: "Outdoor play" },
          { src: "/images/space-2.jpeg", alt: "Learning space" },
          { src: "/images/activity-3.jpeg", alt: "Group activities" },
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
            question: "How far is Bright Fox from Kincora?",
            answer: "We're at 81 Nolancrest Green NW in Nolan Hill — approximately a 4-minute drive from Kincora.",
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
            question: "Can I visit before enrolling?",
            answer: "Yes! We encourage visits. Call or text (587) 889-4788 to schedule.",
          },
        ]}
      />
    </>
  );
}
