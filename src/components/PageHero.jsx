import { ChevronRight } from 'lucide-react'

/**
 * PageHero — full-width header section for inner pages.
 *
 * Props:
 *  - eyebrow      {string}   Small uppercase label above title
 *  - title        {string}   Large serif H1
 *  - subtitle     {string}   Body text below title
 *  - crumbs       {string[]} Breadcrumb segments e.g. ['Home', 'About']
 *  - bgImage      {string}   Background image URL or import
 *  - bgClass      {string}   Optional Tailwind bg class (fallback: forest gradient)
 *  - compact      {boolean}  Shorter padding variant
 */
export default function PageHero({ eyebrow, title, subtitle, crumbs, bgImage, bgClass, compact }) {
  return (
    <section
      className={`relative overflow-hidden ${
        bgClass || 'bg-forest-gradient'
      } text-white min-h-[260px] flex items-center`}
    >
      {/* Background image if provided */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center brightness-[0.85]"
          />
          {/* Delicate transparent overlay keeping the background image bright and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
      )}

      {/* Gold accent bar — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold z-10" />

      <div className={`container-page relative z-10 w-full ${compact ? 'py-14 md:py-18' : 'py-20 md:py-28'} drop-shadow-md`}>
        {/* Breadcrumbs */}
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5">
            {crumbs.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={13} className="text-white/40" />}
                <span
                  className={`text-xs font-sans drop-shadow-sm ${
                    i === crumbs.length - 1
                      ? 'text-gold font-semibold'
                      : 'text-white/80 hover:text-white transition-colors cursor-pointer'
                  }`}
                >
                  {crumb}
                </span>
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="section-eyebrow mb-3 animate-fade-up drop-shadow-sm text-gold-light">{eyebrow}</p>
        )}
        <div className="gold-bar mb-4 shadow-sm" />
        <h1
          className={`font-serif font-bold leading-tight max-w-3xl animate-fade-up-200 text-white drop-shadow-lg ${
            compact ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 mt-4 max-w-2xl text-base leading-relaxed animate-fade-up-400 font-sans drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-10">
        <svg viewBox="0 0 1440 24" fill="white" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,24 C360,0 1080,0 1440,24 L1440,24 L0,24 Z" />
        </svg>
      </div>
    </section>
  )
}

