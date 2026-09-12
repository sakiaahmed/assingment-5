export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
            {tech.badge}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-bold text-gray-900">{tech.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{tech.description}</p>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
            {tech.category}
          </span>
          <span className="px-2 py-1 rounded-full bg-gray-50 text-gray-600 font-medium">
            {tech.difficulty}
          </span>
          <span className="ml-auto flex items-center gap-1 text-yellow-500 font-semibold">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold transition ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "gradient-brand text-white"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}