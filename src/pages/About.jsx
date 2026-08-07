import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, MoveHorizontal, GraduationCap, Users, Landmark, Award, ExternalLink, BookOpen, HeartHandshake, Compass } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const IMG = {
  admin: '/kitui-school-admin-block.jpg',
  adminClose: '/kitui-school-admin-close-image.jpeg',
  gate: '/kitui-school-gate.jpeg',
  basketball: '/basketball-kitui-school.jpeg',
  bus: '/kitui-school-bus.jpeg',
  rugby: '/kitui-school-rugby.jpeg',
  rugbyAction: '/kitui-school-rugby-1.jpeg',
  rugbyCourt: '/kitui-school-rugby-2.jpeg',
  basketballCourt: '/kitui-school-basketball.jpeg',
  football: '/kitui-school-football.jpeg',
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
    year: '2024',
    grades: Array(8).fill('—'),
    entry: '—',
    mean: '9.52',
    pass: '—',
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
    img: '/willy-mutunga.jpeg',
  },
  {
    name: 'Kalonzo Musyoka',
    role: '10th Vice-President of Kenya; diplomat and elder statesman',
    wiki: 'https://en.wikipedia.org/wiki/Kalonzo_Musyoka',
    img: '/kalonzo-musyoka.jpeg',
  },
  {
    name: 'Makau Mutua',
    role: 'Former Dean, University at Buffalo Law School; globally recognized legal scholar',
    wiki: 'https://en.wikipedia.org/wiki/Makau_Mutua',
    img: '/makau-mutua.jpeg',
  },
  {
    name: 'Ngala Mwendwa',
    role: 'Independence-era politician; member of the Kenyan delegation to the 1960 Lancaster House Conference',
    wiki: 'https://en.wikipedia.org/wiki/Ngala_Mwendwa',
    img: '/ngala-mwendwa.jpeg',
  },
  {
    name: 'Leonard Mambo Mbotela',
    role: 'Pioneering veteran Kenyan radio and broadcast journalist',
    wiki: 'https://en.wikipedia.org/wiki/Leonard_Mbotela',
    img: '/mambo-mbotela.jpeg',
  },
  {
    name: 'Muthomi Njuki',
    role: "Governor, Tharaka Nithi County; former Chuka-Igambang'ombe MP (taught Biology, coached rugby)",
    wiki: 'https://en.wikipedia.org/wiki/Muthomi_Njuki',
    img: '/muthomi-njuki.jpeg',
  },
  {
    name: 'Benjamin Nzimbi',
    role: 'Retired Archbishop and Primate, Anglican Church of Kenya',
    wiki: 'https://en.wikipedia.org/wiki/Benjamin_Nzimbi',
    img: '/benjamin-nzimbi.jpeg',
  },
]

const campusShots = [
  { src: IMG.gate, caption: 'The main gate of Kitui High School' },
  { src: IMG.basketball, caption: 'Sports and talent development on campus' },
  { src: IMG.bus, caption: 'School transport for our students' },
]

const sportsShots = [
  { src: IMG.rugby, label: 'Rugby' },
  { src: IMG.basketball, label: 'Basketball' },
  { src: IMG.rugbyCourt, label: 'Rugby' },
  { src: IMG.football, label: 'Football' },
  { src: IMG.basketballCourt, label: 'Basketball' },
  { src: IMG.rugbyAction, label: 'Rugby Action' },
]

const principals = [
  { name: 'Mr. H.N Alborne', from: '1957', to: '1963' },
  { name: 'Dr. M. Mukuni', from: '1964', to: '1965' },
  { name: 'Mr. Michael Drully', from: '1965', to: '1967' },
  { name: 'Mr. Marggowan', from: '1968', to: '1968' },
  { name: 'Mr. B. Gatere', from: '1968', to: '1973' },
  { name: 'Mr. F.M Mcharo', from: '1978', to: '1980' },
  { name: 'Mr. J.A.K Babu', from: '1980', to: '1985' },
  { name: 'Mr. John F.M Mutahi', from: '1985', to: '1993' },
  { name: 'Mr. S.K Kambuni', from: '1994', to: '1995' },
  { name: 'Mr. Malinga W. Mailu', from: '1995', to: '2002' },
  { name: 'Mr. B.M Muthengi', from: '2002', to: '2008' },
  { name: 'Mr. W.M Mutua', from: '2009', to: '2010' },
  { name: 'Mr. Baraka Kasoa', from: '2010', to: '2013' },
  { name: 'Mr. Mutua B.M', from: '2013', to: 'Present' },
]

function SectionHeading({ eyebrow, title, intro, align = 'center' }) {
  return (
    <div className={align === 'left' ? 'max-w-2xl' : 'text-center max-w-3xl mx-auto'}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest mb-3">
        {eyebrow}
      </p>
      <h2 className="font-serif font-bold text-neutral-900 text-3xl md:text-4xl leading-tight">
        {title}
      </h2>
      {intro && <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">{intro}</p>}
    </div>
  )
}

function FoundingSeal() {
  return (
    <div className="rounded-[2rem] border border-gold/30 bg-[#f7f4ec] p-6 shadow-[0_12px_40px_rgba(20,61,34,0.08)]">
      <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[3px] border-gold/70 bg-white text-center text-forest shadow-inner">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Founded</p>
          <p className="mt-2 font-serif text-4xl font-bold leading-none">1908</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-neutral-500">Learn To Serve</p>
        </div>
      </div>
      <p className="mt-5 text-center text-sm leading-relaxed text-neutral-600">
        The institution began as a community-led school and has carried its public purpose through every chapter of its history.
      </p>
    </div>
  )
}

function SportsMarquee() {
  const Group = () => (
    <div className="flex shrink-0 items-center gap-5 pr-5">
      {sportsShots.map((s) => (
        <figure
          key={s.src}
          className="group relative w-60 sm:w-72 md:w-80 shrink-0 overflow-hidden rounded-xl shadow-sm transition-shadow duration-500 hover:shadow-xl"
        >
          <img
            src={s.src}
            alt={`${s.label} at Kitui High School`}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </figure>
      ))}
    </div>
  )

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
      >
        <Group />
        <Group />
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-36 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-36 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* ══ HERO WITH PHOTO BACKGROUND ══ */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#143d22] text-white md:min-h-[84vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.admin}
            alt="Kitui High School Administration Block"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,61,34,0.9)_0%,rgba(20,61,34,0.8)_45%,rgba(20,61,34,0.35)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_100%)]" />
        </div>

        <div className="container-page relative z-10 w-full py-16 sm:py-20 lg:py-24">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm">
              <Link to="/" className="text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#143d22]">Home</Link>
              <ChevronRight size={14} className="text-white/55" />
              <span className="font-medium text-[#f4ecd6]">About</span>
            </nav>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-3xl">
              <Reveal direction="up" delay={0.08}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4b25a]">
                  About Kitui High School
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.12}>
                <h1 className="font-serif text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  A century of character, scholarship and service
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.16}>
                <div className="mt-6 h-[3px] w-16 rounded-full bg-[#c19a3b]" />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-sm">
                  For over a century, Kitui High School has shaped young men of character,
                  discipline, leadership and academic excellence in the heart of Kitui County.
                </p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2}>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f4ecd6]">
                  Institutional identity
                </p>
                <div className="mt-4 rounded-[1.25rem] border border-gold/35 bg-[#f7f4ec] p-5 text-[#143d22]">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#c19a3b]">Founded</p>
                  <p className="mt-2 font-serif text-4xl font-bold">1908</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    The school is rooted in community partnership, public service and a tradition of excellence.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ AT A GLANCE ══ */}
      <section className="bg-[#f7f4ec]">
        <div className="container-page grid grid-cols-2 gap-4 lg:grid-cols-4">
          {glance.map((g, i) => (
            <Reveal
              key={g.label}
              direction="up"
              delay={i * 0.08}
              className="rounded-[1.25rem] border border-[#e7dfcc] bg-white/80 px-5 py-8 text-center"
            >
              <p className="text-3xl font-serif font-bold text-[#143d22] md:text-4xl">{g.value}</p>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.24em] text-neutral-600">{g.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ HOW WE SHAPE STUDENTS ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="How we shape students"
              title="A school experience built around academic depth, discipline and service"
              intro="The strongest parts of Kitui High School are visible in the daily life of the school: disciplined learning, structured boarding, co-curricular growth and civic responsibility."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: 'Academic depth',
                text: 'A rigorous academic culture, strong examinations preparation and a commitment to intellectual discipline across the curriculum.',
              },
              {
                icon: BookOpen,
                title: 'Boarding and pastoral care',
                text: 'Structured routines, teacher mentorship and a living environment that reinforces responsibility and self-management.',
              },
              {
                icon: Compass,
                title: 'Leadership and co-curriculars',
                text: 'A broad programme of sports, clubs and student leadership that helps young people grow beyond the classroom.',
              },
              {
                icon: HeartHandshake,
                title: 'Service and community',
                text: 'Public purpose is woven into school life through outreach, mentorship and a strong ethic of giving back.',
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} direction="up" delay={index * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-[#e6dfcf] bg-[#f7f4ec] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#143d22] text-[#f4ecd6]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#143d22]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HISTORY ══ */}
      <section className="section-pad bg-[#fcfaf5]">
        <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal direction="right">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1e5631]">
                History of the School
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
                A century of leadership and service
              </h2>
              <p className="mb-4 leading-relaxed text-neutral-700">
                Kitui High School is a government-aided national boys' boarding secondary school
                in Kitui Central Sub-County, Kitui County, and the only national boys' school in
                the county. Located about two kilometres from Kitui town along the Kitui-Mbusyani
                road, the school has for over a century served as a crucible for leadership,
                academic excellence and character development.
              </p>
              <p className="mb-4 leading-relaxed text-neutral-700">
                The story begins in 1908, when the British colonial government established a
                school near the Kitui Police Station. It became the first secular Government
                African School in the colony, built with the strong backing of local Akamba
                communities, who volunteered land, food and labour.
              </p>
              <p className="mb-4 leading-relaxed text-neutral-700">
                By 1938 the school had outgrown its original site and was relocated to its
                present permanent grounds, officially renamed Campbell Academy in honour of
                Provincial Commissioner Mr. Campbell. It became a boarding school in 1948 and
                a full secondary school in 1957, with its inaugural O-Level class graduating in
                1960. The A-Level tier was introduced in 1971 and phased out in 1980 when the
                school adopted the national 8-4-4 system.
              </p>
              <p className="mb-7 leading-relaxed text-neutral-700">
                Today the school hosts a vibrant population of over 1,500 students drawn from
                all 47 counties, recognised nationally for an ultra-competitive academic
                environment with a strong focus on STEM alongside sports, arts and service,
                anchored on our motto, <em className="font-semibold not-italic text-[#143d22]">Learn To Serve</em>.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#143d22] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e5631] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfaf5]"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.12} className="space-y-6">
            <FoundingSeal />
            <figure className="overflow-hidden rounded-[1.5rem] border border-[#e7dfcc] bg-white p-2">
              <img
                src={IMG.adminClose}
                alt="The Administration Block of Kitui High School"
                className="aspect-[4/3] w-full rounded-[1.15rem] object-cover"
              />
              <figcaption className="px-2 pb-2 pt-3 text-sm text-neutral-600">
                The Administration Block at Kitui High School
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ══ HERITAGE TIMELINE ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Heritage"
              title="Over a century of history, told in four clear chapters"
              intro="Each era brings a fresh layer of growth, from the school’s colonial beginnings to its present national stature."
            />
          </Reveal>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#e7dfcc] md:left-6" />
            <div className="space-y-8">
              {eras.map((era, i) => (
                <Reveal key={era.title} direction={i % 2 === 0 ? 'right' : 'left'} delay={(i % 2) * 0.08}>
                  <div className="relative pl-12 md:pl-16">
                    <span className="absolute left-2 top-2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#f4ecd6] bg-[#143d22] md:left-4" />
                    <div className="rounded-[1.5rem] border border-[#ece4d2] bg-[#fcfaf5] p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c19a3b]">
                        {era.period}
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-neutral-900">{era.title}</h3>
                      <ul className="mt-4 space-y-3">
                        {era.events.map((e) => (
                          <li key={e.year}>
                            <p className="text-sm leading-relaxed text-neutral-700">
                              <span className="mr-2 font-semibold text-[#143d22]">{e.year}.</span> {e.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION / VISION / MOTTO ══ */}
      <section className="section-pad bg-[#f7f4ec]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Institutional statement"
              title="Our mission, vision and motto remain the compass of the school"
              intro="These are the formal commitments that guide our work, even as the school’s daily life is shaped by the lived experience above."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {identity.map((item, i) => (
              <Reveal key={item.label} direction="up" delay={i * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-[#e7dfcc] bg-white p-7">
                  <h3 className="font-serif text-xl font-semibold text-[#143d22]">{item.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item.text}</p>
                  {item.sub && <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.sub}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRINCIPALS ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="School Leadership"
              title="Our Principals"
              intro="The heads who have steered Kitui School since 1957, as recorded on the official school registry board."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-5xl rounded-[1.5rem] border border-[#ece4d2] bg-[#fcfaf5] p-4 sm:p-8">
              <div className="md:hidden space-y-3">
                {principals.map((p, i) => {
                  const current = p.to === 'Present'
                  return (
                    <div key={p.name} className={`rounded-[1rem] border p-4 ${current ? 'border-[#c19a3b] bg-[#f7f4ec]' : 'border-[#e7dfcc] bg-white'}`}>
                      <p className={`font-semibold ${current ? 'text-[#143d22]' : 'text-neutral-900'}`}>{p.name}</p>
                      <p className="mt-2 text-sm text-neutral-600">
                        <span className="font-medium text-neutral-900">From:</span> {p.from}
                      </p>
                      <p className="text-sm text-neutral-600">
                        <span className="font-medium text-neutral-900">To:</span> {p.to}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="hidden md:block">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">List of principals of Kitui High School from 1957 to the present.</caption>
                  <thead>
                    <tr className="text-left text-neutral-500">
                      <th className="px-3 py-3 font-semibold">Name</th>
                      <th className="px-3 py-3 font-semibold">From</th>
                      <th className="px-3 py-3 font-semibold">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {principals.map((p, i) => {
                      const current = p.to === 'Present'
                      return (
                        <tr key={p.name} className={current ? 'bg-[#f4ecd6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#f7f4ec]'}>
                          <td className={`px-3 py-3 font-semibold ${current ? 'text-[#143d22]' : 'text-neutral-900'}`}>{p.name}</td>
                          <td className={`px-3 py-3 tabular-nums ${current ? 'font-semibold text-[#143d22]' : 'text-neutral-700'}`}>{p.from}</td>
                          <td className={`px-3 py-3 tabular-nums ${current ? 'font-semibold text-[#143d22]' : 'text-neutral-700'}`}>{p.to}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ KCSE PERFORMANCE ══ */}
      <section id="results" className="section-pad bg-[#fcfaf5]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Academic Performance"
              title="KCSE Performance"
              intro="Kitui High School is consistently ranked among the top schools nationally. In the 2025 KCSE the school was ranked 13th in Kenya and 1st in Kitui County."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { icon: GraduationCap, value: '9.72', label: '2025 Mean Grade' },
              { icon: Award, value: '98.59%', label: 'University Entry' },
              { icon: Users, value: '354', label: '2025 Candidates' },
              { icon: Landmark, value: '13th', label: 'National Rank 2025' },
            ].map(({ icon: Icon, value, label }, i) => (
              <Reveal key={label} direction="up" delay={i * 0.08}>
                <div className="h-full rounded-[1.25rem] border border-[#e7dfcc] bg-white p-5 text-center">
                  <Icon size={20} className="mx-auto mb-2 text-[#143d22]" />
                  <p className="font-serif text-2xl font-bold text-neutral-900">{value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-neutral-600">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-[1.5rem] border border-[#ece4d2] bg-white p-4 sm:p-6">
              <div className="space-y-3 md:hidden">
                {kcseRows.map((row, ri) => (
                  <motion.div
                    key={row.year}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ri * 0.05 }}
                    className={`rounded-[1rem] border p-4 ${row.highlight ? 'border-[#c19a3b] bg-[#f7f4ec]' : 'border-[#e7dfcc] bg-white'}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-neutral-900">{row.year}</p>
                        <p className="mt-1 text-sm text-neutral-600">Mean {row.mean}</p>
                      </div>
                      <span className="rounded-full bg-[#143d22] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        {row.entry === '—' ? 'Not published' : `${row.entry} learners`}
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-neutral-700">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Pass</p>
                        <p className="font-semibold">{row.pass}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Entry</p>
                        <p className="font-semibold">{row.entry}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="hidden md:block">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">KCSE performance data for Kitui High School from 2020 to 2025.</caption>
                  <thead>
                    <tr className="text-left text-neutral-500">
                      <th className="px-3 py-3 font-semibold">Year</th>
                      {kcseColumns.map((c) => (
                        <th key={c} className="px-3 py-3 text-center font-semibold">{c}</th>
                      ))}
                      <th className="px-3 py-3 text-center font-semibold">Entry</th>
                      <th className="px-3 py-3 text-center font-semibold">Mean</th>
                      <th className="px-3 py-3 text-center font-semibold">C+ and above (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kcseRows.map((row, ri) => (
                      <motion.tr
                        key={row.year}
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: ri * 0.05 }}
                        className={row.highlight ? 'bg-[#f4ecd6]' : ri % 2 === 0 ? 'bg-white' : 'bg-[#f7f4ec]'}
                      >
                        <td className={`px-3 py-3 font-semibold ${row.highlight ? 'text-[#143d22]' : 'text-neutral-900'}`}>{row.year}</td>
                        {kcseColumns.map((c, i) => (
                          <td key={c} className={`px-3 py-3 text-center tabular-nums ${row.highlight ? 'font-semibold text-[#143d22]' : 'text-neutral-700'}`}>
                            {row.grades[i] ?? '—'}
                          </td>
                        ))}
                        <td className={`px-3 py-3 text-center font-semibold tabular-nums ${row.highlight ? 'text-[#143d22]' : 'text-neutral-700'}`}>{row.entry}</td>
                        <td className="px-3 py-3 text-center font-semibold text-[#143d22] tabular-nums">{row.mean}</td>
                        <td className={`px-3 py-3 text-center font-semibold tabular-nums ${row.highlight ? 'text-[#143d22]' : 'text-neutral-800'}`}>{row.pass}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                Grade distribution as released by the school and KNEC analysis for the KCSE
                sittings shown above. In the 2025 sitting, 349 of the 354 candidates who sat the
                exam earned a grade of C+ or higher, the minimum required for university admission.
                The 2024 row reflects a reported mean grade of 9.52 and national rank of 23rd; its full grade breakdown was not published.
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
                    className="relative mb-5 block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
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
                    className="font-serif text-lg font-bold leading-snug text-neutral-900 transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
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
          <Reveal className="mb-10">
            <p className="text-center text-sm text-neutral-500 mb-6">
              Sports and talent development on campus
            </p>
            <SportsMarquee />
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
                  <figcaption className="mt-3 text-xs text-neutral-500 text-center">
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
            <div className="rounded-[2rem] border border-[#ece4d2] bg-[#fcfaf5] px-6 py-12 text-center md:p-14">
              <h2 className="font-serif text-2xl font-bold leading-snug text-neutral-900 md:text-3xl">
                Experience the Kitui High School difference
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-600 md:text-base">
                Visit our campus, meet our team and discover how we shape future leaders.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#143d22] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e5631] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfaf5]"
                >
                  Book a Visit
                </Link>
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c19a3b] px-7 py-3.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#143d22] hover:text-[#143d22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfaf5]"
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
