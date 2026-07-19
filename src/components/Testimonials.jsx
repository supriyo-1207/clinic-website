import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-teal-700 uppercase tracking-widest font-semibold">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Positive experiences and lasting relationships are at the heart of
            everything we do.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8 hover:shadow-lg transition"
            >

              <div className="flex gap-1 text-yellow-400">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="mt-6 text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>

                <p className="text-sm text-teal-700">
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