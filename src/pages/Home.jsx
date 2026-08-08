import { Link } from 'react-router-dom'
import {
  ArrowRight, Play, ChevronDown,
  Microscope, BookOpen, Sigma, Palette,
  Trophy, Users, ShieldCheck, Star,
  Calendar, MapPin, TrendingUp, BookMarked,
  Quote, ChevronLeft, ChevronRight as ChevronRightIcon,
  Award, Sparkles, CheckCircle2,
} from 'lucide-react'
import { useState } from 'react'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'
import Gate3DHeroBg from '../components/Gate3DHeroBg.jsx'
import HighlightCard from '../components/HighlightCard.jsx'

/* ─── Data ─── */
const stats = [
  { value: '1908', label: 'Year Founded', icon: Calendar },
  { value: 'National', label: 'School Category', icon: Star },
  { value: '2,300+', label: 'Students Enrolled', icon: Users },
  { value: '120+', label: 'Teaching Staff', icon: BookMarked },
  { value: '9.72', label: 'KCSE Mean Grade 2025', icon: TrendingUp },
]

const highlights = [
  {
    id: 'results',
    tag: 'Academic Excellence',
    icon: Award,
    title: 'KCSE 2025 Performance',
    mainStat: '9.72',
    gradeBadge: 'B+ Mean',
    rankBadge: 'Ranked #13 Nationally',
    pills: [
      { label: 'Univ. Entry', val: '98.59%' },
      { label: 'A / A- Grades', val: '104 Students' },
    ],
    items: ['354 Total Candidates', '17 Plain A | 87 A- Grades'],
    cta: 'View KCSE Breakdowns',
    to: '/academics#results',
    accentColor: 'from-gold/20 via-gold/10 to-transparent',
    borderColor: 'border-gold/40 hover:border-gold',
    badgeColor: 'bg-gold/15 text-forest border-gold/30',
    iconColor: 'bg-gold/15 text-gold',
  },
  {
    id: 'sports',
    tag: 'Co-Curricular & Talent',
    icon: Trophy,
    title: 'Sports & Creative Arts',
    mainStat: 'National',
    gradeBadge: 'Stage Finalists',
    rankBadge: 'Eastern Region Champs',
    pills: [
      { label: 'Rugby 7s', val: 'Nationals' },
      { label: 'Hockey & Drama', val: 'Champions' },
    ],
    items: ['Rugby, Hockey & Athletics', 'Drama & Music Festivals'],
    cta: 'Explore Student Life',
    to: '/gallery',
    accentColor: 'from-forest/15 via-forest/5 to-transparent',
    borderColor: 'border-forest/30 hover:border-forest',
    badgeColor: 'bg-forest/10 text-forest border-forest/20',
    iconColor: 'bg-forest/10 text-forest',
  },
  {
    id: 'stem',
    tag: 'Innovation & STEM',
    icon: Microscope,
    title: 'STEM & Science Fairs',
    mainStat: '3 Projects',
    gradeBadge: 'At Nationals',
    rankBadge: 'KSEF 2025 Qualifiers',
    pills: [
      { label: 'Coding Lab', val: 'Software Dev' },
      { label: 'Science Congress', val: 'Finalists' },
    ],
    items: ['Kenya Science & Eng. Fair', 'Robotics & Math Camps'],
    cta: 'Explore STEM',
    to: '/academics',
    accentColor: 'from-sky-500/15 via-sky-500/5 to-transparent',
    borderColor: 'border-sky-300 hover:border-sky-500',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    iconColor: 'bg-sky-100 text-sky-600',
  },
  {
    id: 'cbc',
    tag: 'Senior School Pathways',
    icon: BookOpen,
    title: 'CBC Grades 10–12',
    mainStat: '3 Pathways',
    gradeBadge: 'Career Ready',
    rankBadge: 'Personalized Streams',
    pills: [
      { label: 'STEM & Tech', val: 'Engineering / Med' },
      { label: 'Social & Arts', val: 'Biz & Sports' },
    ],
    items: ['STEM • Humanities • Arts', 'Structured Mentorship'],
    cta: 'Explore Pathways',
    to: '/academics#departments',
    accentColor: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
    borderColor: 'border-emerald-300 hover:border-emerald-500',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    iconColor: 'bg-emerald-100 text-emerald-700',
  },
]

const news = [
  {
    tag: 'Academics',
    tagColor: 'bg-forest text-white',
    title: 'KCSE Mock Examinations Timetable Released',
    date: 'May 15, 2026',
    image: images.news.exam,
  },
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
    title: 'Science Congress 2026 Success',
    date: 'May 10, 2026',
    image: images.news.science,
  },
  {
    tag: 'Events',
    tagColor: 'bg-sky-600 text-white',
    title: 'Education CS Julius Migos Ogamba Opens 2025 KCSE Exams',
    date: 'Nov 6, 2025',
    image: images.news.exam,
  },
]

const campus = [
  { label: 'Administration Block', image: images.campus.adminTower },
  { label: 'Science Laboratories', image: images.academics.physicsLab },
  { label: 'School Library', image: images.academics.library },
  { label: 'Boarding Houses', image: images.campus.boarding },
  { label: 'School Chapel', image: images.campus.chapel },
  { label: 'Sports Grounds', image: images.campus.sportsField },
]

const testimonials = [
  {
    quote:
      'Kitui High School gave me the discipline, knowledge and confidence to excel at university and in life. Truly a school of excellence.',
    name: 'John K.',
    role: 'Alumnus, Class of 2019',
    image: images.testimonials.alumni,
  },
  {
    quote:
      'A safe, nurturing environment where our son is challenged academically and growing in character. We are proud parents.',
    name: 'Mary W.',
    role: 'Parent',
    image: images.testimonials.parent,
  },
  {
    quote:
      'The teachers here believe in us and push us to become the best we can be. The spirit of "Learn to Serve" is real.',
    name: 'Brian M.',
    role: 'Form 3 Student',
    image: images.testimonials.student,
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

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 border border-slate-100 flex flex-col hover:border-gold/30 transition-all duration-300">
      <Quote className="text-gold/40 mb-3 shrink-0" size={32} />
      <p className="text-slate-600 text-sm leading-relaxed italic flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
        <img
          src={t.image}
          alt={t.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-gold/30 shrink-0"
        />
        <div>
          <p className="font-semibold text-forest text-sm">{t.name}</p>
          <p className="text-xs text-slate-400 font-sans">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function Home() {
  const [tIdx, setTIdx] = useState(0)
  const prev = () => setTIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setTIdx((i) => (i + 1) % testimonials.length)

  return (
    <>
      {/* ══ FIXED FULL-PAGE BACKGROUND (ADMIN BUILDING IMAGE) ══ */}
      {/* This fixed background stays static while all sections float/scroll over it */}
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

          {/* Gold accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold z-10" />

          <div className="container-page relative z-10 py-24 md:py-32 drop-shadow-md">
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
              <Link to="/3d-tour" className="btn-outline flex items-center gap-2 !px-7 !py-4 backdrop-blur-sm bg-white/10 hover:bg-white/20">
                <Play size={16} className="fill-white" /> Explore Campus in 3D
              </Link>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
              <p className="text-[10px] uppercase tracking-widest font-sans">Scroll to explore</p>
              <ChevronDown size={16} />
            </div>
          </div>
        </section>

        {/* ══ 2. STATS BAR (TRANSPARENT FLOATING SECTION OVER FIXED ADMIN BG) ══ */}
        <section className="relative z-10 border-t border-white/15 bg-transparent">
          {/* Subtle translucent bar scrim to make stat numbers pop over the floating background */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
          <div className="container-page relative z-10 py-0">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center md:items-start gap-1 py-7 px-4 first:pl-0 last:pr-0">
                  <Icon size={18} className="text-gold/70 mb-1" />
                  <p className="stat-value">{value}</p>
                  <p className="stat-label">{label}</p>
                </div>
              ))}
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
                  alt="Kitui High School Campus"
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

        {/* ══ 4. HIGHLIGHTS OF EXCELLENCE (50% OPACITY OVER FIXED BG) ══ */}
        <section className="section-pad bg-cream/80">
          <div className="container-page">
            <div className="text-center mb-10">
              <p className="section-eyebrow mb-3">Highlights of Excellence</p>
              <div className="gold-bar mx-auto mb-4" />
              <h2 className="section-title">Where Achievement Meets Purpose</h2>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {highlights.map((h) => (
                <HighlightCard key={h.id} h={h} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. LATEST NEWS ══ */}
        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-eyebrow mb-2">Latest News & Events</p>
                <div className="gold-bar mb-3" />
                <h2 className="section-title">What's Happening at KHS</h2>
              </div>
              <Link to="/gallery" className="btn-ghost hidden md:flex">
                View All News <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {news.map((n) => (
                <NewsCard key={n.title} item={n} />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link to="/gallery" className="btn-outline-dark">View All News</Link>
            </div>
          </div>
        </section>

        {/* ══ 6. CAMPUS GALLERY STRIP ══ */}
        <section className="section-pad-sm bg-cream">
          <div className="container-page">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="section-eyebrow mb-2">Our Campus</p>
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
                { icon: BookOpen, t: 'Experienced Faculty', b: '120+ dedicated teachers committed to every learner\'s growth.' },
                { icon: MapPin, t: 'Serene Campus', b: 'A peaceful, inspiring environment that fosters focus and learning.' },
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

        {/* ══ 8. TESTIMONIALS (SOLID BG-WHITE) ══ */}
        <section className="section-pad bg-white relative z-10">
          <div className="container-page">
            <div className="text-center mb-12">
              <p className="section-eyebrow mb-3">What Our Community Says</p>
              <div className="gold-bar mx-auto mb-4" />
              <h2 className="section-title">Voices from Our Community</h2>
            </div>
            {/* Desktop: 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
            {/* Mobile: 1 card with arrows */}
            <div className="md:hidden">
              <TestimonialCard t={testimonials[tIdx]} />
              <div className="flex justify-center gap-3 mt-6">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:border-forest hover:bg-forest hover:text-white transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:border-forest hover:bg-forest hover:text-white transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRightIcon size={18} />
                </button>
              </div>
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
        />
      </div>
    </>
  )
}
