export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="text-sm text-gray-500 mt-1">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 text-center py-8 border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-sm text-gray-400">
            Your stack is empty. Add technologies to get started.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <img src={item.icon} alt={item.name} className="w-8 h-8" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-2 py-2 border-2 border-red-200 text-red-500 text-sm font-semibold rounded-lg hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}