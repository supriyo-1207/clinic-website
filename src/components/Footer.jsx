import { clinic } from "../data/clinic";

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-8">

      <div className="max-w-6xl mx-auto px-4 text-center">

        <h3 className="text-xl font-bold">
          {clinic.name}
        </h3>

        <p className="mt-3 text-teal-100">
          {clinic.address}
        </p>

        <p className="mt-2 text-teal-100">
          {clinic.phone}
        </p>

        <div className="mt-6 border-t border-teal-700 pt-6">

          <p className="text-sm text-teal-200">
            © {new Date().getFullYear()} {clinic.name}. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}