export default function MenuList({ items, onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map(item => (
        <div key={item.id} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-800">{item.name}</h4>
              <span className="text-orange-600 font-bold">${item.price.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-500">{item.is_veg ? 'Veg' : 'Non-veg'}{item.spice_level ? ` • ${item.spice_level}` : ''}</span>
              <button onClick={() => onAdd(item)} className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
