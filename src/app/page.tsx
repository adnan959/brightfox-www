import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutPreview from "@/components/sections/AboutPreview";
import Features from "@/components/sections/Features";
import PromoBanner from "@/components/sections/PromoBanner";
import OpenHours from "@/components/sections/OpenHours";
import Testimonials from "@/components/sections/Testimonials";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <Features />
      <PromoBanner />
      <OpenHours />
      <Testimonials />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}
