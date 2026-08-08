import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * CtaBanner: full-width call-to-action strip.
 *
 * Props:
 *  - title           {string}
 *  - subtitle        {string}
 *  - primaryLabel    {string}
 *  - primaryTo       {string}  route (default /contact)
 *  - secondaryLabel  {string}
 *  - secondaryTo     {string}  route (default /about)
 *  - dark            {boolean} Use lighter (cream on forest) variant
 *  - transparent     {boolean} Make background transparent
 *  - className       {string}  Additional class names
 */
export default function CtaBanner({
  title,
  subtitle,
  primaryLabel,
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo = '/about',
  dark,
  transparent = false,
  light = false,
  bgImage,
  className = '',
}) {
  const isLight = light && !transparent && !bgImage
  const backgroundClasses = transparent
    ? 'bg-transparent'
    : bgImage
      ? ''
      : isLight
        ? 'bg-gradient-to-r from-[#f7efe1] via-[#fcf7ea] to-[#eef6ef] border-y border-slate-200'
        : 'bg-forest-gradient'

  return (
    <section
      className={`relative overflow-hidden ${backgroundClasses} ${className}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {bgImage && <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/75 to-forest/80" />}

      {/* Large decorative quote mark */}
      <div className={`absolute right-10 top-1/2 -translate-y-1/2 ${isLight ? 'text-forest/10' : 'text-white/5'} font-serif text-[180px] leading-none pointer-events-none select-none`}>
        &ldquo;
      </div>

      <div className="container-page relative z-10 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className={`${isLight ? 'text-forest' : 'text-white'} font-serif font-bold text-2xl md:text-3xl leading-snug`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`${isLight ? 'text-slate-600' : 'text-white/65'} mt-2 font-sans text-sm md:text-base max-w-lg`}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          {primaryLabel && (
            <Link to={primaryTo} className="btn-primary">
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
          )}
          {secondaryLabel && (
            <Link to={secondaryTo} className={isLight ? 'btn-outline-dark' : 'btn-outline'}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
