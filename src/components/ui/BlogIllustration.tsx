import {
  Home,
  Building2,
  DollarSign,
  ClipboardCheck,
  Baby,
  Backpack,
  Calculator,
  Landmark,
  CalendarClock,
} from "lucide-react";

const ILLUSTRATIONS: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    accent: string;
  }
> = {
  "dayhome-vs-daycare": {
    icon: Home,
    gradient: "from-orange/20 via-cream to-gold/20",
    accent: "text-orange",
  },
  "subsidy-guide": {
    icon: DollarSign,
    gradient: "from-gold/20 via-cream to-orange/20",
    accent: "text-gold",
  },
  "choosing-dayhome": {
    icon: ClipboardCheck,
    gradient: "from-brown/10 via-cream to-gold/20",
    accent: "text-brown",
  },
  "infant-care": {
    icon: Baby,
    gradient: "from-orange/15 via-cream to-brown/10",
    accent: "text-orange",
  },
  "first-day": {
    icon: Backpack,
    gradient: "from-gold/20 via-cream to-orange/15",
    accent: "text-gold",
  },
  "cost-comparison": {
    icon: Calculator,
    gradient: "from-orange/20 via-cream to-gold/15",
    accent: "text-orange",
  },
  "ten-dollar-day": {
    icon: Landmark,
    gradient: "from-brown/10 via-cream to-orange/15",
    accent: "text-brown",
  },
  "daily-schedule": {
    icon: CalendarClock,
    gradient: "from-gold/15 via-cream to-brown/10",
    accent: "text-gold",
  },
};

type BlogIllustrationProps = {
  variant: string;
  className?: string;
};

export default function BlogIllustration({
  variant,
  className = "",
}: BlogIllustrationProps) {
  const config = ILLUSTRATIONS[variant] ?? {
    icon: Home,
    gradient: "from-orange/20 via-cream to-gold/20",
    accent: "text-orange",
  };
  const Icon = config.icon;

  return (
    <div
      className={`bg-gradient-to-br ${config.gradient} flex items-center justify-center ${className}`}
    >
      <div className="relative">
        <div className="absolute inset-0 blur-2xl opacity-30">
          <Icon className={`h-24 w-24 ${config.accent}`} />
        </div>
        <Icon className={`h-16 w-16 ${config.accent} relative`} />
      </div>
    </div>
  );
}
