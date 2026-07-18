import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinic } from "../data/clinic";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-teal-700">
            {clinic.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-teal-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={`tel:${clinic.phone}`}
              className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-800 transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-teal-700 font-medium"
              >
                {link.label}
              </a>
            ))}

            <a
              href={`tel:${clinic.phone}`}
              className="flex items-center justify-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-800 transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}