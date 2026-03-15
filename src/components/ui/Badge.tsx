type BadgeProps = {
  children: React.ReactNode;
  variant?: "gold" | "orange" | "cream";
  className?: string;
};

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const variants = {
    gold: "bg-gold/20 text-brown border border-gold/30",
    orange: "bg-orange/10 text-orange border border-orange/20",
    cream: "bg-cream-dark text-brown border border-cream-dark",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold font-body ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
