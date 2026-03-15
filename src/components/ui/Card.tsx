type CardProps = {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

export default function Card({
  children,
  className = "",
  accent = true,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 ${accent ? "border-t-3 border-orange" : ""} p-4 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
