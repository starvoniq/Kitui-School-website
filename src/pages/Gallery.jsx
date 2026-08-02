import { useState } from 'react'
import { FlaskConical, Trophy, Drama, Landmark, CalendarDays } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'academics', label: 'Academics', icon: FlaskConical },
  { key: 'sports', label: 'Sports', icon: Trophy },
  { key: 'arts', label: 'Arts & Culture', icon: Drama },
  { key: 'campus', label: 'Campus', icon: Landmark },
  { key: 'events', label: 'Events', icon: CalendarDays },
]

const photos = [
  { key: 'academics', title: 'Chemistry Practical' },
  { key: 'sports', title: 'Athletics Team' },
  { key: 'arts', title: 'Drama Rehearsal' },
  { key: 'campus', title: 'Academic Block' },
  { key: 'events', title: 'Prize Giving Day' },
  { key: 'academics', title: 'Computer Lab' },
  { key: 'sports', title: 'Football Match' },
  { key: 'campus', title: 'Campus Grounds' },
  { key: 'arts', title: 'Art Exhibition' },
  { key: 'events', title: 'Career Week' },
  { key: 'campus', title: 'Boarding Wing' },
  { key: 'academics', title: 'Physics Practical' },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? photos : photos.filter((p) => p.key === active)

  return (
    <>
      <PageHero
        eyebrow="Moments that inspire. Memories that last."
        title="Gallery"
        subtitle="Explore life at Kitui High School through academic, co-curricular and campus moments."
      />

      <section className="container-page py-10">
        <div className="flex flex-wrap gap-3 bg-slate-50 p-3 rounded-md mb-10">
          {categories.map((c) => {
            const Icon = c.icon
            const isActive = active === c.key
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                  isActive ? 'bg-navy text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {Icon && <Icon size={16} />}
                {c.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <div key={`${p.title}-${i}`} className="rounded-md overflow-hidden bg-slate-100">
              <div className="aspect-[4/3] flex items-center justify-center text-slate-400 text-xs">
                Photo placeholder
              </div>
              <p className="bg-navy text-white text-xs font-semibold uppercase tracking-wide px-3 py-2">
                {p.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border border-navy text-navy px-6 py-3 rounded-sm font-semibold hover:bg-navy hover:text-white transition-colors">
            View More Photos
          </button>
        </div>
      </section>

      <CtaBanner
        title="See it. Feel it. Belong."
        subtitle="Experience the Kitui High School difference."
        primaryLabel="Book a Visit"
        secondaryLabel="Apply Now"
      />
    </>
  )
}
