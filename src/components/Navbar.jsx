import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded bg-blue-600 text-white grid place-items-center font-bold">R</span>
          <span className="text-xl font-semibold tracking-tight">RealtyPro</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#listings" className="hover:text-blue-600">Listings</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="/test" className="hover:text-blue-600">System Check</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
