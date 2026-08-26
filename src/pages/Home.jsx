import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown,
  Microscope, BookOpen, Sigma, Palette,
  Trophy, Users, ShieldCheck, Star,
  Calendar, MapPin, TrendingUp, BookMarked,
  Quote, ChevronLeft, ChevronRight as ChevronRightIcon, Music
} from 'lucide-react'
import { useState } from 'react'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'
import Gate3DHeroBg from '../components/Gate3DHeroBg.jsx'
import { AnimatedCountSpan } from '../components/Animatedcounter.jsx'
import Reveal from '../components/Reveal.jsx'
import CalendarModal from '../components/CalendarModal.jsx'

/* ─── Data ─── */
const stats = [
  { value: '1908', label: 'Year Founded', icon: Calendar },
  { value: 'National', label: 'School Category', icon: Star },
  { value: '1,200+', label: 'Students Enrolled', icon: Users, to: 1200, suffix: '+' },
  { value: '65+', label: 'Teaching Staff', icon: BookMarked, to: 65, suffix: '+' },
  { value: '9.718', label: 'KCSE Mean Grade 2025', icon: TrendingUp },
]

const highlights = [
  {
    tag: 'Academic Performance',
    num: '01',
    title: 'KCSE 2025 Results',
    body: 'Mean grade 9.718 with a 98.59% university transition, ranked 13th nationally.',
    items: ['354 Candidates', '17 scored A', '87 scored A-'],
    cta: 'View Full Results',
    to: '/academics#results',
    color: 'from-gold/10 to-gold/5',
    border: 'border-gold/30',
  },
  {
    tag: 'Beyond the Classroom',
    num: '02',
    title: 'Excellence in Action',
    body: 'Our students shine in sports, drama, science and innovation at national level.',
    items: ['Rugby: National Qualifiers', 'Hockey: Eastern Champions', 'Drama: County Champions'],
    cta: 'Explore Student Life',
    to: '/gallery',
    color: 'from-forest/5 to-forest/10',
    border: 'border-forest/20',
  },
  {
    tag: 'Innovation & STEM',
    num: '03',
    title: 'Creating Solutions, Shaping the Future',
    body: '3 projects advanced to nationals at Kenya Science & Engineering Fair 2025.',
    items: ['Kenya Science & Engineering Fair', 'Coding & Programming Club', 'Mathematics & Innovation Camps'],
    cta: 'Explore Innovation',
    to: '/academics',
    color: 'from-sky-50 to-sky-100/50',
    border: 'border-sky-200',
  },
  {
    tag: 'CBC Senior School',
    num: '04',
    title: 'Grades 10-12, Discover Your Path',
    body: 'Diverse pathways that help learners discover their strengths and prepare for the future.',
    items: ['STEM', 'Social Sciences', 'Arts & Sports Science'],
    cta: 'Explore About CBC',
    to: '/academics#departments',
    color: 'from-emerald-50 to-emerald-100/50',
    border: 'border-emerald-200',
  },
]

const news = [
  {
    tag: 'Sports',
    tagColor: 'bg-gold text-forest font-bold',
    title: 'Rugby Team Departs for National Stages',
    date: 'May 13, 2026',
    image: images.news.rugby,
  },
  {
    tag: 'Events',
    tagColor: 'bg-sky-600 text-white',
    title: 'Kenya Science and Engineering Fair',
    date: 'May 10, 2026',
    image: images.news.science,
  },
  {
    tag: 'Events',
    tagColor: 'bg-sky-600 text-white',
    title: 'Education CS Julius Migos Ogamba Opens 2025 KCSE Exams',
    date: 'Nov 6, 2025',
    image: images.news.ogamba,
  },
]

const campus = [
  { label: 'Administration Block', image: images.campus.adminTower },
  { label: 'Science Laboratories', image: images.academics.physicsLab },
  { label: 'School Library', image: images.academics.library },
  { label: 'Dormitories', image: images.campus.boarding },
  { label: 'Sports Grounds', image: images.campus.sportsField },
]

const communityVoices = [
  {
    type: 'Teacher',
    quote: 'At Kitui School, our commitment goes beyond academic excellence; we nurture discipline, intellectual curiosity, and moral integrity so that every young man realizes his highest potential.',
    name: 'Madam Mulonzi',
    role: 'Geography Teacher & HOD of Examination Department',
    image: '/madam-mulonzi.jpeg',
    badge: 'Faculty & HOD',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  {
    type: 'Student',
    quote: 'The environment here challenges you to lead with purpose. Between dedicated teachers who believe in us and a supportive brotherhood, you are shaped into someone ready to serve the nation.',
    name: 'Brian Kioko',
    role: 'School Captain · Class of 2025',
    image: images.testimonials.student,
    badge: 'Student Leader',
    badgeColor: 'bg-gold/15 text-forest border-gold/30',
  },
  {
    type: 'Parent',
    quote: 'Entrusting my son to Kitui School has been an extraordinary journey. The structured boarding, character mentorship, and top-tier academics provide total peace of mind for parents.',
    name: 'Mrs. Catherine Mwende',
    role: 'PTA Representative & Parent',
    image: images.testimonials.parent,
    badge: 'Parent Community',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
  },
]

/* ─── Sub-components ─── */
function NewsCard({ item }) {
  return (
    <div className="card overflow-hidden group cursor-pointer hover:border-gold/30">
      <div className="h-44 relative overflow-hidden bg-forest-dark">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
        <span
          className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm ${item.tagColor}`}
        >
          {item.tag}
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-serif font-semibold text-forest text-base leading-snug group-hover:text-gold transition-colors line-clamp-2">
          {item.title}
        </h4>
        <p className="text-xs text-slate-400 mt-2 font-sans">{item.date}</p>
        <button className="btn-ghost mt-3 text-xs">
          Read More <ArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-cover bg-center pointer-events-none brightness-[0.80]"
        style={{ backgroundImage: `url(${images.admin})` }}
      >
        {/* Global background tint: adjust /25 down for more transparency or up for darker */}
        <div className="absolute inset-0 bg-forest-dark/25" />
      </div>

      <div className="relative z-10">
        {/* ══ 1. HERO WITH GATE IMAGE BACKGROUND (SOLID / OPAQUE) ══ */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-forest-dark">
          {/* 3D Model Background: School Gate */}
          <Gate3DHeroBg />

          <div className="container-page relative z-10 py-24 md:py-32 drop-shadow-md pointer-events-none">
            <div className="pointer-events-auto max-w-[85%] md:max-w-full">
              <p className="section-eyebrow mb-4 animate-fade-up text-gold-light drop-shadow-sm">National Boys&rsquo; Boarding School · Since 1908</p>
              <div className="gold-bar mb-5 shadow-sm" />
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight max-w-3xl animate-fade-up-200 drop-shadow-lg">
                Building Character.{' '}
                <span className="text-gold-light">Inspiring Excellence.</span>
              </h1>
              <p className="text-white/95 mt-6 max-w-xl text-lg leading-relaxed animate-fade-up-400 font-sans drop-shadow-md">
                Since 1908, Kitui High School has been shaping generations of young men of integrity,
                discipline and service to the nation.
              </p>
              <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-600">
                <Link to="/about" className="btn-primary-lg">
                  Discover Our Story <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 2. STATS BAR (TRANSPARENT FLOATING SECTION OVER FIXED ADMIN BG) ══ */}
        <section className="relative z-10 border-t border-white/15 bg-transparent">
          {/* Subtle translucent bar scrim to make stat numbers pop over the floating background */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
          <div className="container-page relative z-10 py-0">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
              {stats.map(({ value, label, icon: Icon, to, suffix }, i) => {
                const inner = (
                  <>
                    <Icon size={18} className="text-gold/70 mb-1" />
                    <p className="stat-value">
                      {to !== undefined ? (
                        <AnimatedCountSpan to={to} suffix={suffix || ''} />
                      ) : (
                        value
                      )}
                    </p>
                    <p className="stat-label">{label}</p>
                  </>
                )
                return to !== undefined ? (
                  /* Animated stats (students, staff) — fade-in entrance */
                  <Reveal
                    key={label}
                    delay={i * 0.08}
                    className="flex flex-col items-center md:items-start gap-1 py-7 px-4 first:pl-0 last:pr-0"
                  >
                    {inner}
                  </Reveal>
                ) : (
                  /* Static constants (1908, National, 9.72) — always visible, no animation */
                  <div key={label} className="flex flex-col items-center md:items-start gap-1 py-7 px-4 first:pl-0 last:pr-0">
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
          {/* gold accent line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent relative z-10" />
        </section>

        {/* ══ 3. STORY / PRINCIPAL ══ */}
        <section className="section-pad bg-white">
          <div className="container-page grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Our Story */}
            <div className="lg:col-span-2">
              <p className="section-eyebrow mb-3">Our Story</p>
              <div className="gold-bar mb-4" />
              <h2 className="section-title mb-5">
                A Legacy of Excellence Since 1908
              </h2>
              <p className="section-sub mb-4">
                From humble beginnings as one of Kenya's earliest national schools, our journey
                has been defined by a commitment to academic excellence, discipline, character
                and service.
              </p>
              <p className="section-sub mb-6">
                For over eight decades, we have continued to build leaders who make a difference
                in their communities and the nation.
              </p>
              <Link to="/about" className="btn-ghost">
                Read Our History <ArrowRight size={16} />
              </Link>
            </div>

            {/* Center: School Tower Photo */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="aspect-[3/4] w-full max-w-[240px] mx-auto rounded-2xl overflow-hidden shadow-xl relative group">
                <img
                  src={images.campus.adminTower}
                  alt="Kitui High School"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Principal */}
            <div className="lg:col-span-2">
              <p className="section-eyebrow mb-3">From the Principal</p>
              <div className="gold-bar mb-4" />
              <h2 className="section-title mb-4">
                Welcome to Kitui High School
              </h2>
              <p className="section-sub mb-6">
                We nurture minds, shape character and inspire our students to serve with integrity
                and purpose. Our school is more than a place of learning; it is a community that
                builds tomorrow's leaders.
              </p>
              {/* Principal Signature & Photo */}
              <div className="flex items-center gap-4">
                <img
                  src={images.people.principal}
                  alt="Mr. Benard M. Mutua, Principal"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/40 shadow-md shrink-0"
                />
                <div>
                  <p className="font-serif font-semibold text-forest text-base">Mr. Bernard M. Mutua, Chief Principal</p>
                  <p className="text-xs text-slate-500 font-sans">Chief Principal, Kitui High School</p>
                  <Link to="/management#principal" className="btn-ghost text-xs mt-1 inline-flex">
                    Principal's Message <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. HIGHLIGHTS OF EXCELLENCE ══ */}
        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="text-center mb-12 flex items-center justify-center gap-4">
              <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
              <h2 className="font-serif font-bold text-forest text-xl uppercase tracking-widest">
                HIGHLIGHTS OF <span className="text-gold">EXCELLENCE</span>
              </h2>
              <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-card border border-slate-100 p-6 flex flex-col hover:shadow-card-hover transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">1. ACADEMIC PERFORMANCE</span>
                  <TrendingUp size={16} className="text-slate-300" />
                </div>
                <h3 className="font-serif font-bold text-forest text-lg mb-6 leading-tight">KCSE 2025 RESULTS</h3>

                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-4xl font-bold text-forest tracking-tighter">9.718</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Mean Grade</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-forest tracking-tighter">98.59<span className="text-2xl">%</span></p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">University Transition</p>
                  </div>
                </div>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">GRADE DISTRIBUTION</p>
                <table className="w-full text-xs text-left mb-6 font-sans">
                  <thead className="border-b border-slate-100 text-slate-500">
                    <tr>
                      <th className="py-1 font-semibold">Grade</th>
                      <th className="py-1 font-semibold text-right">Students</th>
                      <th className="py-1 font-semibold text-right">%</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-forest">
                    <tr><td className="py-1">A</td><td className="py-1 text-right font-medium">17</td><td className="py-1 text-right">4.8%</td></tr>
                    <tr><td className="py-1">A-</td><td className="py-1 text-right font-medium">87</td><td className="py-1 text-right">24.6%</td></tr>
                    <tr><td className="py-1">B+</td><td className="py-1 text-right font-medium">109</td><td className="py-1 text-right">30.8%</td></tr>
                    <tr><td className="py-1">B</td><td className="py-1 text-right font-medium">83</td><td className="py-1 text-right">23.4%</td></tr>
                    <tr><td className="py-1">B-</td><td className="py-1 text-right font-medium">41</td><td className="py-1 text-right">11.6%</td></tr>
                    <tr><td className="py-1">C+</td><td className="py-1 text-right font-medium">12</td><td className="py-1 text-right">3.4%</td></tr>
                    <tr><td className="py-1">C</td><td className="py-1 text-right font-medium">5</td><td className="py-1 text-right">1.4%</td></tr>
                  </tbody>
                  <tfoot className="border-t border-slate-200 font-bold text-forest">
                    <tr><td className="py-1.5">Total</td><td className="py-1.5 text-right">354</td><td className="py-1.5 text-right">100%</td></tr>
                  </tfoot>
                </table>

                <div className="mt-auto">
                  <Link to="/academics#results" className="bg-forest text-white text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-forest-dark transition-colors font-semibold">
                    VIEW FULL RESULTS <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-card border border-slate-100 p-6 flex flex-col hover:shadow-card-hover transition-all">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">2. BEYOND THE CLASSROOM</span>
                <h3 className="font-serif font-bold text-forest text-lg mb-4 leading-tight">Excellence in Action</h3>

                <div className="aspect-video w-full rounded-lg overflow-hidden mb-5 bg-slate-100 shrink-0">
                  <img src={images.news.rugby} alt="Rugby" className="w-full h-full object-cover" />
                </div>

                <ul className="space-y-4 mb-6 flex-1">
                  <li className="flex items-start gap-3">
                    <Trophy size={18} className="text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Rugby Team</p>
                      <p className="text-xs text-slate-500">Qualified for Nationals 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star size={18} className="text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Hockey Team</p>
                      <p className="text-xs text-slate-500">Eastern Region Champions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music size={18} className="text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Music Festival</p>
                      <p className="text-xs text-slate-500">National Finalists</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette size={18} className="text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Drama Festival</p>
                      <p className="text-xs text-slate-500">County Champions</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Link to="/gallery" className="bg-forest text-white text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-forest-dark transition-colors font-semibold">
                    EXPLORE STUDENT LIFE <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-card border border-slate-100 p-6 flex flex-col hover:shadow-card-hover transition-all">
                <span className="text-xs font-bold text-gold uppercase tracking-wide mb-2 block">3. INNOVATION & STEM</span>
                <h3 className="font-serif font-bold text-forest text-lg mb-4 leading-tight">Creating Solutions, Shaping the Future</h3>

                <div className="aspect-video w-full rounded-lg overflow-hidden mb-5 bg-slate-100 shrink-0">
                  <img src={images.news.science} alt="Science" className="w-full h-full object-cover" />
                </div>

                <ul className="space-y-4 mb-6 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 text-slate-400"><Microscope size={16} /></div>
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Kenya Science & Engineering Fair 2025</p>
                      <p className="text-xs text-slate-500 mt-0.5">3 Projects Advanced to Nationals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 text-slate-400"><Sigma size={16} /></div>
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Robotics Club</p>
                      <p className="text-xs text-slate-500 mt-0.5">Building, Coding, Innovating</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 text-slate-400"><BookOpen size={16} /></div>
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Programming Club</p>
                      <p className="text-xs text-slate-500 mt-0.5">Developing the next generation of tech leaders</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Link to="/academics" className="bg-gold text-forest text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-yellow-500 transition-colors font-bold">
                    EXPLORE INNOVATION <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow-card border border-slate-100 p-6 flex flex-col hover:shadow-card-hover transition-all">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">4. CBC SENIOR SCHOOL</span>
                <h3 className="font-serif font-bold text-forest text-lg mb-4 leading-tight">Grades 10 - 12<br />Discover Your Path</h3>

                <div className="aspect-video w-full rounded-lg overflow-hidden mb-5 bg-slate-100 shrink-0">
                  <img src={images.academics.studentsClass} alt="CBC" className="w-full h-full object-cover" />
                </div>

                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  We offer diverse pathways to help learners explore their strengths and prepare for their future.
                </p>

                <ul className="space-y-4 mb-6 flex-1">
                  <li className="flex items-start gap-3">
                    <Microscope size={18} className="text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">STEM</p>
                      <p className="text-[10px] text-slate-500">Science, Technology, Engineering, Mathematics</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users size={18} className="text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Social Sciences</p>
                      <p className="text-[10px] text-slate-500">Humanities, Business & Social Sciences</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette size={18} className="text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-forest leading-tight">Arts & Sports Science</p>
                      <p className="text-[10px] text-slate-500">Creative Arts & Physical Education</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Link to="/academics#departments" className="bg-forest text-white text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-forest-dark transition-colors font-semibold">
                    EXPLORE CBC PATHWAYS <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 5. LATEST NEWS & EVENTS ══ */}
        <section className="section-pad bg-slate-50">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8">

              {/* LATEST NEWS */}
              <div className="lg:col-span-8">
                <div className="flex items-end justify-between mb-6 border-b border-slate-200 pb-3">
                  <h2 className="font-sans font-bold text-slate-800 text-sm uppercase tracking-widest">LATEST NEWS & EVENTS</h2>
                  <Link to="/gallery" className="text-[10px] font-bold text-slate-500 hover:text-gold tracking-widest uppercase hidden sm:block">
                    VIEW ALL NEWS
                  </Link>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {news.slice(0, 3).map((n) => (
                    <NewsCard key={n.title} item={n} />
                  ))}
                </div>
              </div>

              {/* UPCOMING EVENTS */}
              <div className="lg:col-span-4">
                <div className="flex items-end justify-between mb-6 border-b border-slate-200 pb-3">
                  <h2 className="font-sans font-bold text-slate-800 text-sm uppercase tracking-widest">UPCOMING EVENTS</h2>
                  <button
                    onClick={() => setIsCalendarOpen(true)}
                    className="text-[10px] font-bold text-slate-500 hover:text-forest tracking-widest uppercase hidden sm:block transition-colors"
                  >
                    VIEW CALENDAR
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 shrink-0 rounded border border-slate-200 flex flex-col items-center justify-center bg-white shadow-sm">
                      <span className="text-lg font-bold text-forest leading-none">22</span>
                      <span className="text-[9px] font-bold text-slate-500 uppercase mt-0.5">May</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-sm leading-tight">End of Term Examinations</h4>
                      <p className="text-xs text-slate-500 mt-1">May 22 - June 4, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 shrink-0 rounded border border-slate-200 flex flex-col items-center justify-center bg-white shadow-sm">
                      <span className="text-lg font-bold text-forest leading-none">07</span>
                      <span className="text-[9px] font-bold text-slate-500 uppercase mt-0.5">Jun</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-sm leading-tight">AGM</h4>
                      <p className="text-xs text-slate-500 mt-1">June 7, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 shrink-0 rounded border border-slate-200 flex flex-col items-center justify-center bg-white shadow-sm">
                      <span className="text-lg font-bold text-forest leading-none">21</span>
                      <span className="text-[9px] font-bold text-slate-500 uppercase mt-0.5">Jun</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-sm leading-tight">Academic Clinic</h4>
                      <p className="text-xs text-slate-500 mt-1">June 21, 2025</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 6. CAMPUS GALLERY STRIP ══ */}
        <section className="section-pad-sm bg-cream">
          <div className="container-page">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="section-eyebrow mb-2">Our School</p>
                <div className="gold-bar mb-3" />
                <h2 className="section-title">A World-Class Learning Environment</h2>
              </div>
              <Link to="/gallery" className="btn-ghost hidden md:flex">
                View Gallery <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {campus.map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl overflow-hidden aspect-square group cursor-pointer relative shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <img
                    src={c.image}
                    alt={c.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-0 flex items-end p-3">
                    <p className="text-white text-xs font-sans font-medium leading-tight">
                      {c.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. WHY KHS (TRANSPARENT FLOATING SECTION OVER FIXED ADMIN BG) ══ */}
        <section className="section-pad relative z-10 overflow-hidden bg-transparent text-white">
          <div className="container-page relative z-10">
            <div className="text-center mb-12">
              <p className="section-eyebrow mb-3 text-gold-light">Why Choose Kitui High School</p>
              <div className="gold-bar mx-auto mb-4" />
              <h2 className="section-title-white">More Than a School. A Community.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, t: 'Holistic Development', b: 'Academic excellence balanced with character, service, sports and arts.' },
                { icon: Trophy, t: 'Award-Winning Performance', b: 'Consistent top performers nationally in KCSE, sports and co-curriculars.' },
                { icon: ShieldCheck, t: 'Safe Supervised Boarding', b: 'A home away from home: safe, structured and nurturing.' },
                { icon: Microscope, t: 'Modern Facilities', b: 'Well-equipped labs, ICT centre, library and sports facilities.' },
                { icon: BookOpen, t: 'Experienced Faculty', b: '72 dedicated teachers committed to every learner\'s growth.' },
                { icon: MapPin, t: 'Serene School Grounds', b: 'A peaceful, inspiring environment that fosters focus and learning.' },
              ].map(({ icon: Icon, t, b }) => (
                <div
                  key={t}
                  /* Transparent card: adjust bg-black/25 or border-white/20 for translucency */
                  className="bg-black/30 border border-white/20 rounded-xl p-6 hover:bg-black/40 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center mb-4">
                    <Icon className="text-gold" size={22} />
                  </div>
                  <h3 className="font-serif font-semibold text-white mb-2">{t}</h3>
                  <p className="text-white/85 text-sm leading-relaxed font-sans">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. VOICES OF OUR COMMUNITY (TEACHER, STUDENT, PARENT) ══ */}
        <section className="section-pad bg-white relative z-10">
          <div className="container-page">
            <div className="text-center mb-12">
              <p className="section-eyebrow mb-3">Community Perspectives</p>
              <div className="gold-bar mx-auto mb-4" />
              <h2 className="section-title">Voices from Our Community</h2>
              <p className="text-slate-500 mt-3 font-sans text-sm max-w-xl mx-auto">
                Hear firsthand from the teachers, students, and parents who make up the vibrant Kitui School family.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {communityVoices.map((voice) => (
                <div
                  key={voice.name}
                  className="bg-neutral-50 rounded-2xl p-7 border border-slate-100 flex flex-col justify-between hover:border-gold/40 hover:shadow-card-hover transition-all duration-300 relative group"
                >
                  <div className="absolute top-6 right-6">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${voice.badgeColor}`}>
                      {voice.badge}
                    </span>
                  </div>

                  <div>
                    <Quote className="text-gold/40 mb-4" size={36} />
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-6">
                      &ldquo;{voice.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200/70">
                    <img
                      src={voice.image}
                      alt={voice.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 shadow-sm shrink-0"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-forest text-base leading-snug">
                        {voice.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-sans mt-0.5 leading-tight">
                        {voice.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 9. CTA (BEGIN YOUR JOURNEY - TRANSPARENT FLOATING SECTION) ══ */}
        <CtaBanner
          title="Begin Your Journey at Kitui High School"
          subtitle="Discover our rich heritage, meet our community and experience excellence in education."
          primaryLabel="Book a Visit"
          primaryTo="/contact"
          secondaryLabel="Explore Academics"
          secondaryTo="/academics"
          transparent
          dark
          className="bg-forest-dark/20  border-t border-white/10"
        />
      </div>

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </>
  )
}
