import {
  CalendarCheck,
  ClipboardList,
  House,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: CalendarCheck,
    title: "Book a Consultation",
    description:
      "Connect with our healthcare professional to discuss your wellness goals, medical history, and determine the most suitable IV therapy for your needs.",
  },
  {
    id: "02",
    icon: ClipboardList,
    title: "Choose Your Therapy",
    description:
      "Based on your consultation, we'll recommend the most appropriate IV therapy to support your hydration, immunity, skin health, recovery, or wellness goals.",
  },
  {
    id: "03",
    icon: House,
    title: "Enjoy At-Home Service",
    description:
      "Our qualified healthcare professional visits your home, office, or hotel with sterile equipment and administers your IV therapy safely and comfortably.",
  },
  {
    id: "04",
    icon: HeartHandshake,
    title: "Follow-Up & Ongoing Care",
    description:
      "Receive personalized aftercare guidance, diet and lifestyle recommendations, and continued support to help you maintain your wellness journey.",
  },
];

export default function HowItWorks() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      const navbarOffset = 110;

      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-white to-teal-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Your Wellness Journey in
            <span className="text-teal-700"> 4 Simple Steps</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We make your IV therapy experience simple, safe, and convenient.
            From consultation to aftercare, our healthcare professionals are
            with you every step of the way.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Connecting Line */}

          <div className="hidden lg:block absolute top-14 left-0 right-0 h-1 bg-teal-100"></div>

          <div className="grid gap-10 lg:grid-cols-4 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="relative text-center group"
                >
                  {/* Circle */}

                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white border-4 border-teal-600 shadow-lg transition duration-300 group-hover:scale-110">

                    <Icon
                      size={42}
                      className="text-teal-700"
                    />

                  </div>

                  {/* Step Number */}

                  <div className="mt-5 text-sm font-bold tracking-widest text-teal-600">
                    STEP {step.id}
                  </div>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-8 text-gray-600">
                    {step.description}
                  </p>

                  {/* Arrow */}

                  {index < steps.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block absolute top-12 -right-6 text-teal-300"
                      size={28}
                    />
                  )}
                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}

        {/* <div className="mt-20">

          <div className="rounded-3xl bg-teal-700 px-8 py-12 text-center text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Ready to Begin Your Wellness Journey?
            </h3>

            <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-teal-100">
              Take the first step toward better health and wellness. Schedule
              your consultation today and let our healthcare professionals help
              you choose the right IV therapy.
            </p>

            <button
              onClick={scrollToContact}
              className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-teal-700 transition hover:scale-105 hover:bg-gray-100"
            >
              Book an Appointment
            </button>

          </div>

        </div> */}

      </div>
    </section>
  );
}