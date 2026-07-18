import { clinic } from "../data/clinic";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-teal-50 to-white py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
          {clinic.tagline}
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Expert dermatology care tailored to you — from acne treatment to
          advanced skin rejuvenation, all in one trusted clinic.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-teal-700 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800 transition-colors"
          >
            Book an Appointment
          </a>

          <a
            href="#services"
            className="border border-teal-700 text-teal-700 px-8 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}