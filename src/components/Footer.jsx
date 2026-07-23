import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { clinic } from "../data/clinic";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Treatments", id: "services" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const treatments = [
  "Skin Glow Therapy",
  "De-Hydration Therapy",
  "Stress & Relaxation Therapy",
  "NAD+ Signature Therapy",
  "Immunity Booster Therapy",
  "Detoxification Therapy",
];

export default function Footer() {
  const phone = clinic.phone.replace(/\D/g, "");

  // Same smooth scroll as Navbar
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

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
    <footer className="bg-gray-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Clinic */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              {clinic.name}
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Helping you feel healthier, energized, and confident through
              premium IV wellness therapies. Our experienced healthcare team
              provides personalized treatments tailored to your wellness goals.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              {quickLinks.map((link) => (

                <li key={link.id}>

                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-teal-400 transition text-left"
                  >
                    {link.label}
                  </button>

                </li>

              ))}

            </ul>

          </div>

          {/* Therapies */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Our Therapies
            </h3>

            <ul className="mt-6 space-y-3">

              {treatments.map((item) => (

                <li
                  key={item}
                  className="hover:text-teal-400 transition"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Get In Touch
            </h3>

            <p className="mt-5 leading-7 text-gray-400">
              Have questions about our IV therapies?
              We're here to help you choose the right treatment.
            </p>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="text-teal-400 mt-1"
                />

                <span>{clinic.phone}</span>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="text-teal-400 mt-1"
                />

                <span>{clinic.email}</span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="text-teal-400 mt-1"
                />

                <span>{clinic.address}</span>

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={`tel:${phone}`}
                className="rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-green-500 px-5 py-3 text-sm font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp />

                WhatsApp
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-sm text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} {clinic.name}. All Rights Reserved.
          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1877F2] transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 transition flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}