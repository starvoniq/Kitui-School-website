import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/management', label: 'Management' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/3d-tour', label: '3D Tour' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-navy sticky top-0 z-50">
      <div className="container-page flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3">
          <Shield className="text-gold" size={32} strokeWidth={1.5} />
          <div className="leading-tight">
            <p className="text-white font-serif font-semibold text-lg tracking-wide">
              Kitui High School
            </p>
            <p className="text-gold text-xs italic">Learn to Serve</p>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium pb-1 border-b-2 transition-colors ${
                  isActive
                    ? 'text-white border-gold'
                    : 'text-slate-200 border-transparent hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href="/contact" className="hidden lg:inline-block btn-primary !py-2.5">
          Apply Now
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-slate-200 font-medium"
            >
              {link.label}
            </NavLink>
          ))}
          <a href="/contact" className="btn-primary justify-center">
            Apply Now
          </a>
        </nav>
      )}
    </header>
  )
}
