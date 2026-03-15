"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { trackEvent } from "@/lib/tracking";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: "phone" | "email" | "whatsapp";
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setIsSubmitted(true);
      trackEvent("form_submit", { form: "contact" });
    } catch {
      setError(
        "Something went wrong. Please call or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
        <div className="text-4xl mb-4">&#127881;</div>
        <h3 className="text-2xl font-bold text-brown font-display mb-2">
          Message Sent!
        </h3>
        <p className="text-text/70 font-body">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
    >
      <div>
        <label className="block text-sm font-semibold text-brown font-body mb-2">
          Your Name *
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full rounded-lg border border-cream-dark px-4 py-3 font-body text-text focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 font-body">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-brown font-body mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
            className="w-full rounded-lg border border-cream-dark px-4 py-3 font-body text-text focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 font-body">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-brown font-body mb-2">
            Phone
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full rounded-lg border border-cream-dark px-4 py-3 font-body text-text focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-brown font-body mb-2">
          Preferred Contact Method
        </label>
        <select
          {...register("preferredContact")}
          aria-label="Preferred contact method"
          className="w-full rounded-lg border border-cream-dark px-4 py-3 font-body text-text focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors bg-white"
        >
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-brown font-body mb-2">
          Message *
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={4}
          className="w-full rounded-lg border border-cream-dark px-4 py-3 font-body text-text focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors resize-none"
          placeholder="Tell us about your childcare needs..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 font-body">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field — hidden from humans, catches bots */}
      <input
        {...register("website" as keyof FormData)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 h-0 w-0 overflow-hidden"
        aria-hidden="true"
      />

      {error && (
        <p className="text-red-500 text-sm font-body">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange text-white rounded-full py-3.5 font-body font-semibold hover:bg-orange-light hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
