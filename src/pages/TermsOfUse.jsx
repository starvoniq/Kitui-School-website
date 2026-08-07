import { Link } from 'react-router-dom'
import { Scale, BookOpen, Lock, AlertTriangle, UserCheck, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const sections = [
  {
    icon: Scale,
    title: '1. Acceptance of Terms',
    body: 'By accessing and using the Kitui High School website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.',
  },
  {
    icon: BookOpen,
    title: '2. Use of Website Content',
    body: 'All content on this website, including text, images, logos and other materials, is the property of Kitui High School unless otherwise stated. You may view and use this content for personal, non-commercial purposes only. Reproduction, distribution or commercial use of our content without prior written permission is prohibited.',
  },
  {
    icon: UserCheck,
    title: '3. User Responsibilities',
    body: 'You agree to use this website responsibly and lawfully. You must not use the website in any way that may damage, disable or impair the website, or interfere with other users\' access to it. You also agree not to attempt unauthorised access to any part of the website or its systems.',
  },
  {
    icon: AlertTriangle,
    title: '4. Limitation of Liability',
    body: 'While we strive to keep the information on this website accurate and up to date, Kitui High School makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability or availability of the information provided. Your use of the website is at your own risk.',
  },
  {
    icon: Lock,
    title: '5. Links to External Websites',
    body: 'Our website may contain links to external websites that are not operated by Kitui High School. We have no control over, and assume no responsibility for, the content, privacy policies or practices of any third-party websites.',
  },
  {
    icon: Scale,
    title: '6. Changes to These Terms',
    body: 'We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the revised terms.',
  },
]

export default function TermsOfUse() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'Terms of Use']}
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Please read these terms carefully before using the Kitui High School website. Your access to and use of this website is subject to the terms below."
      />

      {/* ══ TERMS SECTIONS ══ */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-4xl">
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

          <div className="mt-10 bg-cream rounded-xl border border-parchment p-6 md:p-8">
            <h3 className="font-serif font-bold text-forest text-lg mb-2">Contacting Us</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans mb-4">
              If you have any questions about these Terms of Use, please contact our
              administration office. Read our{' '}
              <Link to="/privacy-policy" className="text-forest font-semibold underline underline-offset-2 hover:text-gold transition-colors">
                Privacy Policy
              </Link>{' '}
              to understand how we handle your personal information.
            </p>
            <Link to="/contact" className="btn-ghost text-sm inline-flex">
              Contact Our Team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Learn More About Our School"
        subtitle="Explore our rich heritage, academic programmes and vibrant campus life."
        primaryLabel="About Us"
        primaryTo="/about"
        secondaryLabel="Book a Visit"
        secondaryTo="/contact"
      />
    </>
  )
}
