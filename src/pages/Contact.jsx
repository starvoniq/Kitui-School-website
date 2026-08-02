import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Car } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const infoCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Kitui – Machakos Road', '(Approximately 3km from Kitui Town Centre)', 'P.O. Box 1 – 90200, Kitui, Kenya'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+254 700 123 456', '+254 721 654 321', 'For general inquiries and information.'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@khs.ac.ke', 'admissions@khs.ac.ke', "We'll respond to your email as soon as possible."],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Fri: 8:00am – 5:00pm', 'Saturday: 9:00am – 1:00pm', 'Sunday: Closed'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire this up to an actual backend / email service.
    console.log('Contact form submitted:', form)
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd love to hear from you."
        subtitle="Whether you have a question about admissions, academics, fees, or anything else, our team is here to help."
      />

      <section className="container-page py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoCards.map(({ icon: Icon, title, lines }) => (
          <div key={title} className="border rounded-md p-6">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center mb-4">
              <Icon className="text-gold" size={18} />
            </div>
            <h3 className="font-semibold text-navy mb-2">{title}</h3>
            {lines.map((l) => (
              <p key={l} className="text-sm text-slate-600">{l}</p>
            ))}
          </div>
        ))}
      </section>

      <section className="container-page pb-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold text-navy mb-1">Send Us a Message</h2>
          <p className="text-sm text-slate-500 mb-6">
            Fill out the form below and we will get back to you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-sm px-4 py-3 text-sm w-full"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border rounded-sm px-4 py-3 text-sm w-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-sm px-4 py-3 text-sm w-full"
              />
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="border rounded-sm px-4 py-3 text-sm w-full text-slate-500"
              >
                <option value="">Select a subject</option>
                <option value="admissions">Admissions</option>
                <option value="academics">Academics</option>
                <option value="fees">Fees</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="border rounded-sm px-4 py-3 text-sm w-full"
            />
            <label className="flex items-center gap-2 text-sm text-slate-500">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              I agree to the <a href="#" className="text-navy underline">privacy policy</a>
            </label>
            <button type="submit" className="bg-navy text-white px-6 py-3 rounded-sm font-semibold inline-flex items-center gap-2 hover:bg-navy-light transition-colors">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold text-navy mb-4">Find Us</h2>
          <div className="bg-slate-100 rounded-md aspect-video flex items-center justify-center text-slate-400 text-sm mb-6">
            Map embed placeholder (Google Maps / Mapbox)
          </div>
          <h3 className="font-semibold text-navy mb-3">Quick Directions</h3>
          <div className="flex items-start gap-3 mb-2 text-sm text-slate-600">
            <MapPin className="shrink-0 mt-0.5" size={16} />
            <p>We are located along the Kitui – Machakos Road, approximately 3km from Kitui town centre.</p>
          </div>
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <Car className="shrink-0 mt-0.5" size={16} />
            <p>Secure parking is available within the school compound.</p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="We Are Here to Help"
        subtitle="Our team is ready to assist you with any information you need about Kitui High School."
        primaryLabel="Book a Visit"
        secondaryLabel="View Admissions"
      />
    </>
  )
}
