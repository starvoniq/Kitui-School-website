import PageHero from '../components/PageHero.jsx'

// TODO: This page's design was not included in the mockups yet.
// Replace this skeleton once the Management mockup is shared.
export default function Management() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'Management']}
        eyebrow="Leadership"
        title="Management"
        subtitle="Board of management, administration and staff structure go here."
      />
      <section className="container-page py-16">
        <p className="text-slate-500 italic">
          Content coming soon — build this out from the Management mockup.
        </p>
      </section>
    </>
  )
}
