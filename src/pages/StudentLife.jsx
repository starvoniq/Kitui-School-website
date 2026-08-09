import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Heart, Sparkles, Feather, UserCheck, Trophy } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { sports, clubs, faithGroups, IMAGES } from '../data/studentLifeData.js'

// ─── Reusable preview card for Sports ───────────────────────────────────────
function SportCard({ item }) {
  return (
    <Link
      to={`/student-life/sports/${item.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-forest/10">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Sport name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-1"
            style={{ backgroundColor: item.accentColor }}
          >
            {item.tag}
          </span>
          <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
            {item.name}
          </h3>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
          <div>
            <span className="text-slate-400">Patron: </span>
            <span className="font-semibold text-forest">{item.patron}</span>
          </div>
          <span
            className="flex items-center gap-1 font-semibold transition-colors"
            style={{ color: item.accentColor }}
          >
            View <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── Reusable preview card for Clubs ────────────────────────────────────────
function ClubCard({ item }) {
  return (
    <Link
      to={`/student-life/clubs/${item.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-forest/10">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-1"
            style={{ backgroundColor: item.accentColor }}
          >
            {item.tag}
          </span>
          <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
            {item.name}
          </h3>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
          <div>
            <span className="text-slate-400">In charge: </span>
            <span className="font-semibold text-forest">{item.patronShort || item.patron}</span>
          </div>
          <span
            className="flex items-center gap-1 font-semibold transition-colors"
            style={{ color: item.accentColor }}
          >
            View <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── Faith card ──────────────────────────────────────────────────────────────
function FaithCard({ item }) {
  const iconMap = { ycs: Sparkles, cu: Heart, muslim: BookOpen }
  const Icon = iconMap[item.id] || Heart

  return (
    <Link
      to={`/student-life/faith/${item.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-forest/10">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* Icon badge top-right */}
        <div
          className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ backgroundColor: item.accentColor }}
        >
          <Icon size={18} />
        </div>
        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-1"
            style={{ backgroundColor: item.accentColor }}
          >
            {item.tag}
          </span>
          <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
            {item.name}
          </h3>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs italic font-semibold mb-2" style={{ color: item.accentColor }}>
          {item.tagline}
        </p>
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
          <div>
            <span className="text-slate-400">Patron: </span>
            <span className="font-semibold text-forest">{item.patron}</span>
          </div>
          <span
            className="flex items-center gap-1 font-semibold transition-colors"
            style={{ color: item.accentColor }}
          >
            View <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── Section heading ─────────────────────────────────────────────────────────
function SectionHead({ eyebrow, title, subtitle, viewAllTo, viewAllLabel }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="section-title mt-1">{title}</h2>
        {subtitle && (
          <p className="text-slate-500 text-sm mt-2 max-w-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold border-b-2 border-forest hover:border-gold transition-all duration-200 pb-0.5 shrink-0"
        >
          {viewAllLabel || 'View All'} <ArrowRight size={15} />
        </Link>
      )}
    </div>
  )
}

// ─── Main Hub Page ────────────────────────────────────────────────────────────
export default function StudentLife() {
  const featuredSports = sports.slice(0, 4)
  const featuredClubs  = clubs.slice(0, 6)

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-forest-dark text-white overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
        {/* Background mosaic */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <div className="relative overflow-hidden col-span-2">
            <img
              src={IMAGES.sports}
              alt="Sports at Kitui School"
              className="w-full h-full object-cover object-center brightness-50"
            />
          </div>
          <div className="flex flex-col gap-0">
            <div className="relative overflow-hidden flex-1">
              <img
                src={IMAGES.drama}
                alt="Drama at Kitui School"
                className="w-full h-full object-cover object-center brightness-50"
              />
            </div>
            <div className="relative overflow-hidden flex-1">
              <img
                src={IMAGES.prizeGiving}
                alt="Kitui School achievements"
                className="w-full h-full object-cover object-center brightness-50"
              />
            </div>
          </div>
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 to-forest-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/30" />

        {/* Gold accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold z-10" />

        {/* Hero content */}
        <div className="container-page relative z-10 py-24 md:py-32">
          <p className="section-eyebrow text-gold-light mb-3 animate-fade-up">
            Beyond The Classroom
          </p>
          <div className="gold-bar mb-5" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight max-w-3xl mb-5 animate-fade-up-200 drop-shadow-lg">
            Life at <span className="text-gold">Kitui School</span>
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl leading-relaxed mb-8 animate-fade-up-400">
            Where champions are forged on the pitch, artists find their voice on stage,
            and leaders are shaped through purpose-driven clubs, spiritual devotion, and
            a relentless pursuit of excellence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-600">
            <Link to="/student-life/sports" className="btn-primary">
              Explore Sports <ArrowRight size={16} />
            </Link>
            <Link to="/student-life/clubs" className="btn-outline">
              Discover Clubs
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-10">
          <svg viewBox="0 0 1440 24" fill="white" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,24 C360,0 1080,0 1440,24 L1440,24 L0,24 Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: '15+', label: 'Clubs & Societies' },
            { value: '9+',  label: 'Sports Disciplines' },
            { value: '3',   label: 'Faith Denominations' },
            { value: '100%', label: 'Student Participation' },
          ].map(({ value, label }) => (
            <div key={label} className="py-4">
              <p className="text-3xl md:text-4xl font-serif font-bold text-forest">{value}</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── BEST ME CLUB SPOTLIGHT ───────────────────────────────────────── */}
      <Reveal>
        <section className="container-page py-14">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-dark via-forest to-forest-light text-white p-8 md:p-12 shadow-xl border border-gold/20">
            {/* Decorative */}
            <div className="absolute -right-12 -top-12 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/25 text-gold border border-gold/40 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles size={12} /> Feature Spotlight
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 leading-tight">
                  Best Me Club — <span className="text-gold">"Wings to Fly"</span>
                </h2>
                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base max-w-xl">
                  Supporting students to develop personal growth, self-awareness, and positive behaviour.
                  Through regular interactive sessions, members become the best versions of themselves
                  — academically, socially, and emotionally.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: 'Character', desc: 'Goal setting, decision-making & discipline' },
                    { title: 'Mentorship', desc: 'Peer support, motivation & self-improvement' },
                    { title: 'Compiled by', desc: 'Alex Kasau — The Campbell Talks' },
                  ].map(({ title, desc }) => (
                    <div key={title} className="bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <p className="font-bold text-gold text-sm mb-1">{title}</p>
                      <p className="text-white/70 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/15 text-center w-full max-w-xs">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Feather size={32} className="text-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2">Shaping Leaders</h3>
                  <p className="text-xs text-white/70 leading-relaxed italic">
                    "Creating an environment where students encourage one another to reach their full potential."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── SPORTS PREVIEW ──────────────────────────────────────────────── */}
      <section className="bg-cream/60 py-14">
        <div className="container-page">
          <Reveal>
            <SectionHead
              eyebrow="Athletic Excellence"
              title="Sports & Games"
              subtitle="Nine disciplines competing across county, regional, and national stages. Find your sport."
              viewAllTo="/student-life/sports"
              viewAllLabel="View All Sports"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredSports.map((s, i) => (
              <Reveal key={s.id}>
                <SportCard item={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUBS PREVIEW ───────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="container-page">
          <Reveal>
            <SectionHead
              eyebrow="Academic & Co-Curricular"
              title="Clubs & Societies"
              subtitle="From the newsroom to the science lab — 15+ clubs where students discover their passions and lead."
              viewAllTo="/student-life/clubs"
              viewAllLabel="View All Clubs"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredClubs.map((c) => (
              <Reveal key={c.id}>
                <ClubCard item={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAITH & SPIRITUAL ───────────────────────────────────────────── */}
      <section className="bg-forest-dark py-14">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="section-eyebrow text-gold-light">Spiritual Foundation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-1 font-serif">
                  Faith & Spiritual Life
                </h2>
                <p className="text-white/60 text-sm mt-2 max-w-lg leading-relaxed">
                  Three vibrant faith communities that ground Kitui School students in purpose, character, and devotion.
                </p>
              </div>
              <Link
                to="/student-life/faith"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light border-b-2 border-gold hover:border-gold-light transition-all duration-200 pb-0.5 shrink-0"
              >
                View All <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faithGroups.map((f) => (
              <Reveal key={f.id}>
                <FaithCard item={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP STRIP ────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-12 border-y border-slate-100 bg-cream/40">
          <div className="container-page">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  icon: UserCheck,
                  title: 'Peer Counseling',
                  desc: 'Led by Mrs. David. Confidential student support for emotional health, conflict resolution, and academic stress.',
                },
                {
                  icon: Trophy,
                  title: "President's Award",
                  desc: 'Bronze, Silver & Gold award tracks under Mr. Kyalo Reuben. Building self-reliance and leadership.',
                },
                {
                  icon: Sparkles,
                  title: 'Best Me Club',
                  desc: 'Goal setting, character, and personal growth — empowering students to become their best selves.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 bg-white rounded-xl shadow-card border border-slate-100 hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold text-forest text-lg mb-2">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      <CtaBanner
        title="Ready to Get Involved?"
        subtitle="Every student at Kitui School has a place — on the pitch, on stage, in the lab, or in the community. Find yours today."
        primaryLabel="Contact Admissions"
        primaryTo="/contact"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
      />
    </div>
  )
}
