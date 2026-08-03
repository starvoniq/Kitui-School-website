import { Link } from 'react-router-dom'
import {
  FlaskConical, Pi, Globe, BookText, Wrench, HeartHandshake,
  CheckCircle, ArrowRight, BookOpen, Microscope, Monitor,
  Star, Users, TrendingUp, Trophy,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

/* ─── Data ─── */
const values = [
  { icon: Star, label: 'Excellence', desc: 'Upholding the highest standards in all we do.' },
  { icon: HeartHandshake, label: 'Integrity', desc: 'Grounding ourselves in honesty and respect.' },
  { icon: TrendingUp, label: 'Innovation', desc: 'Embracing creativity and problem solving.' },
  { icon: Users, label: 'Service', desc: 'Preparing students to serve self and humanity.' },
]

const streams = [
  {
    icon: FlaskConical,
    label: 'STEM',
    full: 'Science, Technology, Engineering & Mathematics',
    desc: 'For learners passionate about innovation, problem solving and shaping the future through science and technology.',
    color: 'from-sky-50 to-sky-100',
    border: 'border-sky-200',
  },
  {
    icon: Globe,
    label: 'Social Sciences',
    full: 'Humanities, Business & Social Sciences',
    desc: 'For learners interested in people, society, leadership, governance, business and making a difference in communities.',
    color: 'from-amber-50 to-amber-100',
    border: 'border-amber-200',
  },
  {
    icon: BookText,
    label: 'Arts & Sports Science',
    full: 'Creative Arts & Physical Education',
    desc: 'For learners with a creative heart and a passion for sports, performing arts and physical education.',
    color: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
  },
]

const departments = [
  { icon: FlaskConical, name: 'Sciences', subs: ['Physics', 'Chemistry', 'Biology'] },
  { icon: Pi, name: 'Mathematics', subs: ['Pure Mathematics', 'Applied Mathematics'] },
  { icon: Globe, name: 'Languages', subs: ['English', 'Kiswahili', 'French', 'German'] },
  { icon: BookOpen, name: 'Humanities', subs: ['History', 'Geography', 'CRE', 'Business Studies'] },
  { icon: Wrench, name: 'Technical & Applied', subs: ['Agriculture', 'Computer Studies', 'Home Science', 'Technical Drawing'] },
  { icon: HeartHandshake, name: 'Guidance & Counselling', subs: ['Supporting learners in academic, personal and career development.'] },
]

const facilities = [
  { label: 'Physics Laboratory', image: images.academics.physicsLab },
  { label: 'Chemistry Laboratory', image: images.academics.chemistryLab },
  { label: 'Biology Laboratory', image: images.academics.biologyLab },
  { label: 'Computer Laboratory', image: images.academics.computerLab },
  { label: 'School Library', image: images.academics.library },
  { label: 'Smart Classrooms', image: images.academics.smartClass },
  { label: 'ICT Centre', image: images.academics.ictCentre },
  { label: 'Auditorium & Arts', image: images.academics.auditorium },
]

const teachingMethods = [
  'Practical hands-on laboratory lessons',
  'ICT integration & digital smartboards',
  'Group discussions & peer collaboration',
  'Continuous assessment & constructive feedback',
  'Research, science projects & innovation fairs',
]

const support = [
  { icon: HeartHandshake, t: 'Guidance & Counselling', b: 'Emotional, academic and moral support for every learner.' },
  { icon: BookOpen, t: 'Library & Research Hub', b: 'Over 20,000 physical volumes and access to e-resources.' },
  { icon: Monitor, t: 'Digital Resource Centre', b: 'High-speed internet access for research and past paper revision.' },
  { icon: Users, t: 'Academic Mentorship', b: 'One-on-one coaching by experienced teachers for target achievement.' },
  { icon: Microscope, t: 'Career Guidance', b: 'Helping learners discover their career paths and university choices.' },
  { icon: Star, t: 'Remedial Programs', b: 'Personalized attention to help learners conquer difficult subjects.' },
]

/* ─── Grade distribution ─── */
const grades = [
  { grade: 'A', count: 40, pct: '16.1%' },
  { grade: 'A-', count: 20, pct: '7.8%' },
  { grade: 'B+', count: 80, pct: '32.3%' },
  { grade: 'B', count: 70, pct: '28.2%' },
  { grade: 'C+ & Below', count: 10, pct: '4.0%' },
]

export default function Academics() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'Academics']}
        eyebrow="Academic Pathways & Excellence"
        title="Academics at Kitui High School"
        subtitle="Empowering learners through quality teaching, practical experiences and a proven culture of academic excellence."
        bgImage={images.heroes.academics}
      />

      {/* ══ PHILOSOPHY ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-eyebrow mb-3">Our Academic Philosophy</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-5">Nurturing Minds. Building Futures.</h2>
            <p className="section-sub mb-5">
              At Kitui High School, we believe that every learner has the potential to excel. We
              provide a supportive environment that promotes curiosity, critical thinking, creativity
              and character formation to shape responsible young men who are ready to serve both the
              nation and the world.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon className="text-gold" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">{label}</p>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Photo */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
            <img
              src={images.academics.studentsClass}
              alt="Students in Class"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ══ CBC STREAMS ══ */}
      <section id="departments" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">CBC Senior School (Grades 10 – 12)</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Diverse Pathways for Every Learner</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-sans text-sm">
              Offering diverse content pathways to help learners discover their strengths and prepare for the future.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {streams.map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center mb-5 shadow-sm border border-forest/10">
                  <s.icon className="text-forest" size={26} />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-1 font-sans">{s.full}</p>
                <h3 className="font-serif font-bold text-forest text-xl mb-3">{s.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{s.desc}</p>
                <Link to="/contact" className="btn-ghost text-sm inline-flex">
                  Inquire About Pathway <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ACADEMIC DEPARTMENTS ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Academic Departments</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Our Departments</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              Our departments are dedicated to delivering quality education and nurturing excellence in every learner.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((d) => (
              <div key={d.name} className="card p-5 text-center hover:border-gold/30">
                <div className="w-12 h-12 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center mx-auto mb-3">
                  <d.icon className="text-forest" size={22} />
                </div>
                <p className="font-serif font-semibold text-forest text-sm mb-2">{d.name}</p>
                <ul className="space-y-0.5">
                  {d.subs.map((s) => (
                    <li key={s} className="text-[11px] text-slate-500 font-sans">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEARNING FACILITIES ══ */}
      <section id="facilities" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Learning Facilities</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">State-of-the-Art Facilities</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              Well-equipped facilities that support practical learning and academic growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((f) => (
              <div
                key={f.label}
                className="rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer relative shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={f.image}
                  alt={f.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <p className="text-white text-xs font-semibold font-sans">{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEACHING & SUPPORT ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          {/* Teaching & Learning */}
          <div>
            <p className="section-eyebrow mb-3">Teaching & Learning</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-5">Modern Teaching Methods</h2>
            <p className="section-sub mb-6">
              We use modern teaching methods that inspire curiosity, creativity and independent
              thinking at every level.
            </p>
            <ul className="space-y-3 mb-6">
              {teachingMethods.map((m) => (
                <li key={m} className="flex items-center gap-3">
                  <CheckCircle className="text-gold shrink-0" size={18} />
                  <span className="text-sm text-slate-600 font-sans">{m}</span>
                </li>
              ))}
            </ul>
            {/* Photo */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] relative group shadow-md">
              <img
                src={images.academics.teacherClass}
                alt="Teacher with students in classroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Academic Support */}
          <div>
            <p className="section-eyebrow mb-3">Academic Support</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-5">We Go Beyond Teaching</h2>
            <div className="grid grid-cols-2 gap-4">
              {support.map(({ icon: Icon, t, b }) => (
                <div key={t} className="card p-4 hover:border-gold/30">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-3">
                    <Icon className="text-gold" size={18} />
                  </div>
                  <h4 className="font-semibold text-forest text-sm mb-1">{t}</h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KCSE RESULTS ══ */}
      <section id="results" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Academic Excellence</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">KCSE 2025 Results</h2>
            <p className="text-slate-500 mt-3 font-sans text-sm">
              Our consistent performance is a result of hard work, discipline and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Big numbers */}
            <div className="card p-8 text-center hover:border-gold/30">
              <p className="section-eyebrow mb-2">KCSE 2025 Results</p>
              <p className="text-7xl font-serif font-bold text-forest">9.80</p>
              <p className="text-slate-400 text-sm font-sans mt-1">Mean Grade</p>
              <div className="h-px bg-slate-100 my-4" />
              <p className="text-4xl font-serif font-bold text-gold">99.6%</p>
              <p className="text-slate-400 text-sm font-sans mt-1">University Transition</p>
              <div className="h-px bg-slate-100 my-4" />
              <p className="text-3xl font-serif font-bold text-forest">260</p>
              <p className="text-slate-400 text-sm font-sans mt-1">Candidates</p>
            </div>

            {/* Grade distribution */}
            <div className="card p-6 hover:border-gold/30">
              <h3 className="font-serif font-bold text-forest text-lg mb-5">Grade Distribution</h3>
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-slate-400 border-b border-slate-100">
                    <th className="text-left pb-2">Grade</th>
                    <th className="text-center pb-2">Students</th>
                    <th className="text-right pb-2">%</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((g) => (
                    <tr key={g.grade} className="border-b border-slate-50">
                      <td className="py-2 font-semibold text-forest">{g.grade}</td>
                      <td className="py-2 text-center text-slate-500">{g.count}</td>
                      <td className="py-2 text-right">
                        <span className="text-gold font-semibold">{g.pct}</span>
                      </td>
                    </tr>
                  ))}
                  <tr className="font-semibold">
                    <td className="pt-3 text-forest">Total</td>
                    <td className="pt-3 text-center text-forest">260</td>
                    <td className="pt-3 text-right text-forest">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Top performers / quote */}
            <div className="flex flex-col gap-4">
              <div className="card p-6 hover:border-gold/30">
                <h4 className="font-serif font-bold text-forest mb-3">Top Subject Performers</h4>
                <ul className="space-y-2">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-600 font-sans">
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      {s} — Outstanding results
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6 bg-forest-gradient text-white hover:border-gold/30">
                <p className="text-gold text-3xl font-serif mb-2">&ldquo;</p>
                <p className="text-white/80 text-sm italic leading-relaxed">
                  Excellence is our tradition. The future is our destination.
                </p>
                <p className="text-gold/70 text-xs mt-3 font-sans">— Kitui High School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="See Where Learning Comes to Life"
        subtitle="Take a virtual tour of our facilities and experience our environment of excellence."
        primaryLabel="Explore Our Campus in 3D"
        primaryTo="/3d-tour"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  )
}
