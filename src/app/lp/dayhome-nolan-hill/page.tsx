import type { Metadata } from "next";
import LandingPage from "@/components/sections/LandingPage";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trusted Dayhome in Nolan Hill, Calgary | Bright Fox",
  description:
    "Alberta Approved Family Day Home in Nolan Hill. Open 6:30 AM. Infant spots and sibling spaces available. From $326.25/mo with subsidy.",
  openGraph: { images: ["/images/outdoor-play.jpeg"] },
};

export default function DayhomeNolanHillLP() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <LandingPage
        trustBadge="Alberta Approved Family Day Home · Nolan Hill"
        headline="Your Trusted Dayhome in Nolan Hill, Calgary"
        subheadline="Certified home-based childcare right in the heart of Nolan Hill. Open 6:30 AM. Infant spots and sibling spaces available."
        primaryCta="Call or Text Now — (587) 889-4788"
        heroImage="/images/outdoor-play.jpeg"
        heroImageAlt="Children playing outdoors at Bright Fox Dayhome in Nolan Hill, Calgary"
        features={[
          {
            title: "Earliest Hours in the Area",
            description:
              "Open from 6:30 AM — perfect for commuting parents heading downtown or across Calgary.",
          },
          {
            title: "Home-Cooked Meals Included",
            description:
              "Nutritious meals and snacks prepared fresh every day. Allergies and dietary needs accommodated.",
          },
          {
            title: "$326.25/mo with Subsidy",
            description:
              "Alberta's Affordability Grant is applied automatically. No income test required — every family pays the same rate.",
          },
          {
            title: "Certified & Trusted",
            description:
              "Alberta Approved with First Aid, CPR, and ongoing child development training. Criminal record and home safety inspections completed.",
          },
          {
            title: "Steps from Nolan Hill Parks",
            description:
              "Located at 81 Nolancrest Green NW — walking distance to playgrounds, greenspaces, and neighbourhood schools.",
          },
          {
            title: "Small Group, Big Attention",
            description:
              "Maximum 6 children means your child gets the individual care and attention they deserve, every single day.",
          },
        ]}
        aboutTitle="A Dayhome That Feels Like Family"
        aboutText={[
          "Bright Fox Dayhome was born from a simple belief: every child deserves a warm, safe space to grow, play, and learn. Located in the heart of Nolan Hill, we provide the kind of personal, attentive care that only a small home-based setting can offer.",
          "Our days are filled with play-based learning, outdoor adventures, arts and crafts, storytime, and music. With a maximum of 6 children, we maintain the individual attention and consistent routines that help young children thrive.",
          "We serve families throughout Nolan Hill and surrounding communities including Sage Hill, Evanston, Kincora, and Sherwood. If you're looking for reliable, loving childcare close to home — we'd love to meet you.",
        ]}
        galleryImages={[
          { src: "/images/space-1.jpeg", alt: "Bright Fox indoor play area" },
          { src: "/images/activity-1.jpeg", alt: "Children doing arts and crafts" },
          { src: "/images/room-1.jpeg", alt: "Cozy reading and rest area" },
          { src: "/images/outdoor-play.jpeg", alt: "Outdoor play time at the dayhome" },
          { src: "/images/space-2.jpeg", alt: "Learning and activity space" },
          { src: "/images/activity-3.jpeg", alt: "Engaging activities for toddlers" },
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
            question: "Where exactly is Bright Fox Dayhome?",
            answer: "We are located at 81 Nolancrest Green NW, in the heart of Nolan Hill, Calgary. Easily accessible from Sage Hill, Evanston, Kincora, and Sherwood.",
          },
          {
            question: "What are your hours?",
            answer: "We are open from 6:30 AM to 5:30 PM, Monday through Friday — one of the earliest start times in the Nolan Hill area.",
          },
          {
            question: "How much does it cost?",
            answer: "$326.25/month for full-time care and $230/month for part-time care under Alberta's Affordability Grant. No income testing required.",
          },
          {
            question: "Can I visit before enrolling?",
            answer: "Absolutely! We encourage parents to visit and see our space in person. Call or text us at (587) 889-4788 to schedule a visit.",
          },
        ]}
      />
    </>
  );
}
