import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 bg-cream-dark/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What Parents Say"
          title="Trusted by families in Nolan Hill."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm relative"
            >
              <Quote className="h-10 w-10 text-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-text/80 font-body leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange/10 text-orange flex items-center justify-center font-bold font-body text-sm">
                  {testimonial.name[0]}
                </div>
                <p className="text-brown font-body font-semibold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
