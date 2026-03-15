import {
  UtensilsCrossed,
  BadgeDollarSign,
  CalendarCheck,
  ShieldCheck,
  Heart,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed,
  BadgeDollarSign,
  CalendarCheck,
  ShieldCheck,
  Heart,
  Users,
};

const FEATURES = [
  {
    icon: "UtensilsCrossed",
    title: "Meals Provided",
    description: "Nutritious meals and snacks included every day.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Grants & Subsidies",
    description:
      "We accept Alberta childcare subsidies. Full-time care from $326.25/mo.",
  },
  {
    icon: "CalendarCheck",
    title: "Full-Time Spots",
    description:
      "Consistent, full-time care so you can work with confidence.",
  },
  {
    icon: "ShieldCheck",
    title: "Certified & Trusted",
    description:
      "Alberta-approved with training and experience parents trust.",
  },
  {
    icon: "Heart",
    title: "Infant Care",
    description:
      "Gentle, attentive care for your youngest. Spots available now.",
  },
  {
    icon: "Users",
    title: "Siblings Welcome",
    description:
      "Keep your kids together in a familiar, loving environment.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-cream-dark/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Offer"
          title="Everything your family needs."
          centered
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <Card key={feature.title}>
                {Icon && (
                  <div className="h-12 w-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-orange" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-brown font-display mb-2">
                  {feature.title}
                </h3>
                <p className="text-text/70 font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
