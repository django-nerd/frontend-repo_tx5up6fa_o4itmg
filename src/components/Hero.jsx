export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-violet-50" />
      <div className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-semibold mb-2">Find your next home</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Beautiful properties for modern living
          </h1>
          <p className="mt-5 text-gray-600 text-lg max-w-prose">
            Browse curated homes, condos, and rentals. Filter by price, bedrooms, and more. Message us to schedule a private tour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#listings" className="px-5 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Explore listings</a>
            <a href="#contact" className="px-5 py-3 rounded border font-semibold hover:bg-gray-50 transition-colors">Talk to an agent</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border bg-white">
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1400&auto=format&fit=crop"
              alt="Featured property"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
