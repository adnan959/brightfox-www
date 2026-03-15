import type { Metadata } from "next";
import LandingPage from "@/components/sections/LandingPage";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sibling Daycare — Keep Your Kids Together | Bright Fox Calgary",
  description:
    "Infant + toddler spots in the same dayhome. One drop-off, one caregiver, one location in Nolan Hill, Calgary. From $326.25/mo.",
  openGraph: { images: ["/images/activity-1.jpeg"] },
};

export default function SiblingDaycareLP() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <LandingPage
        trustBadge="Alberta Approved · Sibling-Friendly Dayhome"
        headline="Keep Your Kids Together — Sibling Spaces Available"
        subheadline="Infant + toddler spots in the same dayhome. One drop-off, one caregiver, one familiar space in Nolan Hill, Calgary."
        primaryCta="Call About Sibling Spaces — (587) 889-4788"
        heroImage="/images/activity-1.jpeg"
        heroImageAlt="Children playing together at Bright Fox Dayhome"
        features={[
          {
            title: "Same Caregiver, Same Home",
            description: "Both children bond with one consistent, trusted caregiver in a familiar setting. No splitting your kids across different centres.",
          },
          {
            title: "One Drop-Off, One Pickup",
            description: "Simplify your mornings with a single location for all your children. No more rushing between two different daycares.",
          },
          {
            title: "Sibling Bonding All Day",
            description: "Brothers and sisters grow together, play together, and comfort each other throughout the day.",
          },
          {
            title: "Simplified Logistics & Billing",
            description: "One schedule, one provider, one invoice. Less stress, fewer coordination headaches for busy parents.",
          },
          {
            title: "Infant + Toddler Under One Roof",
            description: "We're one of the few dayhomes in NW Calgary that can accommodate an infant and older sibling together.",
          },
          {
            title: "Alberta Subsidy for Both Children",
            description: "The Affordability Grant applies to each child separately — $326.25/mo per child for full-time care.",
          },
        ]}
        aboutTitle="Why Siblings Thrive at Bright Fox"
        aboutText={[
          "Finding childcare for one child is hard enough. Finding a spot that can take both your infant and toddler? That's where most parents hit a wall. At Bright Fox, we specialize in exactly this — keeping siblings together under one roof.",
          "In a small group of just 6 children, your kids get the individual attention they need while staying connected to each other throughout the day. Older siblings model behaviour for younger ones, and babies find comfort in having a familiar face nearby.",
          "Our open-from-6:30 AM schedule, home-cooked meals, and play-based learning programme mean both your children get everything they need — and you get the simplicity of one drop-off, one pickup, and one trusted caregiver.",
        ]}
        galleryImages={[
          { src: "/images/activity-1.jpeg", alt: "Children playing together" },
          { src: "/images/space-1.jpeg", alt: "Spacious indoor play area" },
          { src: "/images/activity-2.jpeg", alt: "Arts and crafts activities" },
          { src: "/images/room-2.jpeg", alt: "Comfortable rest area" },
          { src: "/images/outdoor-play.jpeg", alt: "Outdoor play time" },
          { src: "/images/activity-3.jpeg", alt: "Engaging group activities" },
        ]}
        testimonials={[
          {
            quote: "Both our kids attend Bright Fox and they absolutely love it. The meals are great, the activities are engaging, and the caregiver is wonderful.",
            name: "Amina K.",
          },
          {
            quote: "Bright Fox has been amazing for our family. Our kids love going every day, and we love the peace of mind knowing they are in such great hands.",
            name: "Sarah M.",
          },
          {
            quote: "The care and attention our infant receives is outstanding. We feel so lucky to have found a spot here.",
            name: "James & Priya R.",
          },
        ]}
        faqs={[
          {
            question: "Can you accommodate an infant and a toddler?",
            answer: "Yes! We are one of the few dayhomes in NW Calgary set up to care for both infants and older siblings. Alberta allows up to 2 infants in a dayhome.",
          },
          {
            question: "Do siblings get separate or combined care?",
            answer: "All children are cared for in the same home by the same caregiver. Activities are adapted for different ages, but siblings can interact freely throughout the day.",
          },
          {
            question: "Is there a discount for siblings?",
            answer: "The Alberta Affordability Grant applies to each child individually — $326.25/mo per child for full-time. There is no income test.",
          },
          {
            question: "How do nap schedules work with different ages?",
            answer: "We maintain flexible routines that respect each child's natural sleep patterns. Infants nap on their own schedule while older children have a set rest time.",
          },
        ]}
      />
    </>
  );
}
