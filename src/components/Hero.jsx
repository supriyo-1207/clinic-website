import { CheckCircle } from "lucide-react";
import { clinic } from "../data/clinic";
import heroImage from "../assets/images/hero-doctor.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-teal-50 via-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
              Premium IV Therapy & Aesthetic Clinic
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Restore.
              <br />
              Rejuvenate.
              <br />
              <span className="text-teal-700">Feel Your Best.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Experience personalized IV drip therapy, advanced skin care,
              and aesthetic treatments designed to help you look and feel
              your absolute best.
            </p>

            {/* Features */}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-teal-600" size={20} />
                <span>Certified Professionals</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-teal-600" size={20} />
                <span>Personalized Treatments</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-teal-600" size={20} />
                <span>Premium IV Therapy</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-teal-600" size={20} />
                <span>Safe & Hygienic Clinic</span>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="#contact"
                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-full font-semibold text-center transition"
              >
                Book Consultation
              </a>

              <a
                href="#services"
                className="border-2 border-teal-700 text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold text-center transition"
              >
                Explore Treatments
              </a>

            </div>

            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-10">

              <div>
                <h3 className="text-3xl font-bold text-teal-700">
                  500+
                </h3>
                <p className="text-gray-600">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-700">
                  10+
                </h3>
                <p className="text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-700">
                  100%
                </h3>
                <p className="text-gray-600">
                  Personalized Care
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            <div className="absolute -top-6 -left-6 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60"></div>

            <img
              src={heroImage}
              alt="Nikora Aesthetics Clinic"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}