"use client";

import { trackEvent } from "@/lib/tracking";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  trackingEvent?: string;
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  trackingEvent,
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-200 cursor-pointer";
  const variants = {
    primary:
      "bg-orange text-white rounded-full px-8 py-3.5 hover:bg-orange-light hover:shadow-lg hover:-translate-y-0.5 text-base",
    secondary:
      "border-2 border-brown text-brown rounded-full px-8 py-3 hover:bg-brown hover:text-white text-base",
    ghost:
      "text-orange font-semibold hover:underline underline-offset-4 px-0 py-0 text-base",
  };

  const classes = `${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  const handleClick = () => {
    if (trackingEvent) trackEvent(trackingEvent);
    onClick?.();
  };

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}
