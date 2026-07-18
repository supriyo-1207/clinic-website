import { ShieldCheck, Stethoscope, HeartHandshake } from "lucide-react";
import { clinic } from "../data/clinic";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About {clinic.name}
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {clinic.about}
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="bg-teal-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <ShieldCheck className="mx-auto h-12 w-12 text-teal-700" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Trusted Care
            </h3>
            <p className="mt-2 text-gray-600">
              We provide safe, reliable, and patient-focused skin care with
              personalized treatment plans.
            </p>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <Stethoscope className="mx-auto h-12 w-12 text-teal-700" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Expert Specialists
            </h3>
            <p className="mt-2 text-gray-600">
              Our experienced dermatologists use modern techniques to diagnose
              and treat various skin conditions.
            </p>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <HeartHandshake className="mx-auto h-12 w-12 text-teal-700" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Patient First
            </h3>
            <p className="mt-2 text-gray-600">
              Every patient receives compassionate care, clear guidance, and
              continuous support throughout their treatment journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}