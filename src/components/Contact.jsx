import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (data && data.success) {
        setStatus('success')
        setMessage('Thanks! We\'ll get back to you shortly.')
        e.currentTarget.reset()
      } else {
        throw new Error('Failed to send')
      }
    } catch (e) {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Talk to an agent</h2>
          <p className="mt-3 text-gray-600">Leave your details and we\'ll reach out with options that match your needs.</p>
        </div>
        <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl border shadow-sm grid grid-cols-2 gap-4">
          <input name="name" required placeholder="Full name" className="col-span-2 sm:col-span-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="email" type="email" required placeholder="Email" className="col-span-2 sm:col-span-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="phone" placeholder="Phone (optional)" className="col-span-2 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" required placeholder="How can we help?" rows={4} className="col-span-2 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button disabled={status==='loading'} className="col-span-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60">
            {status==='loading' ? 'Sending...' : 'Send message'}
          </button>
          {message && <p className={`col-span-2 text-sm ${status==='success' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
        </form>
      </div>
    </section>
  )
}
