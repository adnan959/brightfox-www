import { CheckCircle, Clock, DollarSign, Heart } from "lucide-react";

const ITEMS = [
  { icon: CheckCircle, label: "Alberta Approved" },
  { icon: Clock, label: "Open 6:30 AM" },
  { icon: DollarSign, label: "$326.25/mo with subsidy" },
  { icon: Heart, label: "Infant Care Available" },
];

export default function TrustBar() {
  return (
    <section className="bg-brown">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 justify-center"
            >
              <item.icon className="h-6 w-6 text-gold shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-white font-body">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
