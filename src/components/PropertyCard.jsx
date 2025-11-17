export default function PropertyCard({ item, onSelect }) {
  return (
    <button onClick={() => onSelect?.(item)} className="text-left w-full group">
      <div className="rounded-xl overflow-hidden border bg-white shadow-sm group-hover:shadow-md transition-shadow">
        <div className="aspect-video w-full bg-gray-100 overflow-hidden">
          <img src={(item.images && item.images[0]) || 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5'} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
            {item.featured && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Featured</span>}
          </div>
          <p className="mt-1 text-blue-600 font-bold">${Number(item.price).toLocaleString()}</p>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.address}, {item.city}, {item.state}</p>
          <div className="mt-3 text-xs text-gray-500 flex gap-3">
            <span>{item.bedrooms} bd</span>
            <span>{item.bathrooms} ba</span>
            <span>{item.area_sqft} sqft</span>
          </div>
        </div>
      </div>
    </button>
  )
}
