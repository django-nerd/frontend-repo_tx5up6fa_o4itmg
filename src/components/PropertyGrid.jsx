import { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'

export default function PropertyGrid({ onSelect }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/properties?featured=`)
        const data = await res.json()
        setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="listings" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest listings</h2>
            <p className="text-gray-600">Hand-picked homes and condos available right now</p>
          </div>
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold">Request a tour →</a>
        </div>

        {loading ? (
          <p className="mt-10 text-gray-500">Loading properties...</p>
        ) : items.length === 0 ? (
          <div className="mt-10 p-6 rounded-lg border bg-white">
            <p className="text-gray-700">No properties yet. Click the button below to load sample listings for demo.</p>
            <form action={`${baseUrl}/api/setup/seed`} method="post" className="mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Seed sample data</button>
            </form>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {items.map(item => (
              <PropertyCard key={item.id} item={item} onSelect={onSelect} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
