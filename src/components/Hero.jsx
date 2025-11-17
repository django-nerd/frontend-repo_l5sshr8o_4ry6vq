function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Fresh, Fast, and Delicious
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Craving something tasty? Order from our curated selection of crowd favorites and get it delivered hot and fresh.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-white shadow hover:bg-orange-600">Browse Menu</a>
            <a href="#about" className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-white shadow hover:bg-gray-800">Why QuickBite?</a>
          </div>
        </div>
        <div className="relative">
          <img className="rounded-2xl shadow-xl ring-1 ring-black/10" src="https://images.unsplash.com/photo-1599929219210-7c422e4d5208?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBc3NvcnRlZCUyMHRhc3R5JTIwZm9vZHxlbnwwfDB8fHwxNzYzMzg5NjAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Assorted tasty food" />
          <div className="absolute -bottom-6 -left-6 rounded-xl bg-white/90 px-4 py-3 shadow-lg ring-1 ring-black/10">
            <p className="text-sm font-semibold text-gray-700">Average delivery</p>
            <p className="text-lg font-bold text-gray-900">30-40 mins</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
