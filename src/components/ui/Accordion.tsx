"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-cream-dark">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-${question.replace(/\s+/g, "-").toLowerCase().slice(0, 40)}`}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-lg font-semibold text-brown font-body pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-orange shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`accordion-${question.replace(/\s+/g, "-").toLowerCase().slice(0, 40)}`}
        role="region"
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-text leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

type AccordionProps = {
  items: { question: string; answer: string }[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}
