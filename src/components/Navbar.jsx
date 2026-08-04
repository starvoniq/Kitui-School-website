import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import logo from '../assets/logo.jpg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  {
    label: 'Academics',
    to: '/academics',
    dropdown: [
      { to: '/academics#overview', label: 'Overview' },
      { to: '/academics#departments', label: 'Departments' },
      { to: '/academics#facilities', label: 'Facilities' },
      { to: '/academics#results', label: 'KCSE Results' },
    ],
  },
  {
    label: 'Leadership',
    to: '/management',
    dropdown: [
      { to: '/management', label: 'Administration' },
      { to: '/management#principal', label: "Principal's Message" },
      { to: '/management#board', label: 'Board of Management' },
    ],
  },
  {
    label: 'Campus Life',
    to: '/3d-tour',
    dropdown: [
      { to: '/3d-tour', label: '3D Virtual Tour' },
      { to: '/gallery', label: 'Photo Gallery' },
    ],
  },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 shadow-md ${scrolled
          ? 'bg-forest-dark shadow-xl'
          : 'bg-forest-dark'
        }`}
    >


      {/* Main nav */}
      <div className="container-page flex items-center justify-between h-[68px]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Kitui High School Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-gold/40 shadow-sm"
          />
          <div className="leading-tight">
            <p className="text-white font-serif font-bold text-base tracking-wide leading-none">
              Kitui High School
            </p>
            <p className="text-gold-light text-[11px] italic font-sans mt-0.5 leading-none font-medium">
              Learn To Serve Since 1938
            </p>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3.5 py-2 text-sm font-sans font-medium rounded transition-colors ${isActive
                      ? 'text-gold font-bold'
                      : 'text-white hover:text-gold'
                    }`
                  }
                >
                  {link.label}
                  <ChevronDown size={14} className="text-gold-light opacity-80 group-hover:rotate-180 transition-transform duration-200" />
                </NavLink>
                <div className="nav-dropdown">
                  {link.dropdown.map((item) => (
                    <Link key={item.label} to={item.to} className="nav-dropdown-item">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-sans font-medium rounded transition-colors relative group ${isActive ? 'text-gold font-bold' : 'text-white hover:text-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}
                    />
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button aria-label="Search" className="text-white/60 hover:text-white transition-colors p-1">
            <Search size={18} />
          </button>
          <Link
            to="/contact"
            className="bg-gold text-white font-semibold text-sm px-5 py-2.5 rounded hover:bg-gold-dark transition-all duration-200 shadow-sm active:translate-y-0 font-sans"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="lg:hidden bg-forest-dark border-t border-white/10 overflow-y-auto max-h-[80vh]">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="flex items-center justify-between w-full px-3 py-2.5 text-white/80 font-sans font-medium text-sm"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 border-l border-gold/30 pl-4 mb-1 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => { setOpen(false); setOpenDropdown(null) }}
                          className="block py-1.5 text-sm text-white/60 hover:text-gold transition-colors font-sans"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded text-sm font-sans font-medium transition-colors ${isActive ? 'text-gold bg-forest-light' : 'text-white/80 hover:text-white hover:bg-forest-light'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <div className="pt-3 border-t border-white/10 mt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
