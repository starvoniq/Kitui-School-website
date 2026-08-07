import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'

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

const kcseColumns = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E', 'X', 'Y']

const kcseRows = [
  {
    year: '2025',
    grades: [17, 87, 109, 83, 41, 12, 5, 0, 0, 0, 0, 0, 0, 0],
    entry: 354,
    mean: '9.72',
    pass: '98.59',
  },
  { year: '2024', grades: null, entry: '–', mean: '9.53', pass: '–' },
  {
    year: '2023',
    grades: [2, 24, 56, 65, 42, 17, 17, 1, 0, 0, 0, 0, 0, 0],
    entry: 224,
    mean: '8.91',
    pass: '91.96',
  },
  {
    year: '2022',
    grades: [5, 42, 48, 50, 29, 19, 6, 0, 0, 0, 0, 0, 0, 0],
    entry: 199,
    mean: '9.31',
    pass: '96.98',
  },
  {
    year: '2021',
    grades: [2, 43, 52, 43, 27, 12, 1, 0, 0, 0, 0, 0, 0, 0],
    entry: 180,
    mean: '9.50',
    pass: '99.44',
  },
  {
    year: '2020',
    grades: [2, 22, 40, 49, 32, 8, 6, 0, 0, 0, 0, 0, 0, 0],
    entry: 159,
    mean: '9.15',
    pass: '96.23',
  },
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
          <Reveal>
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
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
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
          </Reveal>
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
              {eras.map((era, i) => (
                <Reveal key={era.title} delay={(i % 2) * 0.1}>
                  <div className="relative pl-10">
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION / VISION / MOTTO ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid md:grid-cols-3 gap-10">
          {identity.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="border-t-2 border-gold pt-6">
                <h3 className="font-serif font-bold text-forest text-xl mb-3">{item.label}</h3>
                <p className="section-sub text-sm">{item.text}</p>
                {item.sub && <p className="section-sub text-sm mt-3">{item.sub}</p>}
              </div>
            </Reveal>
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
              2025 KCSE the school was ranked 13th in Kenya, building on a 2024 national rank of
              23rd with the 2nd best performance in Mathematics in the country.
            </p>
          </div>

          <Reveal>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <div className="bg-forest-dark text-white px-6 py-4 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-serif font-bold text-lg md:text-xl">Kitui High School</p>
              <p className="text-xs uppercase tracking-widest text-gold-light font-sans font-semibold">
                KCSE Performance
              </p>
            </div>
            <div className="bg-white overflow-x-auto">
              <table className="w-full text-xs font-sans border-collapse min-w-[860px]">
                <thead>
                  <tr className="bg-forest-dark text-white">
                    <th className="px-3 py-2.5 text-left font-semibold tracking-wider whitespace-nowrap">YEAR</th>
                    {kcseColumns.map((c) => (
                      <th key={c} className="px-2.5 py-2.5 font-semibold text-center whitespace-nowrap">{c}</th>
                    ))}
                    <th className="px-2.5 py-2.5 font-semibold text-center whitespace-nowrap">ENTRY</th>
                    <th className="px-2.5 py-2.5 font-semibold text-center whitespace-nowrap">MEAN</th>
                    <th className="px-3 py-2.5 font-semibold text-center whitespace-nowrap">&gt;C+ %</th>
                  </tr>
                </thead>
                <tbody>
                  {kcseRows.map((row, ri) => (
                    <tr
                      key={row.year}
                      className={`border-b border-slate-100 ${ri % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}
                    >
                      <td className="px-3 py-2 font-bold text-forest whitespace-nowrap">{row.year}</td>
                      {kcseColumns.map((c, i) => (
                        <td key={c} className="px-2.5 py-2 text-center text-slate-700 tabular-nums">
                          {row.grades ? row.grades[i] : '–'}
                        </td>
                      ))}
                      <td className="px-2.5 py-2 text-center font-semibold text-slate-700 tabular-nums">{row.entry}</td>
                      <td className="px-2.5 py-2 text-center font-bold text-gold tabular-nums">{row.mean}</td>
                      <td className="px-3 py-2 text-center font-semibold text-forest tabular-nums">{row.pass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </Reveal>

          <p className="mt-4 text-xs text-slate-400 font-sans text-center">
            Figures as published by the school and national examination analysis. In
            2025, 349 of 354 candidates (98.59%) qualified for university admission.
            The 2024 candidate entry was not published.
          </p>
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
            {alumni.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 0.08}>
                <div className="card p-6 hover:border-gold/30 h-full">
                  <h4 className="font-serif font-bold text-forest text-lg leading-snug">{a.name}</h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed mt-1">{a.role}</p>
                </div>
              </Reveal>
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
            {campusShots.map((shot, i) => (
              <Reveal key={shot.src} delay={(i % 3) * 0.08}>
                <figure>
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
                  />
                  <figcaption className="mt-3 text-xs text-slate-500 font-sans text-center">
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
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
