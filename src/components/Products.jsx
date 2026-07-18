import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive skin and hair treatments delivered with care,
            precision, and the latest dermatology technology.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}