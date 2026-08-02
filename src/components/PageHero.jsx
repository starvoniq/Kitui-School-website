export default function PageHero({ eyebrow, title, subtitle, crumbs }) {
  return (
    <section className="bg-navy text-white">
      <div className="container-page py-16">
        {crumbs && (
          <p className="text-sm text-slate-300 mb-4">
            {crumbs.join(' > ')}
          </p>
        )}
        {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">{title}</h1>
        {subtitle && <p className="text-slate-300 mt-4 max-w-xl">{subtitle}</p>}
      </div>
    </section>
  )
}
