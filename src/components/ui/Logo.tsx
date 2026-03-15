import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/brightfox-logo-only.png"
        alt="Bright Fox Dayhome"
        width={44}
        height={44}
        className="h-10 w-10 object-contain"
        priority
      />
      <div className="flex flex-col leading-tight">
        <span
          className={`text-lg font-bold font-display tracking-tight ${isDark ? "text-white" : "text-brown"}`}
        >
          Bright Fox
        </span>
        <span
          className={`text-xs font-body uppercase tracking-widest ${isDark ? "text-white/60" : "text-brown/60"}`}
        >
          Dayhome
        </span>
      </div>
    </Link>
  );
}
