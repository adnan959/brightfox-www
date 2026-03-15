import type { Metadata } from "next";
import LandingPage from "@/components/sections/LandingPage";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Infant Daycare in NW Calgary — Spots Available | Bright Fox",
  description:
    "Gentle, attentive infant care in a certified home setting. Maximum 2 infants. Nolan Hill, NW Calgary. From $326.25/mo with subsidy.",
  openGraph: { images: ["/images/room-1.jpeg"] },
};

export default function InfantDaycareCalgaryLP() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <LandingPage
        trustBadge="Alberta Approved · Infant Care Specialist"
        headline="Infant Daycare in NW Calgary — Spots Available Now"
        subheadline="Gentle, attentive care for babies in a certified home setting. Maximum 2 infants ensures your baby gets focused, personal attention."
        primaryCta="Call About Infant Spots — (587) 889-4788"
        heroImage="/images/room-1.jpeg"
        heroImageAlt="Safe and cozy infant care space at Bright Fox Dayhome"
        features={[
          {
            title: "Maximum 2 Infants",
            description: "Alberta limits dayhomes to 2 infants under 19 months. Your baby receives focused, one-on-one attention — not large group care.",
          },
          {
            title: "Gentle, Flexible Routines",
            description: "We adapt to your baby's natural feeding, sleeping, and play patterns. No rigid one-size-fits-all schedule for infants.",
          },
          {
            title: "Safe Sleep Practices",
            description: "We follow all Alberta safe sleep guidelines — firm mattress, bare crib, back sleeping position. Your baby's safety is our top priority.",
          },
          {
            title: "Age-Appropriate Nutrition",
            description: "Breast milk and formula management, plus gradual introduction of solids when your baby is ready. All meals and snacks included.",
          },
          {
            title: "Tummy Time & Sensory Play",
            description: "Developmentally appropriate activities that support motor skills, sensory exploration, and early cognitive development.",
          },
          {
            title: "Daily Communication",
            description: "Detailed updates on feedings, naps, diaper changes, and milestones. You'll always know how your baby's day is going.",
          },
        ]}
        aboutTitle="A Gentle Start for Your Little One"
        aboutText={[
          "Leaving your infant in someone else's care is one of the hardest decisions a parent makes. At Bright Fox, we understand that trust is earned — and we take that responsibility seriously.",
          "Our home-based setting provides the calm, nurturing environment that infants need. Unlike large daycare centres with high staff ratios and constant stimulation, your baby will be cared for in a quiet, cozy space with a maximum of 2 infants at any time.",
          "We follow your baby's lead — their feeding schedule, their sleep patterns, their pace of development. Every baby is different, and our small setting allows us to provide truly individualized care that supports your child's growth from day one.",
        ]}
        galleryImages={[
          { src: "/images/room-1.jpeg", alt: "Cozy infant rest area" },
          { src: "/images/space-3.jpeg", alt: "Safe play environment" },
          { src: "/images/room-2.jpeg", alt: "Comfortable nap space" },
          { src: "/images/space-1.jpeg", alt: "Indoor play area" },
          { src: "/images/room-3.jpeg", alt: "Baby-proofed living space" },
          { src: "/images/room-4.jpeg", alt: "Clean and organized care space" },
        ]}
        testimonials={[
          {
            quote: "The care and attention our infant receives is outstanding. We feel so lucky to have found a spot here.",
            name: "James & Priya R.",
          },
          {
            quote: "Bright Fox has been amazing for our family. Our kids love going every day, and we love the peace of mind knowing they are in such great hands.",
            name: "Sarah M.",
          },
          {
            quote: "Both our kids attend Bright Fox and they absolutely love it. The meals are great, the activities are engaging, and the caregiver is wonderful.",
            name: "Amina K.",
          },
        ]}
        faqs={[
          {
            question: "How many infants can you care for at once?",
            answer: "Alberta law limits dayhomes to a maximum of 2 infants under 19 months. This ensures your baby gets focused, personal attention.",
          },
          {
            question: "Do you follow a set schedule for infants?",
            answer: "No — we follow your baby's natural rhythms. We adapt feeding, nap, and play times to each infant's individual needs.",
          },
          {
            question: "What safe sleep practices do you follow?",
            answer: "We follow all Alberta safe sleep guidelines: firm mattress, bare crib, back sleeping position, and supervised sleep.",
          },
          {
            question: "Can you accommodate breast milk and formula?",
            answer: "Yes. We properly store and warm breast milk and prepare formula according to your instructions.",
          },
        ]}
      />
    </>
  );
}
