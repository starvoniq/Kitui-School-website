import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight, Send } from 'lucide-react'
import logo from '../assets/logo.jpg'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Leadership', to: '/management' },
  { label: 'Campus Life', to: '/3d-tour' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News & Events', to: '/' },
  { label: 'Contact Us', to: '/contact' },
]

const resources = [
  { label: 'Admissions', to: '/contact' },
  { label: 'School Calendar', to: '#' },
  { label: 'Fees Structure', to: '#' },
  { label: 'Downloads', to: '#' },
  { label: 'School Policies', to: '#' },
  { label: 'CBC Information', to: '#' },
  { label: 'Career Guidance', to: '#' },
]

const alumni = [
  { label: 'Alumni Association', to: '#' },
  { label: 'Alumni Directory', to: '#' },
  { label: 'Reunions', to: '#' },
  { label: 'Mentorship', to: '#' },
  { label: 'Give Back', to: '#' },
]

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/70 relative z-30 border-t border-white/10">
      {/* Main footer body */}
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand col — spans 2 on lg */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logo}
              alt="Kitui High School Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-gold/40"
            />
            <div>
              <p className="text-white font-serif font-semibold text-lg leading-tight">
                Kitui High School
              </p>
              <p className="text-gold text-xs italic font-sans mt-0.5">
                Learn To Serve Since 1938
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5 max-w-xs">
            Building character, inspiring excellence. Preparing young men to lead
            and serve with integrity since 1938.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mb-6">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          {/* Newsletter */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">
              Newsletter
            </p>
            <p className="text-xs text-white/50 mb-3">
              Stay updated with the latest news and events.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-forest-light border border-white/10 rounded px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 min-w-0"
              />
              <button
                type="submit"
                className="bg-gold text-forest px-3 py-2 rounded hover:bg-gold-light transition-colors"
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

        {/* Contact + Alumni */}
        <div className="space-y-8">
          {/* Alumni */}
          <div>
            <h4 className="text-gold uppercase text-xs font-semibold tracking-widest mb-4 font-sans">
              Alumni
            </h4>
            <ul className="space-y-2">
              {alumni.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold/0 group-hover:text-gold/80 transition-all -translate-x-2 group-hover:translate-x-0 duration-200"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-gold uppercase text-xs font-semibold tracking-widest mb-4 font-sans">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>Kitui – Machakos Road,<br />P.O. Box 71, Kitui, Kenya</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-gold shrink-0" />
                <span>+254 720 202 123<br />+254 722 123 456</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:info@kituihigh.ac.ke" className="hover:text-white transition-colors">
                  info@kituihigh.ac.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Kitui High School. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-gold uppercase text-xs font-semibold tracking-widest mb-4 font-sans">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
            >
              <ArrowRight
                size={12}
                className="text-gold/0 group-hover:text-gold/80 transition-all -translate-x-2 group-hover:translate-x-0 duration-200"
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
