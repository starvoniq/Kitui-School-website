import { Link } from 'react-router-dom'
import {
  Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail,
  ArrowRight, Send, ChevronRight, Landmark,
} from 'lucide-react'

const logo = '/kitui%20school%20logo.jpeg'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Leadership', to: '/management' },
  { label: 'Campus Life', to: '/3d-tour' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]

const resources = [
  { label: 'Admissions', to: '/contact' },
  { label: 'KCSE Results', to: '/about#results' },
  { label: 'CBC Pathways', to: '/academics#departments' },
  { label: 'School Facilities', to: '/academics#facilities' },
  { label: 'Board of Management', to: '/management#board' },
]

const socials = [
  { Icon: Facebook, href: 'https://www.facebook.com/groups/25972382395/', label: 'Facebook' },
  { Icon: Twitter, href: 'https://kituihighschool.sc.ke/', label: 'Twitter' },
  { Icon: Instagram, href: 'https://kituihighschool.sc.ke/', label: 'Instagram' },
  { Icon: Youtube, href: 'https://kituihighschool.sc.ke/', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80 relative z-30">
      {/* Main footer body */}
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand col */}
        <div className="lg:pr-8">
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logo}
              alt="Kitui High School Logo"
              className="h-12 w-auto object-contain shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-lg leading-tight tracking-tight">
                Kitui High School
              </p>
              <p className="text-white/50 text-xs mt-0.5">Est. 1908 · Learn To Serve</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60 mb-6">
            National boys' boarding school in Kitui County, Kenya. Building character,
            inspiring excellence and shaping future leaders since 1908.
          </p>
          <div className="flex items-center gap-3 mb-8">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          {/* Newsletter */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-[0.18em] mb-3">
              Newsletter
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 rounded px-3 py-2.5 text-xs text-white placeholder:text-white/35 focus:outline-none focus:bg-white/15 min-w-0"
              />
              <button
                type="submit"
                className="bg-white text-black px-3.5 py-2.5 rounded hover:bg-white/85 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Quick links */}
        <FooterCol title="Quick Links" items={quickLinks} />

        {/* Resources */}
        <FooterCol title="Resources" items={resources} />

        {/* Contact */}
        <div>
          <h4 className="text-white uppercase text-xs font-semibold tracking-[0.18em] mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-white/50 shrink-0 mt-0.5" />
              <span className="text-white/70 leading-relaxed">
                Mbusyani Road,<br />P.O. Box 71, Kitui, Kenya
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-white/50 shrink-0" />
              <a href="tel:+254723636536" className="text-white/70 hover:text-white transition-colors">
                +254 723 636 536
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-white/50 shrink-0" />
              <a href="mailto:info@kituihighschool.sc.ke" className="text-white/70 hover:text-white transition-colors">
                info@kituihighschool.sc.ke
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-6">
            <p className="text-xs text-white/45 leading-relaxed">
              Office Hours
              <br />Mon-Fri · 8:00 AM to 4:30 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-forest-dark">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p className="flex items-center gap-1.5">
            <Landmark size={13} className="text-white/40" />
            © {new Date().getFullYear()} Kitui High School. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="opacity-30">|</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-white uppercase text-xs font-semibold tracking-[0.18em] mb-5">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
            >
              <ChevronRight
                size={12}
                className="text-white/30 group-hover:text-white transition-all -translate-x-1 group-hover:translate-x-0 duration-200"
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
