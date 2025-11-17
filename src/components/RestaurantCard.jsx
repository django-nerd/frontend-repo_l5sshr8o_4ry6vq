export default function RestaurantCard({ name, description, image, cuisine, rating, onClick }) {
  return (
    <button onClick={onClick} className="text-left bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">★ {rating || 4.5}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <p className="text-xs text-gray-500 mt-2">{cuisine}</p>
      </div>
    </button>
  )
}
