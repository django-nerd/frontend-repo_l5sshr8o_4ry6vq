function Cart({ items, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  const delivery = subtotal > 0 ? 3.5 : 0
  const total = +(subtotal + delivery).toFixed(2)

  return (
    <aside className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900">Your Order</h3>
      <div className="mt-4 divide-y">
        {items.length === 0 && <p className="py-6 text-gray-500">Your cart is empty.</p>}
        {items.map((it) => (
          <div key={it.id} className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">{it.name}</p>
              <p className="text-sm text-gray-500">${it.price.toFixed(2)} × {it.quantity}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-semibold text-gray-900">${(it.price * it.quantity).toFixed(2)}</p>
              <button onClick={() => onRemove(it.id)} className="rounded-full bg-gray-100 px-2 py-1 text-sm text-gray-700 hover:bg-gray-200">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium">${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Delivery</span><span className="font-medium">${delivery.toFixed(2)}</span></div>
        <div className="flex justify-between text-base font-semibold text-gray-900"><span>Total</span><span>${total.toFixed(2)}</span></div>
      </div>
      <button disabled={items.length===0} onClick={() => onCheckout({ subtotal, delivery_fee: delivery, total })} className="mt-6 w-full rounded-full bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60">Checkout</button>
    </aside>
  )
}

export default Cart
