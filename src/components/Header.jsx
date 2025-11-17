import { ShoppingCart, UtensilsCrossed } from "lucide-react"

export default function Header({ brand, cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <UtensilsCrossed className="w-6 h-6 text-orange-500" />
          <span>{brand}</span>
        </div>
        <button
          onClick={onCartClick}
          className="relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
