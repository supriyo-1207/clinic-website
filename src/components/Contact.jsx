import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { clinic } from "../data/clinic";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            We'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="space-y-6">

            <div className="flex gap-4">
              <MapPin className="text-teal-700" />
              <p>{clinic.address}</p>
            </div>

            <div className="flex gap-4">
              <Phone className="text-teal-700" />
              <p>{clinic.phone}</p>
            </div>

            <div className="flex gap-4">
              <Mail className="text-teal-700" />
              <p>{clinic.email}</p>
            </div>

            <div className="flex gap-4">
              <Clock className="text-teal-700" />
              <p>{clinic.timings}</p>
            </div>

          </div>

          {/* Right */}

          <div className="rounded-xl overflow-hidden shadow">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="350"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
}