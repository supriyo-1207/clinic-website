import { ArrowRight, CheckCircle } from "lucide-react";

export default function ProductCard({
  title,
  description,
  image,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {description}
        </p>

        <div className="mt-6 space-y-2">

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle size={18} className="text-teal-600" />
            Personalized Treatment
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle size={18} className="text-teal-600" />
            Safe Clinical Procedure
          </div>

        </div>

        <button className="mt-8 flex items-center gap-2 text-teal-700 font-semibold hover:gap-3 transition-all">
          Learn More
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}