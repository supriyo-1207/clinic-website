import {
  ShieldCheck,
  Users,
  Sparkles,
  Clock3,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Experts",
    description:
      "Board-certified dermatologists with years of clinical experience.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description:
      "Every treatment plan is tailored to your unique skin and goals.",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description:
      "We use modern, proven equipment for safe and effective results.",
  },
  {
    icon: Clock3,
    title: "Flexible Timings",
    description:
      "Convenient appointment slots that fit around your schedule.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine medical expertise, advanced technology, and
            compassionate care to deliver the best results for every patient.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-teal-700" size={28} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}