export default function CtaBanner({ title, subtitle, primaryLabel, secondaryLabel }) {
  return (
    <section className="bg-navy">
      <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white text-2xl font-serif font-semibold">{title}</h3>
          {subtitle && <p className="text-slate-300 mt-1">{subtitle}</p>}
        </div>
        <div className="flex gap-4 shrink-0">
          {primaryLabel && <button className="btn-primary">{primaryLabel}</button>}
          {secondaryLabel && <button className="btn-outline">{secondaryLabel}</button>}
        </div>
      </div>
    </section>
  )
}
