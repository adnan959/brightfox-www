import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

const AREA_LINKS = [
  { label: "Dayhome in Nolan Hill", href: "/lp/dayhome-nolan-hill" },
  { label: "Infant Daycare Calgary", href: "/lp/infant-daycare-calgary" },
  { label: "Sibling Daycare Calgary", href: "/lp/sibling-daycare" },
  { label: "Dayhome Near Sage Hill", href: "/lp/dayhome-sage-hill" },
  { label: "Dayhome Near Evanston", href: "/lp/dayhome-evanston" },
  { label: "Dayhome Near Kincora", href: "/lp/dayhome-kincora" },
  { label: "Dayhome Near Sherwood", href: "/lp/dayhome-sherwood" },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="dark" className="mb-4" />
            <p className="text-white/60 font-body text-sm leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="text-white/60 font-body text-sm mt-2">
              Alberta Approved Family Day Home
            </p>
          </div>

          <div>
            <h3 className="text-gold font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 font-body text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-gold font-display text-lg font-semibold mb-4">
              Areas We Serve
            </h3>
            <nav className="space-y-2">
              {AREA_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 font-body text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-gold font-display text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-3 text-white/70 font-body text-sm hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 text-gold shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-white/70 font-body text-sm hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 text-gold shrink-0" />
                {SITE.email}
              </a>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 font-body text-sm hover:text-gold transition-colors"
              >
                <MapPin className="h-4 w-4 text-gold shrink-0" />
                {SITE.address}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-sm">
            &copy; {new Date().getFullYear()} {SITE.name} &middot; Calgary,
            Alberta &middot; Alberta Approved Family Day Home
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/40 font-body text-sm hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 font-body text-sm hover:text-white/70 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
