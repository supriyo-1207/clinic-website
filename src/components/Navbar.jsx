import { useEffect, useState } from "react";
import { Menu, X, Phone, Clock3 } from "lucide-react";
import { clinic } from "../data/clinic";

const navLinks = [
  { label: "Home", id: "home" },
  // { label: "About", id: "about" },
  { label: "Treatments", id: "services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth Scroll
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

    setIsOpen(false);
  };

  // Highlight active menu while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">

        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <button
              onClick={() => scrollToSection("home")}
              className="flex flex-col text-left"
            >
              <span className="text-2xl font-bold text-teal-700">
                {clinic.name}
              </span>

              <span className="text-xs text-gray-500">
                IV Therapy & Aesthetic Clinic
              </span>
            </button>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-8">

              {navLinks.map((link) => (

                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition duration-300 relative

                  ${
                    activeSection === link.id
                      ? "text-teal-700"
                      : "text-gray-700 hover:text-teal-700"
                  }`}
                >
                  {link.label}

                  {activeSection === link.id && (
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-teal-700 rounded-full"></span>
                  )}

                </button>

              ))}

            </div>

            {/* CTA */}

            <div className="hidden lg:block">

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105"
              >
                Book Consultation
              </button>

            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 transition-transform duration-300"
            >
              <div
                className={`transition-all duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out

          ${
            isOpen
              ? "max-h-[500px] opacity-100 border-t"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="bg-white px-6 py-6 flex flex-col gap-5">

            {navLinks.map((link) => (

              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left font-medium transition

                ${
                  activeSection === link.id
                    ? "text-teal-700"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </button>

            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-full font-semibold transition"
            >
              Book Consultation
            </button>

          </div>

        </div>

      </nav>
    </>
  );
}