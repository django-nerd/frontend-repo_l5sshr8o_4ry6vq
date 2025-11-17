import { useState } from 'react'

function Navbar({ brand, onCartClick, cartCount }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-rose-600 bg-clip-text text-transparent">{brand}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#menu" className="hover:text-gray-900">Menu</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="/test" className="hover:text-gray-900">System Test</a>
          <button onClick={onCartClick} className="relative inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-orange-600">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            <a href="#menu" className="block py-1">Menu</a>
            <a href="#about" className="block py-1">About</a>
            <a href="/test" className="block py-1">System Test</a>
            <button onClick={onCartClick} className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">Cart {cartCount > 0 ? `(${cartCount})` : ''}</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
