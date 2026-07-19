import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Clock3,
} from "lucide-react";
import { clinic } from "../data/clinic";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}

      <div className="hidden md:block bg-teal-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <Phone size={15} />
            <span>{clinic.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            <span>{clinic.timings}</span>
          </div>

        </div>
      </div>

      {/* Main Navbar */}

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex justify-between items-center">

            {/* Logo */}

            <a href="#home" className="flex flex-col">

              <span className="text-2xl font-bold text-teal-700">
                {clinic.name}
              </span>

              <span className="text-xs text-gray-500">
                IV Therapy & Aesthetic Clinic
              </span>

            </a>

            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center gap-8">

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-teal-700 transition"
                >
                  {link.label}
                </a>
              ))}

            </div>

            {/* CTA */}

            <div className="hidden lg:block">

              <a
                href="#contact"
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Book Consultation
              </a>

            </div>

            {/* Mobile Button */}

            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        {isOpen && (

          <div className="lg:hidden bg-white border-t">

            <div className="px-6 py-6 flex flex-col gap-5">

              {navLinks.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 font-medium hover:text-teal-700"
                >
                  {link.label}
                </a>

              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-teal-700 text-white py-3 rounded-full text-center font-semibold"
              >
                Book Consultation
              </a>

            </div>

          </div>

        )}

      </nav>
    </>
  );
}