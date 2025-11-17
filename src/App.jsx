import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const brand = 'QuickBite'

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setShowCart(true)
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const checkout = async (summary) => {
    if (cart.length === 0) return
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const payload = {
      customer_name: 'Guest',
      phone: '0000000000',
      address: 'N/A',
      items: cart.map((c) => ({ item_id: c.id, name: c.name, price: c.price, quantity: c.quantity })),
      subtotal: +summary.subtotal.toFixed(2),
      delivery_fee: +summary.delivery_fee.toFixed(2),
      total: +summary.total.toFixed(2)
    }
    try {
      const res = await fetch(`${base}/api/orders`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (res.ok) {
        alert('Order placed! ID: ' + data.id)
        setCart([])
        setShowCart(false)
      } else {
        alert('Order failed: ' + (data.detail || 'Unknown error'))
      }
    } catch (e) {
      alert('Order failed: ' + e.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Navbar brand={brand} onCartClick={() => setShowCart((s) => !s)} cartCount={cart.reduce((a,c)=>a+c.quantity,0)} />
      <Hero />

      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-[1fr_360px]">
        <Menu onAdd={addToCart} />
        <div className="md:sticky md:top-24 h-fit">
          <Cart items={cart} onRemove={removeFromCart} onCheckout={checkout} />
        </div>
      </div>

      <footer id="about" className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} QuickBite — Fast, tasty, delivered.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
