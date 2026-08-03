import { useState } from 'react'
import { FlaskConical, Trophy, Drama, Landmark, CalendarDays, X, ZoomIn } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'academics', label: 'Academics', icon: FlaskConical },
  { key: 'sports', label: 'Sports', icon: Trophy },
  { key: 'arts', label: 'Arts & Culture', icon: Drama },
  { key: 'campus', label: 'Campus', icon: Landmark },
  { key: 'events', label: 'Events & Life', icon: CalendarDays },
]

const photos = [
  { key: 'academics', title: 'Chemistry Laboratory Experiment', span: 'col-span-2', image: images.gallery.chemistry },
  { key: 'sports', title: 'Athletics Track Training', image: images.gallery.athletics },
  { key: 'arts', title: 'National Drama Rehearsal', image: images.gallery.drama },
  { key: 'campus', title: 'Kitui High Administration Building', span: 'col-span-2', image: images.gallery.admin },
  { key: 'events', title: 'Annual Prize Giving Ceremony', image: images.gallery.prizeGiving },
  { key: 'academics', title: 'Modern ICT & Coding Lab', image: images.gallery.computerLab },
  { key: 'sports', title: 'Inter-House Rugby & Football Match', span: 'col-span-2', image: images.gallery.football },
  { key: 'campus', title: 'Serene Campus Green Lawns', image: images.gallery.grounds },
  { key: 'arts', title: 'Fine Art & Creative Design Exhibition', image: images.gallery.art },
  { key: 'events', title: 'Career & University Mentorship Day', image: images.gallery.career },
  { key: 'campus', title: 'Boarding Houses & Living Wing', image: images.gallery.boarding },
  { key: 'academics', title: 'Advanced Physics Optics Practical', image: images.gallery.physics },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const filtered = active === 'all' ? photos : photos.filter((p) => p.key === active)

  return (
    <>
      <PageHero
        crumbs={['Home', 'Gallery']}
        eyebrow="Campus Life in Focus"
        title="School Gallery"
        subtitle="Explore life at Kitui High School through academic discovery, sporting glory and vibrant campus moments."
        bgImage={images.heroes.gallery}
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-cream rounded-2xl border border-parchment max-w-fit">
            {categories.map((c) => {
              const Icon = c.icon
              const isActive = active === c.key
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-sans font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-forest text-white shadow-sm'
                      : 'text-slate-600 hover:text-forest hover:bg-white'
                  }`}
                >
                  {Icon && <Icon size={15} />}
                  {c.label}
                </button>
              )
            })}
          </div>

          {/* Masonry-style grid with real photography */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {filtered.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                onClick={() => setLightbox(p)}
                className={`rounded-xl overflow-hidden relative group cursor-pointer ${
                  p.span || ''
                } shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 bg-forest-dark`}
              >
                {/* Real Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Zoom icon button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>

                {/* Title and Category Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold font-sans line-clamp-1">{p.title}</p>
                  <p className="text-gold text-[10px] uppercase font-bold tracking-wider font-sans mt-0.5">{p.key}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors border border-white/20 z-10"
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>
          <div
            className="max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden relative shadow-2xl bg-forest-dark flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-[300px] max-h-[70vh] bg-black">
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>
            <div className="p-5 bg-forest-dark border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-white font-serif font-bold text-xl">{lightbox.title}</p>
                <p className="text-gold text-xs font-sans uppercase tracking-wider mt-0.5">{lightbox.key}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="btn-outline !py-2 !px-4 text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <CtaBanner
        title="See it. Feel it. Belong."
        subtitle="Experience the Kitui High School difference in person by scheduling a campus visit."
        primaryLabel="Book a Visit"
        primaryTo="/contact"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
      />
    </>
  )
}
