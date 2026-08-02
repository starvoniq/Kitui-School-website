import { Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-gold" size={28} strokeWidth={1.5} />
            <div>
              <p className="text-white font-serif font-semibold">Kitui High School</p>
              <p className="text-gold text-xs italic">Learn to Serve</p>
            </div>
          </div>
          <p className="text-sm">
            A legacy of character. A future of excellence. We nurture disciplined,
            responsible and compassionate leaders.
          </p>
          <div className="flex gap-4 mt-5">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
            <Youtube size={18} />
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          items={['Home', 'About Us', 'Academics', 'Management', 'Gallery', 'Contact Us']}
        />
        <FooterCol
          title="Resources"
          items={['Admissions', 'News & Events', 'Downloads', 'Calendar', 'School Policies']}
        />

        <div>
          <h4 className="text-gold uppercase text-sm font-semibold tracking-wide mb-4">
            Contact Us
          </h4>
          <p className="text-sm mb-2">Kitui – Machakos Road, Kitui<br />P.O. Box 1 – 90200, Kitui, Kenya</p>
          <p className="text-sm mb-2">+254 700 123 456<br />+254 721 654 321</p>
          <p className="text-sm">info@khs.ac.ke</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Kitui High School. All Rights Reserved.
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-gold uppercase text-sm font-semibold tracking-wide mb-4">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
