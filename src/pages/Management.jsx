import { HeartHandshake, Users, ShieldCheck, Target, ArrowRight, Clock, Phone, Mail, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

/* ─── Data ─── */
const values = [
  { icon: HeartHandshake, label: 'Integrity', sub: 'Doing what is right always' },
  { icon: Users, label: 'Service', sub: 'Putting others before self' },
  { icon: ShieldCheck, label: 'Accountability', sub: 'Taking responsibility for our actions' },
  { icon: Target, label: 'Teamwork', sub: 'Together we achieve more' },
]

const deputies = [
  {
    name: 'Mr. Charles Nzau',
    title: 'Deputy Principal (Academic Affairs)',
    desc: 'Oversees academic programs, teaching and learning, national examinations and curriculum development.',
    image: images.people.deputyAcademics,
  },
  {
    name: 'Mr. James Kyalo',
    title: 'Deputy Principal (Discipline & Administration)',
    desc: 'In charge of student discipline, welfare, boarding management and overall student character conduct.',
    image: images.people.deputyAdmin,
  },
]

const deptHeads = [
  { name: 'Mr. John Mwangi', subject: 'Sciences', image: images.people.deptSciences },
  { name: 'Mrs. Jane Wambui', subject: 'Mathematics', image: images.people.deptMath },
  { name: 'Mr. Martin Mutua', subject: 'Languages', image: images.people.deptLanguages },
  { name: 'Mrs. Mercy Nzilani', subject: 'Humanities', image: images.people.deptHumanities },
  { name: 'Mr. Joseph Mula', subject: 'Technical & Applied', image: images.people.deptTechnical },
  { name: 'Mrs. Beatrice Nduku', subject: 'Guidance & Counselling', image: images.people.deptGuidance },
]

const board = [
  { name: 'Mr. David Musyoka', role: 'Chairperson, BOM', image: images.people.bomChair },
  { name: 'Mrs. Lucy Muli', role: 'Vice Chairperson, BOM', image: images.people.bomVice },
  { name: 'Mr. Bernard M. Mutua', role: 'Secretary / Chief Principal', image: images.people.principal },
  { name: 'Eng. Ziporah Kilonzo', role: 'Treasurer, BOM', image: images.people.bomTreas },
]

const adminOffice = [
  { label: 'Bursar', desc: 'Manages school finances, fee structures and procurement' },
  { label: 'Admissions & Records', desc: 'Student enrollment, academic transcripts and certification' },
  { label: 'ICT Office', desc: 'Technology infrastructure, network and digital portals' },
  { label: 'Reception & Helpdesk', desc: 'Visitor management, parent inquiries and campus tours' },
]

export default function Management() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'Leadership & Administration']}
        eyebrow="School Leadership"
        title="Leadership & Governance"
        subtitle="Leading with integrity, service and excellence to create an inspiring environment where every learner thrives."
        bgImage={images.heroes.management}
      />

      {/* ══ LEADERSHIP PHILOSOPHY ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
            <img
              src={images.campus.adminTower}
              alt="Kitui High School Administration Building"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
          </div>

          <div>
            <p className="section-eyebrow mb-3">Our Leadership Philosophy</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-5">Guided by Values, Driven by Purpose</h2>
            <p className="section-sub mb-8">
              Leadership at Kitui High School is founded on integrity, accountability, service
              and teamwork. We are committed to nurturing disciplined learners, empowering staff
              and working with parents and the community to achieve our vision of academic
              excellence and holistic development.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {values.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">{label}</p>
                    <p className="text-xs text-slate-500 font-sans">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRINCIPAL ══ */}
      <section id="principal" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Meet Our Principal</p>
            <div className="gold-bar mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto card p-8 md:p-10 hover:border-gold/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center text-center">
                <img
                  src={images.people.principal}
                  alt="Mr. Bernard M. Mutua, Chief Principal"
                  className="w-36 h-36 rounded-full object-cover border-4 border-gold/30 shadow-lg"
                />
                <h3 className="font-serif font-bold text-forest text-xl mt-5">
                  Mr. Bernard M. Mutua, OGW
                </h3>
                <p className="text-gold font-semibold text-sm mt-1 font-sans">Chief Principal</p>
                <p className="text-xs text-slate-400 font-sans">Kitui High School</p>
              </div>

              <div>
                <p className="text-gold text-5xl font-serif mb-2">&ldquo;</p>
                <p className="text-slate-600 leading-relaxed mb-5 italic">
                  Welcome to Kitui High School. Our unwavering commitment is to nurture disciplined,
                  responsible and academically excellent young men who will emerge as ethical leaders and
                  transformative changemakers in Kenya and across the globe.
                </p>
                <div className="font-serif italic text-forest text-lg mb-4 border-b border-forest/20 pb-2 w-fit">
                  Bernard M. Mutua
                </div>
                <p className="text-xs text-slate-400 font-sans">Chief Principal & Secretary to BOM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEPUTY PRINCIPALS ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Deputy Principals</p>
            <div className="gold-bar mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deputies.map((d) => (
              <div key={d.name} className="card p-6 hover:border-gold/30">
                <div className="flex gap-4 items-start">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gold/30 shadow shrink-0"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-forest text-lg">{d.name}</h4>
                    <p className="text-gold text-xs font-semibold font-sans mt-0.5 mb-2">{d.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ORG CHART + DEPT HEADS ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          {/* Org chart */}
          <div>
            <p className="section-eyebrow mb-3">School Leadership Structure</p>
            <div className="gold-bar mb-6" />
            <div className="flex flex-col items-center gap-3 font-sans">
              <div className="bg-forest text-white rounded-lg px-5 py-2.5 text-center text-xs font-semibold shadow">
                Board of Management (BOM)
              </div>
              <div className="w-0.5 h-5 bg-gold/40" />
              <div className="bg-gold text-forest rounded-lg px-6 py-2.5 text-center text-sm font-bold shadow">
                Chief Principal
              </div>
              <div className="w-0.5 h-5 bg-gold/40" />
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-forest text-white rounded-lg px-3 py-2 text-center text-xs shadow">
                    Deputy Principal (Academics)
                  </div>
                  <div className="w-0.5 h-3 bg-gold/40" />
                  <div className="bg-forest/80 text-white rounded-lg px-3 py-1.5 text-center text-[11px]">
                    Senior Master
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-forest text-white rounded-lg px-3 py-2 text-center text-xs shadow">
                    Deputy Principal (Discipline)
                  </div>
                  <div className="w-0.5 h-3 bg-gold/40" />
                  <div className="bg-forest/80 text-white rounded-lg px-3 py-1.5 text-center text-[11px]">
                    Boarding Master
                  </div>
                </div>
              </div>
              <div className="w-0.5 h-4 bg-gold/40 mt-1" />
              <div className="flex gap-3">
                <div className="bg-forest text-white rounded-lg px-3 py-2 text-center text-xs">
                  Heads of Departments
                </div>
                <div className="bg-forest text-white rounded-lg px-3 py-2 text-center text-xs">
                  Teaching Faculty
                </div>
              </div>
              <div className="w-0.5 h-4 bg-gold/40" />
              <div className="bg-gold text-forest rounded-lg px-5 py-2 text-center text-xs font-bold shadow">
                Student Body & Prefects Council
              </div>
            </div>
          </div>

          {/* Dept Heads */}
          <div>
            <p className="section-eyebrow mb-3">Heads of Academic Departments</p>
            <div className="gold-bar mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {deptHeads.map((h) => (
                <div key={h.name} className="card p-4 text-center hover:border-gold/30">
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-gold/30 shadow"
                  />
                  <p className="font-semibold text-forest text-sm leading-tight">{h.name}</p>
                  <p className="text-[11px] text-gold font-sans font-medium mt-1">{h.subject}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOARD OF MANAGEMENT ══ */}
      <section id="board" className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="section-eyebrow mb-3">Board of Management</p>
            <div className="gold-bar mb-4" />
            <p className="section-sub mb-6">
              The Board provides strategic governance and ensures the school is managed in the best
              interest of learners, staff and the wider community.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {board.map((b) => (
                <div key={b.name} className="card p-4 text-center hover:border-gold/30">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-gold/20 shadow"
                  />
                  <p className="font-semibold text-forest text-sm">{b.name}</p>
                  <p className="text-[11px] text-slate-500 font-sans mt-0.5">{b.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Office */}
          <div>
            <p className="section-eyebrow mb-3">Administration Office</p>
            <div className="gold-bar mb-4" />
            <div className="space-y-3 mb-8">
              {adminOffice.map((a) => (
                <div key={a.label} className="flex gap-4 items-start bg-cream rounded-xl p-4 border border-parchment">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-forest text-sm">{a.label}</p>
                    <p className="text-xs text-slate-500 font-sans">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Office hours */}
            <div className="card p-5 hover:border-gold/30">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-gold" size={18} />
                <p className="font-semibold text-forest">Office Hours</p>
              </div>
              <p className="text-sm text-slate-600 font-sans mb-1">Monday – Friday: 8:00 AM – 4:30 PM</p>
              <div className="h-px bg-slate-100 my-3" />
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-sans">
                  <Phone className="text-gold shrink-0" size={14} />
                  +254 720 302 123 / +254 722 323 456
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-sans">
                  <Mail className="text-gold shrink-0" size={14} />
                  info@kituihigh.ac.ke
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 font-sans">
                  <MapPin className="text-gold shrink-0 mt-0.5" size={14} />
                  Kitui – Machakos Road, P.O. Box 71, Kitui, Kenya
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUOTE BANNER ══ */}
      <section className="bg-forest-dark py-16 text-center relative overflow-hidden">
        <div className="container-page relative z-10 max-w-3xl mx-auto">
          <p className="text-gold text-5xl font-serif mb-2">&ldquo;</p>
          <h2 className="text-white font-serif text-2xl md:text-3xl font-semibold mb-2">
            Leadership is not about position, it is about service, sacrifice and impacting lives.
          </h2>
          <p className="text-gold/70 text-sm font-sans mt-3 font-semibold tracking-wider uppercase">Learn To Serve — Since 1938</p>
        </div>
      </section>

      <CtaBanner
        title="Connect With Our Leadership Team"
        subtitle="We're here to partner with you in your child's education journey."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Book a Visit"
        secondaryTo="/contact"
      />
    </>
  )
}
