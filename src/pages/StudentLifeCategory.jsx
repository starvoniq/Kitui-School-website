import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, BookOpen, Heart, Sparkles, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { getCategoryItems, categoryMeta, IMAGES } from '../data/studentLifeData.js'

// ─── Sport / Club detail preview card ───────────────────────────────────────
function TypewriterClubName({ name }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setVisibleCharacters(name.length)
      return undefined
    }

    let characterTimer
    let repeatTimer

    const typeName = () => {
      let nextCharacter = 0
      setVisibleCharacters(0)

      characterTimer = window.setInterval(() => {
        nextCharacter += 1
        setVisibleCharacters(nextCharacter)

        if (nextCharacter >= name.length) {
          window.clearInterval(characterTimer)
          repeatTimer = window.setTimeout(typeName, 10000)
        }
      }, 70)
    }

    typeName()

    return () => {
      window.clearInterval(characterTimer)
      window.clearTimeout(repeatTimer)
    }
  }, [name])

  return <>{name.slice(0, visibleCharacters)}<span aria-hidden="true" className="animate-pulse">|</span></>
}

function ActivityCard({ item, isClub }) {
  const linkTo = `/student-life/${item.category}/${item.slug}`

  return (
    <Link
      to={linkTo}
      className={`group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col ${
        isClub ? 'bg-[#3d3d3d] border border-white/10' : 'bg-white'
      }`}
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
            {isClub ? <TypewriterClubName name={item.fullName || item.name} /> : item.fullName || item.name}
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
            <p className={`text-xs italic font-serif leading-relaxed line-clamp-3 ${
              isClub ? 'bg-gradient-to-r from-forest-dark via-forest-light to-forest-dark bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer' : 'text-forest-dark'
            }`}>
              "{item.poem}"
            </p>
          </div>
        )}

        {/* Club quote */}
        {item.quote && !item.poem && (
          <div className={isClub ? 'max-h-0 overflow-hidden opacity-0 -translate-y-1 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100 group-hover:translate-y-0 group-focus:max-h-32 group-focus:opacity-100 group-focus:translate-y-0' : ''}>
            <div className={`mb-3 p-3 rounded-lg border ${isClub ? 'bg-white/10 border-white/15' : 'bg-gold/10 border-gold/20'}`}>
              <p className={`text-xs italic font-serif leading-relaxed line-clamp-3 ${
                isClub ? 'font-sans text-white/90' : 'text-forest-dark'
              }`}>
                {item.quote}
              </p>
            </div>
          </div>
        )}

        <p className={`text-sm leading-relaxed mb-4 flex-1 line-clamp-3 ${
          isClub
            ? 'font-sans font-medium text-white/90 line-clamp-2 transition-all duration-300 group-hover:line-clamp-none group-focus:line-clamp-none'
            : 'text-slate-600'
        }`}>
          {item.description}
        </p>

        {/* Highlights preview */}
        {item.highlights && item.highlights.length > 0 && (
          <ul className={`space-y-1 mb-4 ${
            isClub ? 'max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus:max-h-24 group-focus:opacity-100' : ''
          }`}>
            {item.highlights.slice(0, 2).map((h, i) => (
              <li key={i} className={`flex items-start gap-2 text-xs ${isClub ? 'text-white/75' : 'text-slate-500'}`}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.accentColor }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div
          className={`flex items-center justify-between text-xs border-t pt-3 mt-auto ${isClub ? 'border-white/15' : 'border-slate-100'}`}
        >
          <div>
            <span className={isClub ? 'text-white/60' : 'text-slate-400'}>Patron / In Charge: </span>
            <span className={isClub ? 'font-semibold text-white' : 'font-semibold text-forest'}>
              {item.patronShort || item.patron}
            </span>
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-bold transition-all group-hover:gap-2 ${isClub ? 'bg-white/15 text-white group-hover:bg-white/25' : 'bg-slate-300 text-slate-800 group-hover:bg-slate-400'}`}
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
              <ActivityCard item={item} isClub={category === 'clubs'} />
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
