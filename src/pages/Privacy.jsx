import { Link } from 'react-router-dom'
import { Mail, Phone, ShieldCheck, Lock, Eye, Database } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const sections = [
  {
    icon: Eye,
    title: '1. Information We Collect',
    body: 'We may collect personal information you voluntarily provide to us, including your name, email address, phone number and the content of messages you send through our contact form. We may also collect non-personal information such as browser type, pages visited and device information to help us improve our website.',
  },
  {
    icon: Database,
    title: '2. How We Use Your Information',
    body: 'The information we collect is used to respond to your inquiries, process applications and admissions, provide information about school activities and events, and improve our website and services. We do not sell your personal information to third parties.',
  },
  {
    icon: Lock,
    title: '3. Data Protection & Security',
    body: 'We take reasonable measures to protect your personal information from unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    icon: ShieldCheck,
    title: '4. Sharing of Information',
    body: 'We may share your information with authorised school personnel, and with service providers who assist us in operating our website and delivering services to you, in compliance with applicable laws. We may also disclose information where required by law.',
  },
  {
    icon: Eye,
    title: '5. Your Rights',
    body: 'You have the right to access, correct or request deletion of your personal information held by the school. You may also withdraw your consent to receive communications from us at any time by contacting our administration office.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'Privacy Policy']}
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle="We are committed to protecting the privacy and personal information of our students, parents, staff and website visitors."
      />

      {/* ══ POLICY SECTIONS ══ */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-4xl">
          <p className="section-sub mb-8">
            This Privacy Policy explains how Kitui High School collects, uses and
            protects the personal information you provide when using our website.
            By accessing our website, you consent to the practices described in
            this policy.
          </p>
          <div className="space-y-5">
            {sections.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6 md:p-7 hover:border-gold/30">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon className="text-gold" size={20} />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-forest text-lg mb-2">{title}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-8">
            <p className="section-eyebrow mb-3">Questions?</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Contact Us About Your Privacy</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              If you have any questions about this Privacy Policy or how we handle
              your personal information, please reach out to our administration office.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card p-6 text-center hover:border-gold/30">
              <Phone className="text-gold mx-auto mb-3" size={24} />
              <p className="font-serif font-bold text-forest mb-1">Call Us</p>
              <p className="text-sm text-slate-600 font-sans">+254 723 636 536</p>
            </div>
            <div className="card p-6 text-center hover:border-gold/30">
              <Mail className="text-gold mx-auto mb-3" size={24} />
              <p className="font-serif font-bold text-forest mb-1">Email Us</p>
              <p className="text-sm text-slate-600 font-sans">info@kituihighschool.sc.ke</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Still Have Questions?"
        subtitle="Our team is happy to answer any questions about our policies and practices."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Explore Our Website"
        secondaryTo="/about"
      />
    </>
  )
}
