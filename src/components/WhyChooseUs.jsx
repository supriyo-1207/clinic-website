import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Clock3,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Medical Experts",
    description:
      "Our experienced professionals provide safe, evidence-based treatments tailored to your individual needs.",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description:
      "We use modern equipment and clinically proven techniques for effective aesthetic and wellness treatments.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Patient Care",
    description:
      "Every consultation begins with understanding your goals to create a treatment plan designed specifically for you.",
  },
  {
    icon: Clock3,
    title: "Comfort & Convenience",
    description:
      "Flexible appointment scheduling in a clean, relaxing, and patient-focused environment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-teal-700 font-semibold uppercase tracking-widest">
            Why Choose Nikora
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Excellence in Every Treatment
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            We combine medical expertise, innovative technology, and compassionate
            care to deliver treatments that prioritize your health, confidence,
            and long-term well-being.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-5 rounded-3xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl transition"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal-100">
                  <Icon className="text-teal-700" size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}