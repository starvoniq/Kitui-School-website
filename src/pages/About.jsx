import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const IMG = {
  admin: '/kitui school admin block.jpg',
  adminClose: '/kitui school admin close image.jpeg',
  gate: '/kitui school gate.jpeg',
  basketball: '/basketball kitui school.jpeg',
  bus: '/kitui school bus.jpeg',
  principals: '/kitui school list of principals.jpg',
}

const glance = [
  { value: '1908', label: 'Established' },
  { value: '1,500+', label: 'Students Enrolled' },
  { value: '47', label: 'Counties Represented' },
  { value: 'National', label: "Boys' Boarding School" },
]

const eras = [
  {
    period: '1908–1939',
    title: 'Colonial Foundations',
    events: [
      { year: '1908', text: 'Established by the British colonial government as an intermediate school near the Kitui Police Station, the first secular Government African School in the colony, with strong backing from local Akamba communities.' },
      { year: '1938–39', text: 'Outgrew its original site and was relocated to the current permanent grounds, officially renamed Campbell Academy in honour of Provincial Commissioner Mr. Campbell.' },
    ],
  },
  {
    period: '1940s–1950s',
    title: 'Expansion & Co-Education',
    events: [
      { year: '1942', text: 'Temporarily operated as a co-educational facility, with girls also in attendance.' },
      { year: '1947–49', text: 'Officially transitioned into a regional boarding school as the first permanent student dormitories were completed.' },
      { year: '1957', text: 'Upgraded into a full secondary school; its inaugural class of O-Level students graduated in 1960.' },
    ],
  },
  {
    period: '1960s–1980s',
    title: 'Post-Independence & Academic Elevation',
    events: [
      { year: '1971', text: 'Introduced the advanced A-Level tier (Forms 5 and 6) to meet the demands of a newly independent Kenya.' },
      { year: '1980', text: 'Phased out A-Level classes and re-aligned into the standard 8-4-4 secondary system following nationwide reforms.' },
    ],
  },
  {
    period: 'Present',
    title: 'National School Status',
    events: [
      { year: 'Today', text: 'Elevated by the Ministry of Education to a National School for its sterling KCSE performances, now hosting over 1,500 students drawn from all 47 counties of Kenya.' },
    ],
  },
]

const identity = [
  {
    label: 'Our Mission',
    text: 'To provide quality education that nurtures holistic development, instils strong moral values and prepares students to excel and serve society.',
  },
  {
    label: 'Our Vision',
    text: 'To be a leading institution of academic excellence and character development, producing empowered leaders who transform the world.',
  },
  {
    label: 'Our Motto',
    text: '“Learn To Serve” - a commitment to service, integrity and excellence that defines everything we do at Kitui High School.',
    sub: '“Umiisyo na Wia” (Perseverance and Work) - a Kamba saying reflecting our deep cultural roots and hard-working academic culture.',
  },
]

const kcseHighlights = [
  { value: '9.71', label: '2025 Mean Grade' },
  { value: '13th', label: 'National Rank 2025' },
  { value: '354', label: 'Candidates 2025' },
  { value: '98.5%', label: 'University Transition' },
]

const kcseMean = [
  { year: '2025', mean: '9.71' },
  { year: '2024', mean: '9.52' },
  { year: '2023', mean: '8.89' },
  { year: '2022', mean: '9.31' },
  { year: '2021', mean: '9.50' },
  { year: '2020', mean: '9.15' },
]

const kcse2025 = [
  { grade: 'A', count: 17 },
  { grade: 'A-', count: 87 },
  { grade: 'B+', count: 109 },
  { grade: 'B', count: 83 },
  { grade: 'B-', count: 41 },
  { grade: 'C+', count: 12 },
  { grade: 'C', count: 5 },
]

const alumni = [
  {
    name: 'Willy Mutunga',
    role: 'Retired Chief Justice of Kenya; first Chief Justice under the 2010 Constitution',
  },
  {
    name: 'Kalonzo Musyoka',
    role: '10th Vice-President of Kenya; diplomat and elder statesman',
  },
  {
    name: 'Makau Mutua',
    role: 'Former Dean, University at Buffalo Law School; globally recognized legal scholar',
  },
  {
    name: 'Ngala Mwendwa',
    role: 'Independence-era politician; member of the Kenyan delegation to the 1960 Lancaster House Conference',
  },
  {
    name: 'Leonard Mambo Mbotela',
    role: 'Pioneering veteran Kenyan radio and broadcast journalist',
  },
  {
    name: 'Muthomi Njuki',
    role: "Governor, Tharaka Nithi County; former Chuka-Igambang'ombe MP (taught Biology, coached rugby)",
  },
  {
    name: 'Benjamin Nzimbi',
    role: 'Retired Archbishop and Primate, Anglican Church of Kenya',
  },
]

const campusShots = [
  { src: IMG.gate, caption: 'The main gate of Kitui High School' },
  { src: IMG.basketball, caption: 'Sports and talent development on campus' },
  { src: IMG.bus, caption: 'School transport for our students' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'About']}
        eyebrow="About Kitui High School"
        title="Our Heritage & Legacy"
        subtitle="Over a century of nurturing young men of character, discipline, leadership and academic excellence."
        bgImage={IMG.admin}
      />

      {/* ══ HISTORY ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="section-eyebrow mb-3">History of the School</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-6">A Century of Leadership and Service</h2>
            <p className="section-sub mb-4">
              Kitui High School is a government-aided national boys' boarding secondary school
              in Kitui Central Sub-County, Kitui County, and the only national boys' school in
              the county. Located about two kilometres from Kitui town along the Kitui-Mbusyani
              road, the school has for over a century served as a crucible for leadership,
              academic excellence and character development.
            </p>
            <p className="section-sub mb-4">
              The story begins in 1908, when the British colonial government established a
              school near the Kitui Police Station. It became the first secular Government
              African School in the colony, built with the strong backing of local Akamba
              communities, who volunteered land, food and labour.
            </p>
            <p className="section-sub mb-4">
              By 1938 the school had outgrown its original site and was relocated to its
              present permanent grounds, officially renamed Campbell Academy in honour of
              Provincial Commissioner Mr. Campbell. It became a boarding school in 1948 and
              a full secondary school in 1957, with its inaugural O-Level class graduating in
              1960. The A-Level tier was introduced in 1971 and phased out in 1980 when the
              school adopted the national 8-4-4 system.
            </p>
            <p className="section-sub mb-7">
              Today the school hosts a vibrant population of over 1,500 students drawn from
              all 47 counties, and is recognised nationally for its ultra-competitive academic
              environment with a strong focus on STEM alongside sports, arts and service,
              anchored on our motto, <em className="text-gold font-semibold not-italic">Learn To Serve</em>.
            </p>
            <Link to="/contact" className="btn-outline-dark inline-flex items-center">
              Get in Touch
            </Link>
          </div>

          <div className="space-y-6">
            <figure>
              <img
                src={IMG.adminClose}
                alt="The Administration Block of Kitui High School"
                className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
              />
              <figcaption className="mt-3 text-xs text-slate-500 font-sans">
                The Administration Block at Kitui High School
              </figcaption>
            </figure>
            <figure>
              <img
                src={IMG.principals}
                alt="List of Principals of Kitui High School"
                className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
              />
              <figcaption className="mt-3 text-xs text-slate-500 font-sans">
                Principals of Kitui High School through the years
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ══ AT A GLANCE ══ */}
      <section className="bg-forest-dark text-white">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {glance.map((g) => (
            <div key={g.label} className="py-10 px-6 text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-gold-light">{g.value}</p>
              <p className="mt-1.5 text-xs uppercase tracking-widest text-white/60 font-sans">{g.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HERITAGE TIMELINE ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Our Heritage</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Over a Century of History</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gold/30" />
            <div className="space-y-10">
              {eras.map((era) => (
                <div key={era.title} className="relative pl-10">
                  <span className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-white shadow" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold font-sans">
                    {era.period}
                  </p>
                  <h3 className="font-serif font-bold text-forest text-xl mt-1 mb-3">{era.title}</h3>
                  <ul className="space-y-2.5">
                    {era.events.map((e) => (
                      <li key={e.year}>
                        <p className="text-sm text-slate-600 font-sans leading-relaxed">
                          <span className="font-semibold text-forest">{e.year}.</span> {e.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION / VISION / MOTTO ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid md:grid-cols-3 gap-10">
          {identity.map((item) => (
            <div key={item.label} className="border-t-2 border-gold pt-6">
              <h3 className="font-serif font-bold text-forest text-xl mb-3">{item.label}</h3>
              <p className="section-sub text-sm">{item.text}</p>
              {item.sub && <p className="section-sub text-sm mt-3">{item.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ══ KCSE PERFORMANCE ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Academic Performance</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">KCSE Performance</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-sans text-sm">
              Kitui High School is consistently ranked among the top schools nationally. In the
              2025 KCSE, the school was ranked 13th in Kenya with a mean grade of 9.71, building
              on a 2024 mean of 9.52 and a national rank of 23rd, including 2nd in the country
              for the best performance in Mathematics.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {kcseHighlights.map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-parchment p-6 text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-forest">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-500 font-sans">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="card p-6 md:p-8">
              <h3 className="font-serif font-bold text-forest text-xl mb-5">Mean Grade by Year</h3>
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="pb-2.5 text-xs uppercase tracking-widest text-slate-400 font-semibold">Year</th>
                    <th className="pb-2.5 text-right text-xs uppercase tracking-widest text-slate-400 font-semibold">Mean Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {kcseMean.map((r) => (
                    <tr key={r.year} className="border-b border-slate-100">
                      <td className="py-2.5 font-semibold text-forest">{r.year}</td>
                      <td className="py-2.5 text-right font-semibold text-gold">{r.mean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-slate-400 font-sans">
                Source: KCSE results as reported by the school and national examination analysis.
              </p>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="font-serif font-bold text-forest text-xl mb-5">2025 Grade Distribution</h3>
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="pb-2.5 text-xs uppercase tracking-widest text-slate-400 font-semibold">Grade</th>
                    <th className="pb-2.5 text-right text-xs uppercase tracking-widest text-slate-400 font-semibold">Students</th>
                  </tr>
                </thead>
                <tbody>
                  {kcse2025.map((r) => (
                    <tr key={r.grade} className="border-b border-slate-100">
                      <td className="py-2.5 font-semibold text-forest">{r.grade}</td>
                      <td className="py-2.5 text-right font-semibold text-gold">{r.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-slate-400 font-sans">
                349 of 354 candidates (98.5%) qualified for university admission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NOTABLE ALUMNI ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Notable Alumni</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">The Kitui School Hall of Fame</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              The history of Kitui School is best mirrored by the calibre of leaders it has
              produced for the nation, from law and politics to education and the church.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((a) => (
              <div key={a.name} className="card p-6 hover:border-gold/30">
                <h4 className="font-serif font-bold text-forest text-lg leading-snug">{a.name}</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed mt-1">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAMPUS LIFE ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Life at Kitui High School</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">A Heritage. A Home. A Future.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusShots.map((shot) => (
              <figure key={shot.src}>
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
                />
                <figcaption className="mt-3 text-xs text-slate-500 font-sans text-center">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE BANNER ══ */}
      <section className="bg-forest-dark py-16 text-center relative overflow-hidden">
        <div className="container-page relative z-10">
          <h2 className="text-white font-serif text-3xl md:text-4xl font-semibold mb-2">
            Learn To Serve.
          </h2>
          <p className="text-white/70 font-sans text-lg italic">
            More than a motto. A way of life.
          </p>
          <p className="text-gold/70 text-sm font-sans mt-3 tracking-widest font-semibold">Since 1908</p>
        </div>
      </section>

      <CtaBanner
        title="Experience the Kitui High School Difference"
        subtitle="Visit our campus, meet our team and discover how we shape future leaders."
        primaryLabel="Book a Visit"
        primaryTo="/contact"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
      />
    </>
  )
}
