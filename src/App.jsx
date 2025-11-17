import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertyGrid from './components/PropertyGrid'
import Contact from './components/Contact'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <PropertyGrid onSelect={setSelected} />
      <Contact />

      {/* Simple modal for selected property */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 grid place-items-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-gray-100">
              <img src={(selected.images && selected.images[0])} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <p className="text-blue-600 font-bold mt-1">${Number(selected.price).toLocaleString()}</p>
              <p className="mt-2 text-gray-600">{selected.address}, {selected.city}, {selected.state} {selected.zip_code}</p>
              <p className="mt-4">{selected.description}</p>
              <div className="mt-4 text-sm text-gray-500 flex gap-4">
                <span>{selected.bedrooms} bd</span>
                <span>{selected.bathrooms} ba</span>
                <span>{selected.area_sqft} sqft</span>
                <span>{selected.property_type}</span>
              </div>
              <div className="mt-6">
                <a href="#contact" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Request info</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
