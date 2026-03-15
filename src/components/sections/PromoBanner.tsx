import Button from "@/components/ui/Button";

export default function PromoBanner() {
  const isActive = process.env.NEXT_PUBLIC_PROMO_ACTIVE === "true";
  const heading = process.env.NEXT_PUBLIC_PROMO_HEADING;
  const body = process.env.NEXT_PUBLIC_PROMO_BODY;
  const cta = process.env.NEXT_PUBLIC_PROMO_CTA;

  if (!isActive || !heading) return null;

  return (
    <section className="bg-brown py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gold font-display mb-3">
          {heading}
        </h2>
        {body && (
          <p className="text-white/80 font-body text-lg mb-6">{body}</p>
        )}
        {cta && (
          <Button href="/contact" trackingEvent="cta_click">
            {cta}
          </Button>
        )}
      </div>
    </section>
  );
}
