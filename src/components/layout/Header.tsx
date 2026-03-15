"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body font-medium transition-colors px-3 py-1.5 ${
                  isActive(link.href)
                    ? "text-orange"
                    : "text-brown hover:text-orange"
                }`}
              >
                {isActive(link.href) && (
                  <svg
                    className="absolute -inset-x-1.5 -inset-y-1 -z-1 text-orange/15"
                    viewBox="0 0 120 60"
                    preserveAspectRatio="none"
                    fill="currentColor"
                  >
                    <path d="M15,52 C4,46 -2,32 6,18 C12,6 28,-4 55,4 C78,-6 102,2 114,18 C124,32 118,50 104,54 C88,62 68,56 55,58 C38,60 26,58 15,52 Z" />
                  </svg>
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              onClick={() => trackEvent("phone_call_click", { location: "header" })}
              className="inline-flex items-center gap-2 bg-orange text-white rounded-full px-5 py-2.5 font-body font-semibold hover:bg-orange-light hover:shadow-lg transition-all text-sm"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call or Text Now</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-brown p-2 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[-1] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-cream-dark">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 font-body font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-orange/10 text-orange"
                    : "text-brown hover:bg-cream-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
