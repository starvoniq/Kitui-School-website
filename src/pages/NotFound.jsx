import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <h1 className="text-5xl font-bold text-navy mb-4">404</h1>
      <p className="text-slate-600 mb-8">This page could not be found.</p>
      <Link to="/" className="bg-navy text-white px-6 py-3 rounded-sm font-semibold hover:bg-navy-light transition-colors">
        Back to Home
      </Link>
    </section>
  )
}
