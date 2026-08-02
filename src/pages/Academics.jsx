import PageHero from '../components/PageHero.jsx'

export default function Academics() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'Academics']}
        eyebrow="Academic Pathways"
        title="Academics"
        subtitle="Details on our CBC pathways, curriculum and departments go here."
      />
      <section className="container-page py-16">
        <p className="text-slate-500 italic">
          Content coming soon — build this out from the Academics mockup.
        </p>
      </section>
    </>
  )
}
