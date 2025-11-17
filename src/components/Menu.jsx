import { useEffect, useState } from 'react'

function Menu({ onAdd }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/menu`)
        if (!res.ok) throw new Error('Failed to fetch menu')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <section id="menu" className="mx-auto max-w-6xl px-4 py-12"><p>Loading menu…</p></section>
  if (error) return <section id="menu" className="mx-auto max-w-6xl px-4 py-12"><p className="text-red-600">{error}</p></section>

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900">Popular Dishes</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="group rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                {item.description && <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>}
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <span className="rounded-full bg-gray-100 px-2 py-0.5">{item.category}</span>
                  {item.spicy && <span className="rounded-full bg-rose-100 px-2 py-0.5 text-rose-700">Spicy</span>}
                  {item.vegetarian && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">Veg</span>}
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                <button onClick={() => onAdd(item)} className="mt-2 inline-flex items-center rounded-full bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-orange-600">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
