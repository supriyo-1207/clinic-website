import * as Icons from "lucide-react";

export default function ProductCard({ title, description, icon }) {
  const Icon = Icons[icon] || Icons.Sparkles;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-4">
        <Icon className="text-teal-700" size={24} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}