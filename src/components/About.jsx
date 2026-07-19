import {
  CheckCircle,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import { clinic } from "../data/clinic";
// import aboutImage from "../assets/images/about-clinic.jpg";
import aboutImage from "../assets/images/hero-doctor.png";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-teal-700 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Welcome to {clinic.name}
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            {clinic.about}
          </p>

        </div>

        {/* Main About */}

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div>
            <img
              src={aboutImage}
              alt="Clinic"
              className="rounded-3xl shadow-xl"
            />
          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900">
              Personalized Wellness &
              Aesthetic Care
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              We combine advanced medical expertise with modern aesthetic
              treatments to deliver personalized care that enhances your
              health, confidence, and overall well-being.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-3">
                <CheckCircle className="text-teal-600 mt-1" />
                <span>Certified & Experienced Professionals</span>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-teal-600 mt-1" />
                <span>Customized Treatment Plans</span>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-teal-600 mt-1" />
                <span>Latest Medical Technology</span>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-teal-600 mt-1" />
                <span>Comfortable & Safe Environment</span>
              </div>

            </div>

          </div>

        </div>

        {/* Feature Cards */}

        <div className="mt-24 grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition">

            <ShieldCheck className="text-teal-700" size={42} />

            <h3 className="mt-5 text-xl font-semibold">
              Trusted Care
            </h3>

            <p className="mt-3 text-gray-600">
              Safe, reliable, and evidence-based treatments tailored to every
              patient.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition">

            <Stethoscope className="text-teal-700" size={42} />

            <h3 className="mt-5 text-xl font-semibold">
              Expert Specialists
            </h3>

            <p className="mt-3 text-gray-600">
              Skilled professionals delivering advanced IV therapy and
              aesthetic procedures.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition">

            <HeartHandshake className="text-teal-700" size={42} />

            <h3 className="mt-5 text-xl font-semibold">
              Patient First
            </h3>

            <p className="mt-3 text-gray-600">
              Every treatment is designed around your goals, comfort, and
              long-term wellness.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}