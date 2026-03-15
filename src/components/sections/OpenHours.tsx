import { SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OpenHours() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title="We&rsquo;re here when you need us."
          centered
        />

        <div className="inline-block bg-brown rounded-2xl px-12 py-8 shadow-lg">
          <p className="text-3xl sm:text-4xl font-bold text-gold font-display">
            {SITE.hours}
          </p>
          <p className="mt-3 text-white/70 font-body">
            {SITE.days} &middot; Nolan Hill, Calgary, Alberta
          </p>
        </div>
      </div>
    </section>
  );
}
