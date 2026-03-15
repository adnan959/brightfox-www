import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="text-6xl font-bold text-orange font-display mb-4">404</p>
        <h1 className="text-3xl font-bold text-brown mb-4">Page Not Found</h1>
        <p className="text-text/70 font-body mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-orange text-white rounded-full px-8 py-3.5 font-body font-semibold hover:bg-orange-light transition-all"
          >
            Go to Homepage
          </Link>
          <Button
            variant="secondary"
            href={`tel:${SITE.phoneRaw}`}
          >
            Call Us
          </Button>
        </div>
      </div>
    </section>
  );
}
