import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Car, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

const infoCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    color: 'bg-forest/10 text-forest border-forest/20',
    iconBg: 'bg-forest',
    lines: ['Kitui – Machakos Road', '~3km from Kitui Town Centre', 'P.O. Box 71, Kitui, Kenya'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    color: 'bg-gold/10 text-forest border-gold/30',
    iconBg: 'bg-gold',
    lines: ['+254 720 202 123', '+254 722 123 456', 'Mon – Fri, 8:00 AM – 5:00 PM'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    color: 'bg-sky-50 text-forest border-sky-200',
    iconBg: 'bg-sky-600',
    lines: ['info@kituihigh.ac.ke', 'admissions@kituihigh.ac.ke', 'We respond within 24 hours.'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    color: 'bg-purple-50 text-forest border-purple-200',
    iconBg: 'bg-purple-700',
    lines: ['Mon – Fri: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM', 'Sunday: Closed'],
  },
]

const subjects = ['Inquiries', 'Academics & CBC', 'Student Welfare & Boarding', 'Fees & Bursary', 'Alumni Relations', 'Other']

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '', agree: false,
  })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        crumbs={['Home', 'Contact']}
        eyebrow="Get in Touch"
        title="We'd Love to Hear From You"
        subtitle="Whether you have an inquiry about academics, student life, campus visits or fee guidelines. Our administration team is here to assist."
        bgImage={images.heroes.contact}
      />

      {/* ══ INFO CARDS ══ */}
      <section className="section-pad-sm bg-white">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infoCards.map(({ icon: Icon, title, lines, color, iconBg }) => (
            <div
              key={title}
              className={`rounded-2xl border p-6 ${color} hover:shadow-card transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                <Icon className="text-white" size={20} />
              </div>
              <h3 className="font-serif font-bold text-forest text-lg mb-3">{title}</h3>
              {lines.map((l) => (
                <p key={l} className="text-sm text-slate-600 font-sans leading-relaxed">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══ FORM + MAP ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100">
            <h2 className="font-serif font-bold text-forest text-2xl mb-1">Send Us a Message</h2>
            <p className="text-sm text-slate-500 mb-7 font-sans">
              Fill out the form and we'll get back to you promptly.
            </p>

            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-gold" size={28} />
                </div>
                <h3 className="font-serif font-bold text-forest text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm font-sans">
                  Thank you for reaching out. Our administration team will respond within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', subject:'', message:'', agree:false }) }}
                  className="btn-ghost mt-6"
                >
                  Send Another Message <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-input" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+254 700 000 000" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className="form-input">
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s.toLowerCase()}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your inquiry or message here..."
                    rows={5}
                    className="form-input resize-none"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-slate-500 font-sans cursor-pointer">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    className="mt-0.5 accent-forest"
                    required
                  />
                  <span>
                    I agree to the school's communication policy and consent to being contacted.
                  </span>
                </label>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={!form.agree}
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Map + directions */}
          <div>
            <h2 className="font-serif font-bold text-forest text-2xl mb-5">Find Us</h2>

            {/* Map banner */}
            <div className="rounded-2xl overflow-hidden aspect-[16/10] relative mb-6 shadow-card border border-parchment">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="text-forest mx-auto mb-2" size={36} />
                  <p className="text-forest font-serif font-bold text-lg">Kitui High School</p>
                  <p className="text-forest/70 text-xs font-sans mt-1">Kitui – Machakos Road, Kitui County, Kenya</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs mt-4 inline-flex shadow-sm"
                  >
                    Open in Google Maps <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            <h3 className="font-serif font-semibold text-forest text-lg mb-4">Quick Directions</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="text-forest" size={16} />
                </div>
                <p className="text-sm text-slate-600 font-sans">
                  Located along the Kitui – Machakos Road, approximately 3 km from Kitui Town Centre.
                  Look for the prominent Kitui High School main entrance gate.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Car className="text-gold" size={16} />
                </div>
                <p className="text-sm text-slate-600 font-sans">
                  Secure visitor parking is available within the school compound.
                  Please check in with security at the main gate and report to the Administration Block reception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="We Are Here to Assist You"
        subtitle="Our administration team is ready to assist you with any questions about Kitui High School."
        primaryLabel="Book a Visit"
        primaryTo="/contact"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
      />
    </>
  )
}
