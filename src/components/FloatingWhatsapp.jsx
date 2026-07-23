import { MessageCircle } from "lucide-react";
import { clinic } from "../data/clinic";

export default function FloatingWhatsApp() {
  const phone = clinic.phone.replace(/\D/g, "");

  return (
    <a
      href={`https://wa.me/${phone}?text=Hello%20Nikora%20Aesthetics,%20I'd%20like%20to%20book%20a%20consultation.`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[999]"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}

      <div className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gray-900 px-4 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
        Chat with us
      </div>

      {/* Button */}

     <div className="flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-2xl transition duration-300 hover:scale-105">

    <MessageCircle size={28} />

    <span className="hidden md:block font-semibold">
        Book Consultation
    </span>

</div>

    </a>
  );
}