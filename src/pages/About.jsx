import { Calendar, BedDouble, MapPin, Users, Quote, GraduationCap, Trophy, UsersRound } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const profile = [
  { icon: Calendar, label: 'Founded', value: '1908 (Intermediate School)' },
  { icon: BedDouble, label: 'Boarding Since', value: '1948' },
  { icon: MapPin, label: 'Location', value: 'Kitui – Machakos Road, Kitui' },
  { icon: Users, label: 'School Type', value: 'National Mixed Day & Boarding' },
  { icon: Quote, label: 'School Motto', value: 'Learn to Serve' },
  { icon: GraduationCap, label: 'Educational Focus', value: 'CBC Senior School Pathway' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'About Us']}
        title="Seven Decades of Building Character and Scholarship."
        subtitle="Kitui High School has stood for excellence, discipline and service since 1908. We nurture young minds to become responsible leaders and change makers in our nation and beyond."
      />

      <section className="container-page py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-navy mb-4">Our History</h2>
          <p className="text-slate-600 mb-4">
            Kitui High School began as an intermediate school in 1908, founded to
            provide quality education to the youth of Kitui and its environs.
          </p>
          <p className="text-slate-600 mb-4">
            In 1948, it was elevated to a full boarding school, marking a new era
            of growth, discipline and academic excellence.
          </p>
          <p className="text-slate-600 mb-6">
            Today, KHS remains a beacon of learning and character development,
            committed to producing holistic, God-fearing and nation-building
            citizens.
          </p>
          <button className="bg-navy text-white px-6 py-3 rounded-sm font-semibold hover:bg-navy-light transition-colors">
            Our Journey
          </button>
        </div>

        <div className="border rounded-md overflow-hidden">
          <h3 className="bg-slate-50 px-6 py-4 font-semibold text-navy border-b">
            Verified School Profile
          </h3>
          <dl>
            {profile.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-slate-50/50' : ''}`}
              >
                <Icon className="text-navy shrink-0" size={20} />
                <dt className="w-40 text-sm text-slate-500 shrink-0">{label}</dt>
                <dd className="text-sm font-medium text-navy">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-page py-14 grid md:grid-cols-2 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-6 md:pt-0">
            <h3 className="text-gold font-semibold uppercase text-sm tracking-wide mb-2">Our Mission</h3>
            <p className="text-slate-200">
              To provide a conducive environment for quality learning, effective
              teaching, and character moulding.
            </p>
          </div>
          <div className="pt-6 md:pt-0 md:pl-10">
            <h3 className="text-gold font-semibold uppercase text-sm tracking-wide mb-2">Our Vision</h3>
            <p className="text-slate-200">
              To be a model school and a centre of excellence in education.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h3 className="text-navy font-bold text-xl mb-8">Our Achievements (Preview)</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="border rounded-md p-6 flex gap-4">
            <Trophy className="text-gold shrink-0" size={28} />
            <div>
              <h4 className="font-semibold text-navy mb-1">Sports Excellence</h4>
              <p className="text-sm text-slate-600">
                We cultivate discipline, teamwork and resilience through a wide
                range of sports activities, producing champions on regional and
                national stages.
              </p>
            </div>
          </div>
          <div className="border rounded-md p-6 flex gap-4">
            <UsersRound className="text-gold shrink-0" size={28} />
            <div>
              <h4 className="font-semibold text-navy mb-1">Clubs & Societies</h4>
              <p className="text-sm text-slate-600">
                Our vibrant clubs and societies nurture leadership, service and
                innovation among our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Experience the Kitui High School Difference"
        subtitle="Visit our campus, meet our team and discover how we shape future leaders."
        primaryLabel="Book a Visit"
        secondaryLabel="View Admissions"
      />
    </>
  )
}
