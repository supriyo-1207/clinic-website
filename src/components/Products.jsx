import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-teal-700 uppercase tracking-wider font-semibold">
            Featured Treatments
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Discover Our Premium Treatments
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            From IV therapy to advanced aesthetic procedures, every treatment is
            designed to enhance your health, confidence, and overall well-being.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-teal-700 px-8 py-4 text-white font-semibold hover:bg-teal-800 transition"
          >
            Book Consultation
          </a>

        </div>

      </div>
    </section>
  );
}