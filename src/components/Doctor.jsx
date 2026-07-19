import { Award, GraduationCap, HeartHandshake } from "lucide-react";
// import doctorImage from "../assets/images/doctor.jpg";
import doctorImage from "../assets/images/hero-doctor.png";

export default function Doctor() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-teal-700 font-semibold uppercase tracking-wider">
            Meet Our Expert
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Dedicated to Your Health & Confidence
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Every treatment begins with expert guidance, personalized care,
            and a commitment to delivering safe and effective results.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div>
            <img
              src={doctorImage}
              alt="Doctor"
              className="rounded-3xl shadow-xl"
            />
          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900">
              Dr. Jane Smith
            </h3>

            <p className="mt-2 text-teal-700 font-medium">
              Aesthetic Physician & IV Therapy Specialist
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              With years of experience in aesthetic medicine and wellness
              treatments, our expert team is committed to providing
              personalized solutions that enhance your confidence,
              health, and natural beauty.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-3">
                <Award className="text-teal-700" />
                Certified Aesthetic Professional
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="text-teal-700" />
                Advanced Clinical Training
              </div>

              <div className="flex items-center gap-3">
                <HeartHandshake className="text-teal-700" />
                Patient-Centered Care
              </div>

            </div>

            <a
              href="#contact"
              className="inline-block mt-10 bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Book Consultation
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}