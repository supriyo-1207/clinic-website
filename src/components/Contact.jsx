import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

import { clinic } from "../data/clinic";

export default function Contact() {

  const phone = clinic.phone.replace(/\D/g, "");

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
            Let's Connect
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Start Your Wellness Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're interested in Skin Glow Therapy,
            NAD+ Therapy, Immunity Boosters or any of our IV
            wellness treatments, our team is here to guide you
            toward the most suitable option.
          </p>

        </div>

        {/* Main Card */}

        <div className="mt-20 grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <div className="rounded-3xl bg-white border border-gray-200 shadow-xl p-10">

            <h3 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Reach out to us through your preferred method.
              We're happy to answer your questions and help you
              choose the right therapy.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex gap-5">

                <div className="bg-teal-100 p-4 rounded-2xl">
                  <Phone className="text-teal-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {clinic.phone}
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-teal-100 p-4 rounded-2xl">
                  <Mail className="text-teal-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {clinic.email}
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-teal-100 p-4 rounded-2xl">
                  <MapPin className="text-teal-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Clinic Location
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {clinic.address}
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-teal-100 p-4 rounded-2xl">
                  <Clock3 className="text-teal-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Working Hours
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {clinic.timings}
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-emerald-600 text-white shadow-xl p-10 flex flex-col justify-center">

            <span className="text-teal-100 uppercase tracking-widest">
              Need Assistance?
            </span>

            <h3 className="mt-4 text-4xl font-bold leading-tight">
              We're Here To Help
            </h3>

            <p className="mt-6 text-lg leading-8 text-teal-50">
              Our healthcare professionals will guide you through
              your wellness goals and recommend the therapy that
              best suits your needs.
            </p>

            <div className="mt-10 space-y-4">

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-teal-700 transition hover:scale-105"
              >
                <MessageCircle size={22} />

                Chat on WhatsApp
              </a>

              <a
                href={`tel:${clinic.phone}`}
                className="flex items-center justify-center gap-3 rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-teal-700"
              >
                <Phone size={22} />

                Call Now
              </a>

            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-6">

              <h4 className="font-semibold text-xl">
                Why Contact Us?
              </h4>

              <ul className="mt-5 space-y-3 text-teal-50">

                <li>✔ Personalized therapy recommendations</li>

                <li>✔ Answers to treatment questions</li>

                <li>✔ Appointment scheduling assistance</li>

                <li>✔ Friendly healthcare support</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}