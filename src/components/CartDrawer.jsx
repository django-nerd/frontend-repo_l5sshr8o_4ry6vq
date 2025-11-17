import { X } from "lucide-react"

export default function CartDrawer({ open, onClose, items, onQty, onCheckout }) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border rounded-lg p-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onQty(item.id, Math.max(1, item.quantity - 1))} className="w-8 h-8 rounded bg-gray-100">-</button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button onClick={() => onQty(item.id, item.quantity + 1)} className="w-8 h-8 rounded bg-gray-100">+</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t space-y-3">
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full bg-orange-500 disabled:bg-gray-300 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
