import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            What Our Patients Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by hundreds of happy patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6"
            >

              <div className="flex mb-4">
                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-semibold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}