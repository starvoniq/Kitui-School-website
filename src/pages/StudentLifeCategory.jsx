import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, BookOpen, Heart, Sparkles, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { getCategoryItems, categoryMeta, IMAGES } from '../data/studentLifeData.js'

// ─── Sport / Club detail preview card ───────────────────────────────────────
function ActivityCard({ item }) {
  const linkTo = `/student-life/${item.category}/${item.slug}`

  return (
    <Link
      to={linkTo}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        {/* Accent badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: item.accentColor }}
          >
            {item.tag}
          </span>
        </div>

        {/* Name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
            {item.fullName || item.name}
          </h3>
          {item.tagline && (
            <p className="text-white/80 text-xs mt-0.5 italic drop-shadow">{item.tagline}</p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Poem quote (sports) */}
        {item.poem && (
          <div className="mb-3 p-3 rounded-lg bg-cream border border-gold/25">
            <p className="text-xs italic text-forest-dark font-serif leading-relaxed line-clamp-3">
              "{item.poem}"
            </p>
          </div>
        )}

        {/* Club quote */}
        {item.quote && !item.poem && (
          <div className="mb-3 p-3 rounded-lg bg-gold/10 border border-gold/20">
            <p className="text-xs italic text-forest-dark font-serif leading-relaxed line-clamp-3">
              {item.quote}
            </p>
          </div>
        )}

        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1 line-clamp-3">
          {item.description}
        </p>

        {/* Highlights preview */}
        {item.highlights && item.highlights.length > 0 && (
          <ul className="space-y-1 mb-4">
            {item.highlights.slice(0, 2).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.accentColor }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div
          className="flex items-center justify-between text-xs border-t border-slate-100 pt-3 mt-auto"
        >
          <div>
            <span className="text-slate-400">Patron / In Charge: </span>
            <span className="font-semibold text-forest">
              {item.patronShort || item.patron}
            </span>
          </div>
          <span
            className="flex items-center gap-1 font-bold group-hover:gap-2 transition-all"
            style={{ color: item.accentColor }}
          >
            Learn More <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── Category Listing Page ───────────────────────────────────────────────────
export default function StudentLifeCategory() {
  const { category } = useParams()
  const navigate = useNavigate()

  const meta = categoryMeta[category]
  if (!meta) {
    navigate('/student-life')
    return null
  }

  const items = getCategoryItems(category)

  const tabIcons = {
    sports: Trophy,
    clubs: BookOpen,
    faith: Heart,
  }
  const categories = [
    { id: 'sports', label: 'Sports & Games' },
    { id: 'clubs',  label: 'Clubs & Societies' },
    { id: 'faith',  label: 'Faith & Spiritual' },
  ]

  return (
    <div className="bg-cream/40 min-h-screen pb-16">
      {/* Hero */}
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.label}
        subtitle={meta.subtitle}
        bgImage={meta.image}
        crumbs={['Home', 'Student Life', meta.label]}
      />

      {/* Category switcher tabs */}
      <div className="bg-white border-b border-slate-100 sticky top-[68px] z-30 shadow-sm">
        <div className="container-page">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-none">
            <Link
              to="/student-life"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-forest px-3 py-2 rounded transition-colors whitespace-nowrap"
            >
              <ArrowLeft size={14} /> Student Life Hub
            </Link>
            <div className="w-px h-5 bg-slate-200 mx-1" />
            {categories.map((cat) => {
              const Icon = tabIcons[cat.id]
              const isActive = cat.id === category
              return (
                <Link
                  key={cat.id}
                  to={`/student-life/${cat.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-forest text-white shadow'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-forest'
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Listing */}
      <div className="container-page pt-10">
        <Reveal>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-500">
              Showing <span className="font-bold text-forest">{items.length}</span>{' '}
              {category === 'sports' ? 'sports disciplines' : category === 'clubs' ? 'clubs & societies' : 'faith communities'}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Reveal key={item.id}>
              <ActivityCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14">
        <CtaBanner
          title="Discover More of Student Life"
          subtitle="Sports, clubs, faith, leadership — there is something for every Kitui School student."
          primaryLabel="Back to Student Life"
          primaryTo="/student-life"
          secondaryLabel="Contact Admissions"
          secondaryTo="/contact"
        />
      </div>
    </div>
  )
}
