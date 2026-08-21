import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  CheckCircle, ArrowRight, BookOpen, Microscope, Monitor,
  Star, Users, TrendingUp, Trophy,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

/* ─── Department & Pathway Photos ─── */
import mathImg from '../assets/photos/Screenshot From 2026-08-07 21-50-45.png'
import engImg from '../assets/photos/Screenshot From 2026-08-07 21-51-00.png'
import technicalsImg from '../assets/photos/Screenshot From 2026-08-07 21-51-11.png'
import sciencesImg from '../assets/photos/Screenshot From 2026-08-07 21-51-23.png'
import humanitiesImg from '../assets/photos/Screenshot From 2026-08-07 21-51-33.png'
import stemImg from '../assets/photos/Screenshot From 2026-08-07 21-52-16.png'
import socialSciencesImg from '../assets/photos/Screenshot From 2026-08-07 21-52-35.png'
import artsSportsImg from '../assets/photos/Screenshot From 2026-08-07 21-52-55.png'
import resultsBg from '../assets/resultsAcademics.png'
import academicPhilosophyImage from '../assets/kitui-school-laboratory.png'

/* ─── Data ─── */
const values = [
  { icon: Star, label: 'Excellence', desc: 'Upholding the highest standards in all we do.' },
  { icon: HeartHandshake, label: 'Integrity', desc: 'Grounding ourselves in honesty and respect.' },
  { icon: TrendingUp, label: 'Innovation', desc: 'Embracing creativity and problem solving.' },
  { icon: Users, label: 'Service', desc: 'Preparing students to serve self and humanity.' },
]

const streams = [
  {
    image: stemImg,
    label: 'STEM',
    full: 'Science, Technology, Engineering & Mathematics',
    desc: 'For learners passionate about innovation, problem solving and shaping the future through science and technology.',
    color: 'from-sky-50 to-sky-100',
    border: 'border-sky-200',
  },
  {
    image: socialSciencesImg,
    label: 'Social Sciences',
    full: 'Humanities, Business & Social Sciences',
    desc: 'For learners interested in people, society, leadership, governance, business and making a difference in communities.',
    color: 'from-amber-50 to-amber-100',
    border: 'border-amber-200',
  },
  {
    image: artsSportsImg,
    label: 'Arts & Sports Science',
    full: 'Creative Arts & Physical Education',
    desc: 'For learners with a creative heart and a passion for sports, performing arts and physical education.',
    color: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
  },
]

const departments = [
  {
    image: mathImg,
    name: 'Math',
    lead: 'Mrs Wambua',
    leadImage: images.teachers.wambua,
    teachers: [
      'Mrs Wambua',
      'Mr Katee',
      'Mr Kilinda',
      'Mr Mulwa',
      'Mr Mutuku',
      'Mrs Mutua',
      'Mr Mali',
    ],
  },
  {
    image: engImg,
    name: 'Eng',
    lead: 'Mr Kavele',
    leadImage: images.teachers.kavele,
    teachers: [
      'Mrs Mutuku',
      'Mr James',
      'Md John',
      'Mr Kavele',
      'Mr Musyoki',
    ],
  },
  {
    image: technicalsImg,
    name: 'Technicals',
    lead: 'Mrs Mbuva',
    leadImage: images.teachers.mbuva,
    subjects: [
      'Computer Studies',
      'Agriculture',
      'Business Studies',
    ],
  },
  {
    image: sciencesImg,
    name: 'Sciences',
    lead: 'Mrs Gabriel',
    leadImage: images.teachers.gabriel,
    subjects: [
      'Biology',
      'Chemistry',
      'Physics',
    ],
  },
  {
    image: humanitiesImg,
    name: 'Humanities',
    lead: 'Mr Tyrus',
    leadImage: images.teachers.tyrus,
    subjects: [
      'Geography',
      'History',
      'CRE',
    ],
  },
]

const headOfClubs = 'Wasike'

const clubs = [
  { name: 'Maths', advisor: 'Mrs. Mulwa' },
  { name: "St John's", advisor: 'Mr Orina' },
  { name: 'Debate', advisor: 'BRIAN' },
  { name: 'Mjadala', advisor: 'Kitemange' },
  { name: 'Music Festivals', advisor: 'Md Mutuku and Sebastian' },
  { name: 'Agricultural club', advisor: 'Nzomo' },
  { name: 'KRA', advisor: 'Mrs Sila' },
  { name: 'Wildlife', advisor: 'Kitua' },
]

const sports = [
  { name: 'Rugby', coach: 'Mr. Kioko' },
  { name: 'Badminton', coach: 'Mr. Kitonga' },
  { name: 'Basketball', coach: 'Mr. Musyoki' },
  { name: 'Volleyball', coach: 'Mr. Mali' },
  { name: 'Hockey', coach: 'Mr Mark' },
]

const facilities = [
  { label: 'Physics Laboratory', image: images.academics.physicsLab },
  { label: 'Chemistry Laboratory', image: images.academics.chemistryLab },
  { label: 'Biology Laboratory', image: images.academics.biologyLab },
  { label: 'Computer Laboratory', image: images.academics.computerLab },
  { label: 'School Library', image: images.academics.library },
  { label: 'Smart Classrooms', image: images.academics.smartClass },
  { label: 'ICT Centre', image: images.academics.ictCentre },
]

const teachingMethods = [
  'Practical hands-on laboratory lessons',
  'ICT integration & digital smartboards',
  'Group discussions & peer collaboration',
  'Continuous assessment & constructive feedback',
  'Research, science projects & innovation fairs',
]

const support = [
  { icon: HeartHandshake, t: 'Guidance & Counselling', b: 'Emotional, academic and moral support for every learner.' },
  { icon: BookOpen, t: 'Library & Research Hub', b: 'Over 20,000 physical volumes and access to e-resources.' },
  { icon: Monitor, t: 'Digital Resource Centre', b: 'High-speed internet access for research and past paper revision.' },
  { icon: Users, t: 'Academic Mentorship', b: 'One-on-one coaching by experienced teachers for target achievement.' },
  { icon: Microscope, t: 'Career Guidance', b: 'Helping learners discover their career paths and university choices.' },
  { icon: Star, t: 'Remedial Programs', b: 'Personalized attention to help learners conquer difficult subjects.' },
]

/* ─── Grade distribution (2025) ─── */
const grades = [
  { grade: 'A', count: 17, pct: '4.80%' },
  { grade: 'A-', count: 87, pct: '24.58%' },
  { grade: 'B+', count: 109, pct: '30.79%' },
  { grade: 'B', count: 83, pct: '23.45%' },
  { grade: 'B-', count: 41, pct: '11.58%' },
  { grade: 'C+', count: 12, pct: '3.39%' },
  { grade: 'C', count: 5, pct: '1.41%' },
  ]

/* ─── KCSE Performance ─── */
const kcseColumns = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-']

const kcseRows = [
  { year: '2025', grades: [17, 87, 109, 83, 41, 12, 5, 0], entry: 354, mean: '9.72', pass: '98.59', highlight: true },
  {year: '2024', grades: [12, 65, 98, 75, 38, 15, 6, 0], entry: 309, mean: '9.45', pass: '97.73' },
  { year: '2023', grades: [2, 24, 56, 65, 42, 17, 17, 1], entry: 224, mean: '8.91', pass: '91.96' },
  { year: '2022', grades: [5, 42, 48, 50, 29, 19, 6, 0], entry: 199, mean: '9.31', pass: '96.98' },
  { year: '2021', grades: [2, 43, 52, 43, 27, 12, 1, 0], entry: 180, mean: '9.50', pass: '99.44' },
  { year: '2020', grades: [2, 22, 40, 49, 32, 8, 6, 0], entry: 159, mean: '9.15', pass: '96.23' },
  { year: '2019', grades: Array(8).fill('—'), entry: 148, mean: '8.59', pass: '91.89' },
  { year: '2018', grades: Array(8).fill('—'), entry: '—', mean: '7.63', pass: '—' },
  { year: '2015', grades: Array(8).fill('—'), entry: '—', mean: '8.50', pass: '—' },
]

export default function Academics() {

  return (
    <>
      <PageHero
        crumbs={['Home', 'Academics']}
        eyebrow="Academic Pathways & Excellence"
        title="Academics at Kitui High School"
        subtitle="Empowering learners through quality teaching, practical experiences and a proven culture of academic excellence."
        bgImage={images.heroes.academics}
      />

      {/* ════════════════════════════════════════════════════════
    ACADEMIC PHILOSOPHY
════════════════════════════════════════════════════════ */}
      <section
        id="overview"
        className="relative overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white py-16"
      >
        {/* Background decoration */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />

        <div className="container-page relative z-10 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Academic Philosophy
            </span>

            <h2 className="mt-6 text-5xl font-serif font-bold leading-tight text-forest lg:text-6xl">
              Nurturing
              <span className="text-gold"> Minds.</span>
              <br />
              Building Futures.
            </h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              At Kitui High School, we believe that every learner possesses
              extraordinary potential. Through inspiring teaching,
              character formation, innovation and academic excellence,
              we prepare responsible young men who will positively impact
              Kenya and the global community.
            </p>

            {/* Values */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="
              group
              relative
              overflow-hidden
              rounded-xl
              border border-slate-200
              bg-white
              p-3
              shadow-sm
              transition duration-500
              hover:-translate-y-1
              hover:border-gold/40
              hover:shadow-lg
            "
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={16} className="text-gold" />
                  </div>

                  <h4 className="text-sm font-bold text-forest">{label}</h4>

                  <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Floating Badge */}
            <div className="absolute -left-8 top-10 z-20 rounded-3xl bg-white px-7 py-5 shadow-2xl border">
              <p className="text-4xl font-bold text-gold">70+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">Years of Excellence</p>
            </div>

            {/* Image */}
            <div className="group overflow-hidden rounded-[36px] shadow-2xl ring-1 ring-slate-200">
              <img
                src={academicPhilosophyImage}
                alt="Students learning in the Kitui School laboratory"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
            </div>

            {/* Decorative card */}
            <div
              className="
          absolute
          -bottom-8
          right-8
          rounded-3xl
          bg-white/90
          backdrop-blur-md
          px-8
          py-6
          shadow-2xl
          border
          max-w-xs
        "
            >
              <p className="text-lg font-bold text-forest">Inspiring Excellence</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                We nurture confident, disciplined and innovative learners
                prepared for university and leadership in society.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
    CBC PATHWAYS
════════════════════════════════════════════════════════ */}
      <section
        id="pathways"
        className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-cream py-16"
      >
        {/* Background Decorations */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              CBC Senior School (Grades 10–12)
            </span>

            <h2 className="mt-6 text-5xl font-serif font-bold text-forest lg:text-6xl">
              Diverse Academic
              <span className="text-gold"> Pathways</span>
            </h2>

            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Every learner has unique strengths. Our CBC pathways empower students
              to explore their interests while preparing for university,
              entrepreneurship and future careers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto lg:max-w-3xl">
            {streams.map((s) => (
              <div
                key={s.label}
                className="
            group
            relative
            overflow-hidden
            rounded-[18px]
            border
            border-slate-200
            bg-white
            shadow-md
            transition duration-500
            hover:-translate-y-1
            hover:shadow-lg
          "
              >
                {/* Photo Banner */}
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/15 to-transparent" />
                  <h3 className="absolute bottom-2 left-4 text-lg font-serif font-bold text-white">{s.label}</h3>
                </div>

                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 line-clamp-1">{s.full}</p>

                  <p className="mt-2 text-xs leading-5 text-slate-600">{s.desc}</p>

                  <div className="my-3 h-px bg-slate-200" />

                  <Link
                    to={`/academics/streams/${encodeURIComponent(s.label.toLowerCase())}`}
                    className="
                inline-flex
                items-center
                gap-1.5
                text-xs
                font-semibold
                text-forest
                transition duration-500
                group-hover:text-gold
              "
                  >
                    Explore Pathway
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 transition duration-500 group-hover:bg-gold group-hover:text-white"
                    >
                      <ArrowRight size={12} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
    ACADEMIC DEPARTMENTS
═════════════════════════════════════════════════ */}
      <section id="academic-departments-section" className="relative overflow-hidden bg-white py-16">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f8f6ef,transparent_45%)]" />
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-forest/5 px-5 py-2 text-xs uppercase tracking-[0.3em] font-semibold text-forest">Academic Departments</span>

            <h2 id="academic-departments" className="mt-6 text-5xl font-serif font-bold text-forest lg:text-6xl scroll-mt-24">Centres of <span className="text-gold"> Excellence</span></h2>

            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">Every department is committed to inspiring curiosity, nurturing talent and delivering academic excellence through experienced educators and practical learning.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {departments.map((d) => (
              <Link
                key={d.name}
                to={`/academics/${encodeURIComponent(d.name.toLowerCase())}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Photo Banner */}
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/15 to-transparent" />
                  <h3 className="absolute bottom-2 left-4 text-lg font-serif font-bold text-white">{d.name}</h3>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col p-6 sm:p-7">

                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                      <img
                        src={d.leadImage}
                        alt={d.lead}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Head of Department</p>
                      <p className="text-sm font-semibold text-forest">{d.lead}</p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <span className="text-sm font-semibold text-forest transition-colors group-hover:text-gold">
                      Explore Department
                      <span className="ml-2">→</span>
                    </span>
                  </div>

                </div>

              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
    LEARNING FACILITIES
════════════════════════════════════════════════════════ */}
      <section
        id="facilities"
        className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-cream py-16"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Learning Facilities</span>

            <h2 className="mt-6 text-5xl font-serif font-bold text-forest lg:text-6xl">Spaces Designed <span className="text-gold"> For Learning</span></h2>

            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">Our modern learning spaces inspire curiosity, innovation and academic excellence through practical experiences.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4 xl:grid-cols-6">
            {facilities.map((facility) => (
              <div key={facility.label} className="
            group
            relative
            overflow-hidden
            rounded-[14px]
            shadow-md
            cursor-pointer
            aspect-square
          ">
                <img src={facility.image} alt={facility.label} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-xs font-serif font-bold text-white leading-tight">{facility.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
    TEACHING & LEARNING + ACADEMIC SUPPORT
════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f8f6ef,transparent_45%)]" />

        <div className="container-page relative grid gap-20 lg:grid-cols-2">

          {/* LEFT SIDE — TEACHING & LEARNING */}
          <div className="relative">

            {/* Section heading */}
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Teaching & Learning
              </span>

              <h2 className="mt-5 font-serif text-5xl font-bold leading-[1.05] text-forest lg:text-6xl">
                Modern Learning
                <span className="text-gold"> Experience</span>
              </h2>

              <div className="mt-6 h-px w-20 bg-gold" />

              <p className="mt-7 text-base leading-8 text-slate-600 lg:text-lg lg:leading-9">
                We embrace innovative teaching approaches that inspire critical thinking, collaboration, creativity and lifelong learning.
              </p>
            </div>

            {/* Teaching methods */}
            <div className="mt-10 border-t border-slate-200">

              {teachingMethods.map((method, index) => (
                <div
                  key={method}
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    border-b
                    border-slate-200
                    py-5
                    transition-all
                    duration-300
                    hover:border-gold/50
                    hover:pl-2
                  "
                >

                  {/* Number */}
                  <span
                    className="
                      w-8
                      shrink-0
                      font-serif
                      text-sm
                      font-bold
                      text-gold
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Method */}
                  <p
                    className="
                      flex-1
                      text-sm
                      leading-6
                      text-slate-700
                      transition-colors
                      duration-300
                      group-hover:text-forest
                      sm:text-base
                    "
                  >
                    {method}
                  </p>
                </div>
              ))}

            </div>

            {/* Teaching image */}
            <div className="group relative mt-12 overflow-hidden rounded-[28px]">
              <img
                src={images.heroes.academics}
                alt="Teacher"
                className="
                  h-[320px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                  lg:h-[380px]
                "
              />

              {/* Very subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/25 via-transparent to-transparent" />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>
            <span className="inline-flex rounded-full bg-forest/5 px-5 py-2 text-xs uppercase tracking-[0.3em] font-semibold text-forest">Academic Support</span>

            <h2 className="mt-6 text-5xl font-serif font-bold text-forest">Every Student <span className="text-gold"> Matters</span></h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">Beyond academics, we provide guidance, mentorship and resources that empower every learner to reach their full potential.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {support.map(({ icon: Icon, t, b }) => (
                <div key={t} className="group rounded-[16px] border bg-white p-3 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <h3 className="text-sm font-bold text-forest">{t}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KCSE RESULTS ══ */}
      <section id="results" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-8">
            <p className="section-eyebrow mb-3">Academic Excellence</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">KCSE 2025 Results</h2>
            <p className="text-slate-500 mt-3 font-sans text-sm">
              Our consistent performance is a result of hard work, discipline and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Big numbers */}
            <div className="card p-4 text-center hover:border-gold/30">
              <p className="section-eyebrow mb-1 text-xs">KCSE 2025 Results</p>
              <p className="text-4xl font-serif font-bold text-forest">9.718</p>
              <p className="text-slate-400 text-xs font-sans mt-1">Mean Grade</p>
              <div className="h-px bg-slate-100 my-2" />
              <p className="text-2xl font-serif font-bold text-gold">98.49%</p>
              <p className="text-slate-400 text-xs font-sans mt-1">University Transition</p>
              <div className="h-px bg-slate-100 my-2" />
              <p className="text-xl font-serif font-bold text-forest">354</p>
              <p className="text-slate-400 text-xs font-sans mt-1">Candidates</p>
            </div>

            {/* Grade distribution */}
            <div className="card p-4 hover:border-gold/30 hover:bg-cream/50 transition duration-500">
              <h3 className="font-serif font-bold text-forest text-sm mb-3">Grade Distribution</h3>
              <table className="w-full text-xs font-sans">
                <thead>
                  <tr className="text-[10px] uppercase tracking-wide text-slate-400 border-b border-slate-100">
                    <th className="text-left pb-1.5">Grade</th>
                    <th className="text-center pb-1.5">Students</th>
                    <th className="text-right pb-1.5">%</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((g) => (
                    <tr key={g.grade} className="border-b border-slate-50 hover:bg-gold/5 transition-colors">
                      <td className="py-1.5 font-semibold text-forest">{g.grade}</td>
                      <td className="py-1.5 text-center text-slate-500">{g.count}</td>
                      <td className="py-1.5 text-right">
                        <span className="text-gold font-semibold">{g.pct}</span>
                      </td>
                    </tr>
                  ))}
                  <tr className="font-semibold bg-forest/5 rounded-b-lg">
                    <td className="pt-1.5 pb-1.5 text-forest">Total</td>
                    <td className="pt-1.5 pb-1.5 text-center text-forest">354</td>
                    <td className="pt-1.5 pb-1.5 text-right text-forest">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Top performers / quote */}
            <div className="flex flex-col gap-3">
              <div className="card p-4 hover:border-gold/30 hover:bg-gold/5 transition duration-500">
                <h4 className="font-serif font-bold text-forest mb-2 text-[11px] uppercase tracking-wide">Top Subject Performers</h4>
                <ul className="space-y-1">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-600 font-sans group hover:text-forest hover:translate-x-1 transition duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 group-hover:scale-150 transition-transform" />
                      {s} — <span className="text-gold font-semibold">Outstanding</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-4 bg-forest-gradient text-white hover:border-gold/40 hover:shadow-card-hover transition duration-500">
                <p className="text-gold text-xl font-serif mb-1">&ldquo;</p>
                <p className="text-white/85 text-xs italic leading-relaxed font-serif font-light">
                  Excellence is our tradition. The future is our destination.
                </p>
                <p className="text-gold/80 text-[11px] mt-2 font-sans font-semibold">— Kitui High School</p>
              </div>
            </div>
          </div>

          {/* 5-Year Trend */}
          <div className="card relative mt-4 overflow-hidden p-4 hover:border-gold/30 transition duration-500">
            <img
              src={resultsBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/40" />

            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-serif font-bold text-forest text-sm drop-shadow-sm">5-Year Performance Trend</h3>
                <span className="text-[10px] uppercase tracking-wide text-slate-600 font-sans drop-shadow-sm">2015 – 2025</span>
              </div>
              <div className="overflow-x-auto rounded-lg bg-white/85 backdrop-blur-sm p-3">
                <table className="w-full text-xs font-sans min-w-[760px]">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-wide text-slate-400 border-b border-slate-100">
                      <th className="text-left pb-1.5">Year</th>
                      {kcseColumns.map((column) => (
                        <th key={column} className="text-center pb-1.5">{column}</th>
                      ))}
                      <th className="text-center pb-1.5">Entry</th>
                      <th className="text-center pb-1.5">Mean</th>
                      <th className="text-right pb-1.5">C+ and above (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kcseRows.map((row) => (
                      <tr
                        key={row.year}
                        className={`border-b border-slate-50 transition-colors ${row.highlight ? 'bg-gold/10' : 'hover:bg-gold/5'}`}
                      >
                        <td className={`py-1.5 font-semibold ${row.highlight ? 'text-gold' : 'text-forest'}`}>{row.year}</td>
                        {kcseColumns.map((column, index) => (
                          <td key={column} className={`py-1.5 text-center ${row.highlight ? 'font-semibold text-gold' : 'text-slate-500'}`}>{row.grades[index]}</td>
                        ))}
                        <td className="py-1.5 text-center text-slate-500">{row.entry}</td>
                        <td className={`py-1.5 text-center font-semibold ${row.highlight ? 'text-gold' : 'text-forest'}`}>{row.mean}</td>
                        <td className="py-1.5 text-right text-slate-400">{row.pass}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="See Where Learning Comes to Life"
        subtitle="Take a virtual tour of our facilities and experience our environment of excellence."
        primaryLabel="Explore Our Campus in 3D"
        primaryTo="/3d-tour"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  )
}