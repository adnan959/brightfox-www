type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-orange font-body mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brown">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-text/70 max-w-2xl font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
