"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

export default function WhatsAppFab() {
  const message = encodeURIComponent(
    "Hi! I'm interested in learning more about Bright Fox Dayhome."
  );

  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click")}
      className="fixed bottom-6 right-4 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
