import { ArrowRight, CheckCircle } from "lucide-react";

export default function ProductCard({
  title,
  subtitle,
  description,
  image,
  benefits,
  contains,
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative overflow-hidden">
        <div className="h-72 bg-white flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      </div>

      {/* Content */}

      <div className="flex flex-col flex-1 p-7">

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-gray-600 leading-7">
          {subtitle}
        </p>

        {description && (
          <p className="mt-4 text-sm leading-7 text-gray-500">
            {description}
          </p>
        )}

        {/* Benefits */}

        <div className="mt-7">

          <h4 className="font-semibold text-gray-900">
            Benefits
          </h4>

          <div className="mt-4 space-y-3">

            {benefits.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={18}
                  className="mt-1 text-teal-600 flex-shrink-0"
                />

                <span className="text-sm leading-6 text-gray-600">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Contains */}

        <div className="mt-8">

          <h4 className="font-semibold text-gray-900 mb-3">
            Contains
          </h4>

          <div className="flex flex-wrap gap-2">

            {contains.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-teal-50 px-3 py-2 text-xs font-medium text-teal-700 border border-teal-100"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* Button */}

        {/* <button className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-teal-700 transition-all duration-300 hover:gap-4">

          Learn More

          <ArrowRight size={18} />

        </button> */}

      </div>
    </div>
  );
}