import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import { clinic } from "../data/clinic";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-teal-700 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            We're Here to Help
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule your consultation?
            Reach out to our friendly team today.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}

          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="bg-teal-100 p-4 rounded-2xl">
                <Phone className="text-teal-700" />
              </div>

              <div>

                <h3 className="font-semibold text-xl">
                  Phone
                </h3>

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

                <h3 className="font-semibold text-xl">
                  Email
                </h3>

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

                <h3 className="font-semibold text-xl">
                  Address
                </h3>

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

                <h3 className="font-semibold text-xl">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  {clinic.timings}
                </p>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-lg">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}