import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream">
      <div className="text-center px-6 py-16">
        <p className="text-gold font-serif text-9xl font-bold leading-none mb-4">404</p>
        <h1 className="font-serif font-bold text-forest text-3xl mb-3">Page Not Found</h1>
        <p className="text-slate-500 font-sans mb-8 max-w-sm mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline-dark flex items-center gap-2">
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
