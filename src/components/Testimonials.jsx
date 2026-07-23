import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
            Patient Experiences
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Trusted Care, Positive Experiences
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment is to provide every client with a safe,
            comfortable, and personalized wellness experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <Quote
                size={36}
                className="text-teal-600 opacity-40"
              />

              <div className="mt-5 flex">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-6">

                <h4 className="font-semibold text-lg text-gray-900">
                  {item.name}
                </h4>

                <p className="mt-1 text-sm font-medium text-teal-700">
                  {item.treatment}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}