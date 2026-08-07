import { Link } from 'react-router-dom'
import { ChevronRight, MapPin, GraduationCap, Users, Landmark, Award, ExternalLink } from 'lucide-react'
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
    period: '1908-1939',
    title: 'Colonial Foundations',
    events: [
      { year: '1908', text: 'Established by the British colonial government as an intermediate school near the Kitui Police Station, the first secular Government African School in the colony, with strong backing from local Akamba communities.' },
      { year: '1938-39', text: 'Outgrew its original site and was relocated to the current permanent grounds, officially renamed Campbell Academy in honour of Provincial Commissioner Mr. Campbell.' },
    ],
  },
  {
    period: '1940s-1950s',
    title: 'Expansion & Co-Education',
    events: [
      { year: '1942', text: 'Temporarily operated as a co-educational facility, with girls also in attendance.' },
      { year: '1947-49', text: 'Officially transitioned into a regional boarding school as the first permanent student dormitories were completed.' },
      { year: '1957', text: 'Upgraded into a full secondary school; its inaugural class of O-Level students graduated in 1960.' },
    ],
  },
  {
    period: '1960s-1980s',
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
    text: 'To provide a conducive environment for effective learning, teaching and character moulding.',
  },
  {
    label: 'Our Vision',
    text: 'To be a model school and centre of excellence, producing empowered leaders who transform the world.',
  },
  {
    label: 'Our Motto',
    text: '“Learn To Serve” is a commitment to service, integrity and excellence that defines everything we do.',
    sub: '“Umiisyo na Wia” (Perseverance and Work) is a Kamba saying that reflects our deep cultural roots and hard-working academic culture.',
  },
]

/* Verified KCSE data, grade distribution published by the school and KNEC analysis.
   2024 is intentionally omitted from the table because the full grade distribution was
   not published; its mean (9.52) and national rank (23rd) are noted separately below. */
const kcseColumns = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-']

const kcseRows = [
  {
    year: '2025',
    grades: [17, 87, 109, 83, 41, 12, 5, 0],
    entry: 354,
    mean: '9.72',
    pass: '98.59',
    highlight: true,
  },
  {
    year: '2023',
    grades: [2, 24, 56, 65, 42, 17, 17, 1],
    entry: 224,
    mean: '8.91',
    pass: '91.96',
  },
  {
    year: '2022',
    grades: [5, 42, 48, 50, 29, 19, 6, 0],
    entry: 199,
    mean: '9.31',
    pass: '96.98',
  },
  {
    year: '2021',
    grades: [2, 43, 52, 43, 27, 12, 1, 0],
    entry: 180,
    mean: '9.50',
    pass: '99.44',
  },
  {
    year: '2020',
    grades: [2, 22, 40, 49, 32, 8, 6, 0],
    entry: 159,
    mean: '9.15',
    pass: '96.23',
  },
]

const alumni = [
  {
    name: 'Willy Mutunga',
    role: 'Retired Chief Justice of Kenya; first Chief Justice under the 2010 Constitution',
    wiki: 'https://en.wikipedia.org/wiki/Willy_Mutunga',
    img: '/willy mutunga.jpeg',
  },
  {
    name: 'Kalonzo Musyoka',
    role: '10th Vice-President of Kenya; diplomat and elder statesman',
    wiki: 'https://en.wikipedia.org/wiki/Kalonzo_Musyoka',
    img: '/kalonzo musyoka.jpeg',
  },
  {
    name: 'Makau Mutua',
    role: 'Former Dean, University at Buffalo Law School; globally recognized legal scholar',
    wiki: 'https://en.wikipedia.org/wiki/Makau_Mutua',
    img: '/makau mutua.jpeg',
  },
  {
    name: 'Ngala Mwendwa',
    role: 'Independence-era politician; member of the Kenyan delegation to the 1960 Lancaster House Conference',
    wiki: 'https://en.wikipedia.org/wiki/Ngala_Mwendwa',
    img: '/ngala mwendwa.jpeg',
  },
  {
    name: 'Leonard Mambo Mbotela',
    role: 'Pioneering veteran Kenyan radio and broadcast journalist',
    wiki: 'https://en.wikipedia.org/wiki/Leonard_Mbotela',
    img: '/mambo mbotela.jpeg',
  },
  {
    name: 'Muthomi Njuki',
    role: "Governor, Tharaka Nithi County; former Chuka-Igambang'ombe MP (taught Biology, coached rugby)",
    wiki: 'https://en.wikipedia.org/wiki/Muthomi_Njuki',
    img: '/Muthomi Njuki.jpeg',
  },
  {
    name: 'Benjamin Nzimbi',
    role: 'Retired Archbishop and Primate, Anglican Church of Kenya',
    wiki: 'https://en.wikipedia.org/wiki/Benjamin_Nzimbi',
    img: '/Benjamin Nzimbi.jpeg',
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
      {/* ══ HERO WITH PHOTO BACKGROUND ══ */}
      <section className="relative overflow-hidden bg-forest-dark text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.admin}
            alt="Kitui High School Administration Block"
            className="w-full h-full object-cover object-center animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="container-page relative z-10 py-20 md:py-32">
          {/* Breadcrumb */}
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-sm">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} className="text-white/40" />
              <span className="text-gold-light font-medium">About</span>
            </nav>
          </Reveal>

          <div className="max-w-3xl">
            <Reveal direction="up" delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4">
                About Kitui High School
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
                Our Heritage &amp; Legacy
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="w-14 h-[3px] bg-gold mt-6 mb-6 rounded-full" />
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-md">
                Over a century of nurturing young men of character, discipline, leadership
                and academic excellence.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-10">
          <svg viewBox="0 0 1440 24" fill="#ffffff" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,24 C360,0 1080,0 1440,24 L1440,24 L0,24 Z" />
          </svg>
        </div>
      </section>

      {/* ══ HISTORY ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest mb-3">
                History of the School
              </p>
              <h2 className="font-serif font-bold text-neutral-900 text-3xl md:text-4xl leading-tight mb-6">
                A Century of Leadership and Service
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Kitui High School is a government-aided national boys' boarding secondary school
                in Kitui Central Sub-County, Kitui County, and the only national boys' school in
                the county. Located about two kilometres from Kitui town along the Kitui-Mbusyani
                road, the school has for over a century served as a crucible for leadership,
                academic excellence and character development.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The story begins in 1908, when the British colonial government established a
                school near the Kitui Police Station. It became the first secular Government
                African School in the colony, built with the strong backing of local Akamba
                communities, who volunteered land, food and labour.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                By 1938 the school had outgrown its original site and was relocated to its
                present permanent grounds, officially renamed Campbell Academy in honour of
                Provincial Commissioner Mr. Campbell. It became a boarding school in 1948 and
                a full secondary school in 1957, with its inaugural O-Level class graduating in
                1960. The A-Level tier was introduced in 1971 and phased out in 1980 when the
                school adopted the national 8-4-4 system.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-7">
                Today the school hosts a vibrant population of over 1,500 students drawn from
                all 47 counties, recognised nationally for an ultra-competitive academic
                environment with a strong focus on STEM alongside sports, arts and service,
                anchored on our motto, <em className="text-forest font-semibold not-italic">Learn To Serve</em>.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-forest text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-forest-light transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="space-y-6">
            <figure className="group transition-all duration-500 hover:-translate-y-1">
              <div className="overflow-hidden rounded-xl shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                <img
                  src={IMG.adminClose}
                  alt="The Administration Block of Kitui High School"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-500">
                The Administration Block at Kitui High School
              </figcaption>
            </figure>
            <figure className="group transition-all duration-500 hover:-translate-y-1">
              <div className="overflow-hidden rounded-xl shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                <img
                  src={IMG.principals}
                  alt="List of Principals of Kitui High School"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-500">
                Principals of Kitui High School through the years
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ══ AT A GLANCE ══ */}
      <section className="bg-neutral-50">
        <div className="container-page grid grid-cols-2 lg:grid-cols-4">
          {glance.map((g) => (
            <Reveal
              key={g.label}
              direction="up"
              className="py-10 px-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-serif font-bold text-forest">{g.value}</p>
              <p className="mt-1.5 text-xs uppercase tracking-widest text-neutral-500">{g.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ HERITAGE TIMELINE ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest mb-3">
                Our Heritage
              </p>
              <h2 className="font-serif font-bold text-neutral-900 text-3xl md:text-4xl">
                Over a Century of History
              </h2>
            </div>
          </Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="space-y-10">
              {eras.map((era, i) => (
                <Reveal key={era.title} direction={i % 2 === 0 ? 'right' : 'left'} delay={(i % 2) * 0.1}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-forest shadow" />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                      {era.period}
                    </p>
                    <h3 className="font-serif font-bold text-neutral-900 text-xl mt-1 mb-3">{era.title}</h3>
                    <ul className="space-y-2.5">
                      {era.events.map((e) => (
                        <li key={e.year}>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            <span className="font-semibold text-neutral-900">{e.year}.</span> {e.text}
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
      <section className="section-pad bg-neutral-50">
        <div className="container-page grid md:grid-cols-3 gap-8">
          {identity.map((item, i) => (
            <Reveal key={item.label} direction="up" delay={i * 0.1}>
              <div className="bg-white rounded-xl p-7 h-full shadow-sm">
                <h3 className="font-serif font-bold text-neutral-900 text-xl mb-3">{item.label}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.text}</p>
                {item.sub && <p className="text-sm text-neutral-500 leading-relaxed mt-3">{item.sub}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ KCSE PERFORMANCE ══ */}
      <section id="results" className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest mb-3">
                Academic Performance
              </p>
              <h2 className="font-serif font-bold text-neutral-900 text-3xl md:text-4xl">
                KCSE Performance
              </h2>
              <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
                Kitui High School is consistently ranked among the top schools nationally. In the
                2025 KCSE the school was ranked 13th in Kenya, and 1st in Kitui County, building
                on a 2024 mean grade of 9.52 and a national rank of 23rd, with the 2nd best
                performance in Mathematics in the country.
              </p>
            </div>
          </Reveal>

          {/* Key figures */}
          <Reveal direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: GraduationCap, value: '9.72', label: '2025 Mean Grade' },
                { icon: Award, value: '98.59%', label: 'University Entry' },
                { icon: Users, value: '354', label: '2025 Candidates' },
                { icon: Landmark, value: '13th', label: 'National Rank 2025' },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-neutral-50 rounded-xl p-5 text-center"
                >
                  <Icon size={20} className="mx-auto text-forest mb-2" />
                  <p className="font-serif font-bold text-neutral-900 text-2xl">{value}</p>
                  <p className="text-[11px] uppercase tracking-widest text-neutral-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm border-collapse min-w-[760px]">
                  <thead>
                    <tr className="text-neutral-500">
                      <th className="px-4 py-3 text-left font-semibold">Year</th>
                      {kcseColumns.map((c) => (
                        <th key={c} className="px-3 py-3 font-semibold text-center">{c}</th>
                      ))}
                      <th className="px-3 py-3 font-semibold text-center">Entry</th>
                      <th className="px-3 py-3 font-semibold text-center">Mean</th>
                      <th className="px-4 py-3 font-semibold text-center">C+ and above (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kcseRows.map((row, ri) => (
                      <tr
                        key={row.year}
                        className={row.highlight ? 'bg-forest/[0.04]' : ri % 2 === 0 ? 'bg-white' : 'bg-neutral-50/40'}
                      >
                        <td className="px-4 py-3.5 font-bold text-neutral-900 whitespace-nowrap">
                          {row.year}
                          {row.highlight && (
                            <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-forest bg-forest/10 px-2 py-0.5 rounded-full">
                              Latest
                            </span>
                          )}
                        </td>
                        {kcseColumns.map((c, i) => (
                          <td key={c} className="px-3 py-3.5 text-center text-neutral-700 tabular-nums">
                            {row.grades[i]}
                          </td>
                        ))}
                        <td className="px-3 py-3.5 text-center font-semibold text-neutral-700 tabular-nums">{row.entry}</td>
                        <td className="px-3 py-3.5 text-center font-bold text-forest tabular-nums">{row.mean}</td>
                        <td className="px-4 py-3.5 text-center font-semibold text-neutral-800 tabular-nums">{row.pass}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="pt-5 text-xs leading-relaxed text-neutral-500">
                Grade distribution as released by the school and KNEC analysis for the KCSE
                sittings shown above. In the 2025 sitting, 349 of the 354 candidates who sat the
                exam earned a grade of C+ or higher, the minimum required for university admission.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ NOTABLE ALUMNI ══ */}
      <section className="section-pad bg-neutral-50">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest mb-3">
                Notable Alumni
              </p>
              <h2 className="font-serif font-bold text-neutral-900 text-3xl md:text-4xl">
                Distinguished Graduates
              </h2>
              <p className="text-neutral-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                The history of Kitui School is best mirrored by the calibre of leaders it has
                produced for the nation, from law and politics to education and the church.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {alumni.map((a, i) => (
              <Reveal key={a.name} direction="up" delay={(i % 3) * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col group">
                  <a
                    href={a.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read more about ${a.name} on Wikipedia`}
                    className="relative block overflow-hidden rounded-xl mb-5"
                  >
                    <img
                      src={a.img}
                      alt={a.name}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300" />
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={14} className="text-forest" />
                    </span>
                  </a>
                  <a
                    href={a.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif font-bold text-neutral-900 text-lg leading-snug hover:text-forest transition-colors"
                  >
                    {a.name}
                  </a>
                  <p className="text-sm text-neutral-500 leading-relaxed mt-1.5 flex-1">{a.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAMPUS LIFE ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest mb-3">
                Life at Kitui High School
              </p>
              <h2 className="font-serif font-bold text-neutral-900 text-3xl md:text-4xl">
                Campus &amp; Community
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusShots.map((shot, i) => (
              <Reveal key={shot.src} direction="up" delay={(i % 3) * 0.08}>
                <figure className="group transition-all duration-500 hover:-translate-y-1.5">
                  <div className="overflow-hidden rounded-xl shadow-sm transition-shadow duration-500 group-hover:shadow-2xl">
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-neutral-500 text-center flex items-center justify-center gap-1.5">
                    <MapPin size={12} className="text-forest" />
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE STRIP ══ */}
      <section className="bg-neutral-50 py-14 text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Learn To Serve.
            </h2>
            <p className="text-neutral-500 text-base">
              More than a motto. It is the standard by which we live, learn and lead.
            </p>
            <p className="text-forest text-sm mt-3 tracking-widest font-semibold">Since 1908</p>
          </Reveal>
        </div>
      </section>

      {/* ══ WHITE CTA ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <div className="rounded-2xl px-6 py-12 md:p-14 bg-gradient-to-b from-neutral-50 to-white text-center">
              <h2 className="font-serif font-bold text-neutral-900 text-2xl md:text-3xl leading-snug">
                Experience the Kitui High School Difference
              </h2>
              <p className="text-neutral-500 mt-3 text-sm md:text-base max-w-lg mx-auto">
                Visit our campus, meet our team and discover how we shape future leaders.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-forest text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-forest-light transition-colors shadow-sm"
                >
                  Book a Visit
                </Link>
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2 text-neutral-700 text-sm font-semibold px-7 py-3.5 rounded-full hover:text-forest transition-colors"
                >
                  Explore Academics
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
