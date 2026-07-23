import {
  Stethoscope,
  Droplets,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Stethoscope,
    title: "Qualified Healthcare Professionals",
    description:
      "Every therapy is administered by trained healthcare professionals who prioritize your safety, comfort, and overall wellness throughout your visit.",
  },
  {
    icon: Droplets,
    title: "Premium IV Wellness Therapies",
    description:
      "Our carefully selected IV formulations contain high-quality vitamins, antioxidants, minerals, and hydration support tailored to your wellness goals.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Treatment Plans",
    description:
      "No two clients are the same. We take time to understand your lifestyle and wellness needs before recommending the most suitable IV therapy.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Comfortable & Hygienic Care",
    description:
      "We maintain high standards of hygiene and patient care, providing a calm, relaxing environment where your well-being always comes first.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-gradient-to-b from-white to-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
            Why Choose Nikora Aesthetics
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Your Trusted Partner in
            <span className="text-teal-700"> IV Wellness </span>
            & Aesthetic Care
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine professional healthcare expertise, premium IV therapies,
            and personalized care to help you feel refreshed, energized, and
            confident in a safe clinical environment.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex gap-5">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal-100 transition group-hover:bg-teal-700">
                    <Icon
                      size={30}
                      className="text-teal-700 transition group-hover:text-white"
                    />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}