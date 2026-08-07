import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  CheckCircle, ArrowRight, Microscope, Monitor,
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
    details: [
      { subject: 'Pure Mathematics', teacher: 'Mrs Wambua' },
      { subject: 'Applied Mathematics', teacher: 'Mr Kavele' },
      { subject: 'Statistics & Probability', teacher: 'Miss Amina' },
    ],
  },
  {
    image: engImg,
    name: 'Eng',
    lead: 'Mr Kavele',
    details: [
      { subject: 'English Literature', teacher: 'Mr Kavele' },
      { subject: 'English Composition', teacher: 'Miss Njeri' },
      { subject: 'Communication Skills', teacher: 'Ms Ombado' },
    ],
  },
  {
    image: technicalsImg,
    name: 'Technicals',
    lead: 'Mrs Mbuva',
    details: [
      { subject: 'Computer Studies', teacher: 'Mr Njuguna' },
      { subject: 'Agriculture', teacher: 'Mr Nzomo' },
      { subject: 'Home Science', teacher: 'Mrs Kagema' },
    ],
  },
  {
    image: sciencesImg,
    name: 'Sciences',
    lead: 'Mrs Gabriel',
    details: [
      { subject: 'Physics', teacher: 'Mr Otieno' },
      { subject: 'Chemistry', teacher: 'Ms Waithera' },
      { subject: 'Biology', teacher: 'Mr Mwangi' },
    ],
  },
  {
    image: humanitiesImg,
    name: 'Humanities',
    lead: 'Mr Tairus',
    details: [
      { subject: 'History', teacher: 'Mr Tairus' },
      { subject: 'Geography', teacher: 'Ms Nduta' },
      { subject: 'CRE', teacher: 'Mrs Wanjiru' },
      { subject: 'Business Studies', teacher: 'Ms Thuo' },
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
  { label: 'Auditorium & Arts', image: images.academics.auditorium },
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
  { icon: CheckCircle, t: 'Library & Research Hub', b: 'Over 20,000 physical volumes and access to e-resources.' },
  { icon: Monitor, t: 'Digital Resource Centre', b: 'High-speed internet access for research and past paper revision.' },
  { icon: Users, t: 'Academic Mentorship', b: 'One-on-one coaching by experienced teachers for target achievement.' },
  { icon: Microscope, t: 'Career Guidance', b: 'Helping learners discover their career paths and university choices.' },
  { icon: Star, t: 'Remedial Programs', b: 'Personalized attention to help learners conquer difficult subjects.' },
]

/* ─── Grade distribution ─── */
const grades = [
  { grade: 'A', count: 17, pct: '4.80%' },
  { grade: 'A-', count: 87, pct: '24.58%' },
  { grade: 'B+', count: 109, pct: '30.79%' },
  { grade: 'B', count: 83, pct: '23.45%' },
  { grade: 'B-', count: 41, pct: '11.58%' },
  { grade: 'C+', count: 12, pct: '3.39%' },
  { grade: 'C', count: 5, pct: '1.41%' },
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
        className="relative overflow-hidden bg-cream py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_45%)]" />
        <div className="container-page relative z-10 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Academic Philosophy
            </span>

            <h2 className="section-title mt-6">
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
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {values.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-slate-200
              bg-white
              p-6
              shadow-lg
              transition
              duration-500
              hover:-translate-y-2
              hover:border-gold/40
              hover:shadow-2xl
            "
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold to-yellow-300 scale-x-0 origin-left transition duration-500 group-hover:scale-x-100" />

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={24} className="text-gold" />
                  </div>

                  <h4 className="text-lg font-bold text-forest">{label}</h4>

                  <p className="mt-2 text-sm leading-7 text-slate-500">{desc}</p>
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
                src={images.academics.studentsClass}
                alt="Students in Class"
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
        id="departments"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(249,234,185,0.28),rgba(241,245,233,0.6))] py-28"
      >
        {/* Background Decorations */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-forest/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,209,143,0.16),transparent_50%)]" />

        <div className="container-page relative">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              CBC Senior School (Grades 10–12)
            </span>

            <h2 className="section-title mt-6">
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

          <div className="grid gap-10 lg:grid-cols-3">
            {streams.map((s) => (
              <div
                key={s.label}
                className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white/90
            backdrop-blur-xl
            shadow-xl
            transition
            duration-500
            hover:-translate-y-3
            hover:shadow-2xl
          "
              >
                {/* Top Gradient */}
                <div
                  className={`
              h-2
              bg-gradient-to-r
              ${s.color}
            `}
                />

                {/* Photo Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/10 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/80">{s.full}</p>
                    <h3 className="mt-1 text-3xl font-serif font-bold text-white">{s.label}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="leading-8 text-slate-600">{s.desc}</p>

                  <div className="my-8 h-px bg-slate-200" />

                  <Link
                    to={`/academics/streams/${encodeURIComponent(s.label.toLowerCase())}`}
                    className="
                inline-flex
                items-center
                gap-3
                font-semibold
                text-forest
                transition
                duration-500
                group-hover:text-gold
              "
                  >
                    Explore Pathway
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 transition duration-500 group-hover:bg-gold group-hover:text-white"
                    >
                      <ArrowRight size={18} />
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
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-slate-50 py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,243,224,0.88),transparent_45%)]" />
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-forest/10 px-5 py-2 text-xs uppercase tracking-[0.3em] font-semibold text-forest">Academic Departments</span>

            <h2 className="section-title mt-6">Centres of <span className="text-gold"> Excellence</span></h2>

            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">Every department is committed to inspiring curiosity, nurturing talent and delivering academic excellence through experienced educators and practical learning.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((d) => (
              <div
                key={d.name}
                className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-slate-200
            bg-white
            shadow-lg
            transition
            duration-500
            hover:-translate-y-3
            hover:border-gold/40
            hover:shadow-2xl
          "
              >
                <div className="absolute left-0 top-0 z-10 h-1 w-0 bg-gradient-to-r from-gold to-yellow-300 transition duration-500 group-hover:w-full" />

                {/* Photo Banner */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-white">{d.name}</h3>
                </div>

                <div className="p-8">
                  <p className="text-sm text-slate-500">Department Lead: <span className="font-semibold text-forest">{d.lead}</span></p>

                  <Link
                    to={`/academics/${encodeURIComponent(d.name.toLowerCase())}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-4 py-2 text-sm font-semibold text-forest transition duration-500 hover:border-forest hover:bg-forest/10"
                  >
                    View all details
                    <ArrowRight size={16} className="text-gold transition duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
    LEARNING FACILITIES
════════════════════════════════════════════════════════ */}
      <section
        id="facilities"
        className="relative overflow-hidden bg-cream py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,246,239,0.12),transparent_35%)]" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-forest/10 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Learning Facilities</span>

            <h2 className="section-title mt-6">Spaces Designed <span className="text-gold"> For Learning</span></h2>

            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">Our modern learning spaces inspire curiosity, innovation and academic excellence through practical experiences.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {facilities.map((facility) => (
              <div key={facility.label} className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            shadow-2xl
            cursor-pointer
            aspect-[4/5]
            ring-1 ring-white/10
            transition
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_25px_70px_rgba(15,23,42,0.22)]
          ">
                <img src={facility.image} alt={facility.label} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-95 group-hover:opacity-80 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-5 h-1 w-12 rounded-full bg-gold transition duration-500 group-hover:w-24" />
                  <h3 className="text-2xl font-serif font-bold text-white">{facility.label}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-7 text-white/80 transition-all duration-500 group-hover:max-h-40">Modern facilities providing students with practical exposure and an engaging learning environment.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
    TEACHING & LEARNING + ACADEMIC SUPPORT
════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-slate-50 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,246,239,0.9),transparent_45%)]" />

        <div className="container-page relative grid gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.3em] font-semibold text-gold">Teaching & Learning</span>

            <h2 className="section-title mt-6">Modern Learning <span className="text-gold"> Experience</span></h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">We embrace innovative teaching approaches that inspire critical thinking, collaboration, creativity and lifelong learning.</p>

            <div className="relative mt-12">
              <div className="absolute left-5 top-4 h-full w-px bg-gold/30" />
              {teachingMethods.map((method) => (
                <div key={method} className="group relative mb-10 flex items-start gap-6">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gold shadow-lg transition duration-500 group-hover:scale-110">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div className="flex-1 rounded-2xl border bg-white p-5 shadow-sm transition duration-500 group-hover:border-gold/30 group-hover:shadow-lg">
                    <p className="text-slate-700 leading-7">{method}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="group relative mt-16 overflow-hidden rounded-[32px] shadow-2xl">
              <img src={images.academics.teacherClass} alt="Teacher" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <span className="inline-flex rounded-full bg-forest/5 px-5 py-2 text-xs uppercase tracking-[0.3em] font-semibold text-forest">Academic Support</span>

            <h2 className="section-title mt-6">Every Student <span className="text-gold"> Matters</span></h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />

            <p className="mt-8 text-lg leading-9 text-slate-600">Beyond academics, we provide guidance, mentorship and resources that empower every learner to reach their full potential.</p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {support.map(({ icon: Icon, t, b }) => (
                <div key={t} className="group rounded-[28px] border bg-white p-7 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-2xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={28} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-forest">{t}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KCSE RESULTS ══ */}
      <section id="results" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Academic Excellence</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">KCSE 2025 Results</h2>
            <p className="text-slate-500 mt-3 font-sans text-sm">
              Our consistent performance is a result of hard work, discipline and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Big numbers */}
            <div className="card p-8 text-center hover:border-gold/30">
              <p className="section-eyebrow mb-2">KCSE 2025 Results</p>
              <p className="text-7xl font-serif font-bold text-forest">9.718</p>
              <p className="text-slate-400 text-sm font-sans mt-1">Mean Grade</p>
              <div className="h-px bg-slate-100 my-4" />
              <p className="text-4xl font-serif font-bold text-gold">98.49%</p>
              <p className="text-slate-400 text-sm font-sans mt-1">University Transition</p>
              <div className="h-px bg-slate-100 my-4" />
              <p className="text-3xl font-serif font-bold text-forest">354</p>
              <p className="text-slate-400 text-sm font-sans mt-1">Candidates</p>
            </div>

            {/* Grade distribution */}
            <div className="card p-6 hover:border-gold/30 hover:bg-cream/50 transition duration-500">
              <h3 className="font-serif font-bold text-forest text-lg mb-5">Grade Distribution</h3>
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-slate-400 border-b border-slate-100">
                    <th className="text-left pb-2">Grade</th>
                    <th className="text-center pb-2">Students</th>
                    <th className="text-right pb-2">%</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((g) => (
                    <tr key={g.grade} className="border-b border-slate-50 hover:bg-gold/5 transition-colors duration-500">
                      <td className="py-2.5 font-semibold text-forest">{g.grade}</td>
                      <td className="py-2.5 text-center text-slate-500">{g.count}</td>
                      <td className="py-2.5 text-right">
                        <span className="text-gold font-semibold">{g.pct}</span>
                      </td>
                    </tr>
                  ))}
                  <tr className="font-semibold bg-forest/5 rounded-b-lg">
                    <td className="pt-3 pb-2 text-forest">Total</td>
                    <td className="pt-3 pb-2 text-center text-forest">354</td>
                    <td className="pt-3 pb-2 text-right text-forest">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Top performers / quote */}
            <div className="flex flex-col gap-4">
              <div className="card p-6 hover:border-gold/30 hover:bg-gold/5 transition duration-500">
                <h4 className="font-serif font-bold text-forest mb-3 text-sm uppercase tracking-wide">Top Subject Performers</h4>
                <ul className="space-y-2">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-600 font-sans group hover:text-forest hover:translate-x-1 transition duration-500">
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-150 transition-transform duration-500" />
                      {s} — <span className="text-gold font-semibold">Outstanding</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6 bg-forest-gradient text-white hover:border-gold/40 hover:shadow-card-hover transition duration-500">
                <p className="text-gold text-3xl font-serif mb-2">&ldquo;</p>
                <p className="text-white/85 text-sm italic leading-relaxed font-serif font-light">
                  Excellence is our tradition. The future is our destination.
                </p>
                <p className="text-gold/80 text-xs mt-3 font-sans font-semibold">— Kitui High School</p>
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