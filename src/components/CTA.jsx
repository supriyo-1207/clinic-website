export default function CTA() {
  return (
    <section className="bg-teal-700 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-teal-100 uppercase tracking-widest font-semibold">
          Ready to Begin?
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
          Your Journey to Better Health
          <br />
          Starts Today
        </h2>

        <p className="mt-6 text-lg text-teal-100 leading-8 max-w-3xl mx-auto">
          Whether you're looking for IV therapy, skin rejuvenation,
          or personalized wellness treatments, our team is here
          to help you feel healthier, more confident, and refreshed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="#contact"
            className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book Consultation
          </a>

          <a
            href="#services"
            className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition"
          >
            Explore Treatments
          </a>

        </div>

      </div>
    </section>
  );
}