import PageHero from '../components/PageHero.jsx'

// TODO: This page's design was not included in the mockups yet.
// Replace this skeleton once the Academics mockup is shared.
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
