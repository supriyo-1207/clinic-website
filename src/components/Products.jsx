import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Products() {
  const scrollToContact = (event) => {
    event.preventDefault();

    const section = document.getElementById("contact");

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
  };

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">

            <Sparkles size={16} />

            Premium IV Therapies

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Personalized Wellness
            <span className="text-teal-700"> Treatments </span>
            Designed For You
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every treatment is carefully designed by our healthcare
            professionals to support your wellness, hydration,
            immunity, recovery and overall vitality using clinically
            selected IV nutrients.
          </p>

        </div>

        {/* Small Features */}

        {/* <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">

            <ShieldCheck className="text-teal-700 mb-4" size={34} />

            <h3 className="font-bold text-lg text-gray-900">
              Certified Care
            </h3>

            <p className="mt-2 text-gray-600">
              All therapies are administered under trained medical
              supervision using high-quality ingredients.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">

            <HeartHandshake className="text-teal-700 mb-4" size={34} />

            <h3 className="font-bold text-lg text-gray-900">
              Personalized Treatment
            </h3>

            <p className="mt-2 text-gray-600">
              Treatment plans are customized according to your
              wellness goals and individual requirements.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">

            <Sparkles className="text-teal-700 mb-4" size={34} />

            <h3 className="font-bold text-lg text-gray-900">
              Premium Ingredients
            </h3>

            <p className="mt-2 text-gray-600">
              Carefully selected vitamins, antioxidants and
              electrolytes help support your health and recovery.
            </p>

          </div>

        </div> */}

        {/* Product Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              image={product.image}
              benefits={product.benefits}
              contains={product.contains}
            />

          ))}

        </div>

        {/* CTA */}

        <div className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 to-emerald-600 px-10 py-14 text-center text-white shadow-xl">

          <h3 className="text-3xl font-bold">
            Ready to Start Your Wellness Journey?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-50 leading-8">
            Book a consultation with our experienced medical team and
            discover the IV therapy that's right for your health,
            recovery and lifestyle goals.
          </p>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-teal-700 transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Consultation
          </a>

        </div>

      </div>
    </section>
  );
}