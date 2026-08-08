import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FlaskConical, Pi, Globe, BookText, Wrench, HeartHandshake,
  CheckCircle, ArrowRight, BookOpen, Microscope, Monitor,
  Star, Users, TrendingUp, Trophy,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

/* ─── Data ─── */
const values = [
  { icon: Star, label: 'Excellence', desc: 'Upholding the highest standards in all we do.', accent: 'from-[#f4b942] to-[#d46c17]', border: 'border-[#f4b942]/50', iconBg: 'bg-[#f4b942]/20', iconText: 'text-[#ffe09a]' },
  { icon: HeartHandshake, label: 'Integrity', desc: 'Grounding ourselves in honesty and respect.', accent: 'from-[#ff6f61] to-[#c43e3e]', border: 'border-[#ff6f61]/50', iconBg: 'bg-[#ff6f61]/20', iconText: 'text-[#ffd2c8]' },
  { icon: TrendingUp, label: 'Innovation', desc: 'Embracing creativity and problem solving.', accent: 'from-[#4fb3d8] to-[#1f6f89]', border: 'border-[#4fb3d8]/50', iconBg: 'bg-[#4fb3d8]/20', iconText: 'text-[#bfe7f4]' },
  { icon: Users, label: 'Service', desc: 'Preparing students to serve self and humanity.', accent: 'from-[#8bcf7b] to-[#3f7f46]', border: 'border-[#8bcf7b]/50', iconBg: 'bg-[#8bcf7b]/20', iconText: 'text-[#dff5dc]' },
]

const streams = [
  {
    icon: FlaskConical,
    label: 'STEM',
    full: 'Science, Technology, Engineering & Mathematics',
    desc: 'For learners passionate about innovation, problem solving and shaping the future through science and technology.',
    color: 'from-sky-50 to-sky-100',
    border: 'border-sky-200',
  },
  {
    icon: Globe,
    label: 'Social Sciences',
    full: 'Humanities, Business & Social Sciences',
    desc: 'For learners interested in people, society, leadership, governance, business and making a difference in communities.',
    color: 'from-amber-50 to-amber-100',
    border: 'border-amber-200',
  },
  {
    icon: BookText,
    label: 'Arts & Sports Science',
    full: 'Creative Arts & Physical Education',
    desc: 'For learners with a creative heart and a passion for sports, performing arts and physical education.',
    color: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
  },
]

const departments = [
  {
    icon: FlaskConical,
    name: 'Sciences',
    subs: ['Physics', 'Chemistry', 'Biology'],
    accent: 'from-[#f2f9f7] to-[#dcefe7]',
    border: 'border-[#b7d8c9]/70',
    iconBg: 'bg-[#e5f4eb]/80',
    textColor: 'text-[#2f4f4f]',
  },
  {
    icon: Pi,
    name: 'Mathematics',
    subs: ['Pure Mathematics', 'Applied Mathematics'],
    accent: 'from-[#fcf7ee] to-[#f3e4cb]',
    border: 'border-[#e3c89a]/70',
    iconBg: 'bg-[#f8ebd7]/80',
    textColor: 'text-[#5b452f]',
  },
  {
    icon: Globe,
    name: 'Languages',
    subs: ['English', 'Kiswahili', 'French', 'German'],
    accent: 'from-[#f4f8fc] to-[#dfeef8]',
    border: 'border-[#b8d3e8]/70',
    iconBg: 'bg-[#e7f2fb]/80',
    textColor: 'text-[#35576f]',
  },
  {
    icon: BookOpen,
    name: 'Humanities',
    subs: ['History', 'Geography', 'CRE', 'Business Studies'],
    accent: 'from-[#f7fbf2] to-[#e7f0d8]',
    border: 'border-[#c8d8aa]/70',
    iconBg: 'bg-[#edf5df]/80',
    textColor: 'text-[#4d5b33]',
  },
  {
    icon: Wrench,
    name: 'Technical & Applied',
    subs: ['Agriculture', 'Computer Studies', 'Home Science', 'Technical Drawing'],
    accent: 'from-[#fcf6fb] to-[#f1e0eb]',
    border: 'border-[#e2c3d9]/70',
    iconBg: 'bg-[#f6e9f2]/80',
    textColor: 'text-[#623a4d]',
  },
  {
    icon: HeartHandshake,
    name: 'Guidance & Counselling',
    subs: ['Academic Guidance', 'Career Guidance'],
    accent: 'from-[#f5f8fc] to-[#e1ebf6]',
    border: 'border-[#c2d2e5]/70',
    iconBg: 'bg-[#eaf2fb]/80',
    textColor: 'text-[#44586c]',
  },
]

const subjectTeachers = {
  Physics: [
    { name: 'Mr. Mutuku', role: 'Physics Teacher' },
    { name: 'Mr. Mulwa', role: 'Physics Teacher' },
    { name: 'Mr. Mulukya', role: 'Physics Teacher' },
    { name: 'Mr. Kioko', role: 'Physics Teacher' },
  ],
  Chemistry: [
    { name: 'Mr. Kilinda', role: 'Chemistry Teacher' },
    { name: 'Mr. Mulukya', role: 'Chemistry Teacher' },
    { name: 'Mr. Munene', role: 'Chemistry Teacher' },
    { name: 'Mr. Orina', role: 'Chemistry Teacher' },
    { name: 'Mr. Kitua', role: 'Chemistry Teacher' },
    { name: 'Mr. Mbithuka', role: 'Chemistry Teacher' },
    { name: 'Md. Makilya', role: 'Chemistry Teacher' },
  ],
  Biology: [
    { name: 'Mr. Kitua', role: 'Biology Teacher' },
    { name: 'Mr. Mali', role: 'Biology Teacher' },
    { name: 'Mr. Mulozya', role: 'Biology Teacher' },
    { name: 'Mrs. Gabriel', role: 'Biology Teacher' },
    { name: 'Md. Makilya', role: 'Biology Teacher' },
    { name: 'Md. Silvester', role: 'Biology Teacher' },
    { name: 'Mr. Mbithuka', role: 'Biology Teacher' },
  ],
  'Pure Mathematics': [
    { name: 'Mrs. Wambua', role: 'Mathematics Teacher' },
    { name: 'Mr. Katee', role: 'Mathematics Teacher' },
    { name: 'Mr. Kilinda', role: 'Mathematics Teacher' },
    { name: 'Mr. Mulwa', role: 'Mathematics Teacher' },
    { name: 'Mr. Mutuku', role: 'Mathematics Teacher' },
    { name: 'Mrs. Mutua', role: 'Mathematics Teacher' },
    { name: 'Mr. Mali', role: 'Mathematics Teacher' },
  ],
  'Applied Mathematics': [
    { name: 'Mrs. Wambua', role: 'Mathematics Teacher' },
    { name: 'Mr. Katee', role: 'Mathematics Teacher' },
    { name: 'Mr. Kilinda', role: 'Mathematics Teacher' },
    { name: 'Mr. Mulwa', role: 'Mathematics Teacher' },
    { name: 'Mr. Mutuku', role: 'Mathematics Teacher' },
    { name: 'Mrs. Mutua', role: 'Mathematics Teacher' },
    { name: 'Mr. Mali', role: 'Mathematics Teacher' },
  ],
  English: [
    { name: 'Mrs. Mutuku', role: 'English Teacher' },
    { name: 'Mr. James', role: 'English Teacher' },
    { name: 'Md. John', role: 'English Teacher' },
    { name: 'Mr. Kavele', role: 'English Teacher' },
    { name: 'Mr. Musyoki', role: 'English Teacher' },
  ],
  Kiswahili: [
    { name: 'Dummy Teacher', role: 'Kiswahili Teacher' },
  ],
  French: [
    { name: 'Dummy Teacher', role: 'French Teacher' },
  ],
  German: [
    { name: 'Dummy Teacher', role: 'German Teacher' },
  ],
  History: [
    { name: 'Md. Sila', role: 'Humanities Teacher' },
    { name: 'Mr. Sebastian', role: 'Humanities Teacher' },
    { name: 'Md. Mulonzi', role: 'Humanities Teacher' },
  ],
  Geography: [
    { name: 'Md. Sila', role: 'Humanities Teacher' },
    { name: 'Mr. Sebastian', role: 'Humanities Teacher' },
    { name: 'Md. Mulonzi', role: 'Humanities Teacher' },
  ],
  CRE: [
    { name: 'Md. Sila', role: 'Humanities Teacher' },
    { name: 'Mr. Sebastian', role: 'Humanities Teacher' },
    { name: 'Md. Mulonzi', role: 'Humanities Teacher' },
  ],
  'Business Studies': [
    { name: 'Md. Sila', role: 'Humanities Teacher' },
    { name: 'Mr. Sebastian', role: 'Humanities Teacher' },
    { name: 'Md. Mulonzi', role: 'Humanities Teacher' },
  ],
}

const maleTeacherImage = images.teachers.kavele
const femaleTeacherImage = images.teachers.mbuva
const dummyTeacherImage = images.academics.teacherClass

const teacherImageMap = {
  'Mrs. Wambua': images.teachers.wambua,
  'Mrs. Gabriel': images.teachers.gabriel,
  'Mrs. Mutua': images.teachers.mbuva,
  'Mrs. Mutuku': images.teachers.mbuva,
  'Md. John': images.teachers.gabriel,
  'Md. Makilya': images.teachers.gabriel,
  'Md. Silvester': images.teachers.gabriel,
  'Md. Sila': images.teachers.gabriel,
  'Md. Mulonzi': images.teachers.gabriel,
  'Mr. Kavele': images.teachers.kavele,
  'Mr. James': images.teachers.njuguna,
  'Mr. Musyoki': images.teachers.kavele,
  'Mr. Kilinda': images.teachers.otieno,
  'Mr. Mulukya': images.teachers.otieno,
  'Mr. Kioko': images.teachers.otieno,
  'Mr. Kitua': images.teachers.otieno,
  'Mr. Mbithuka': images.teachers.otieno,
  'Mr. Mulozya': images.teachers.kavele,
  'Mr. Mutuku': images.teachers.kavele,
  'Mr. Mulwa': images.teachers.kavele,
  'Mr. Mali': images.teachers.kavele,
  'Mr. Katee': images.teachers.kavele,
  'Mr. Munene': images.teachers.otieno,
  'Mr. Orina': images.teachers.otieno,
  'Mr. Sebastian': images.teachers.otieno,
}

const getTeacherImage = (name) => {
  if (teacherImageMap[name]) return teacherImageMap[name]
  if (/^Mr\./i.test(name)) return maleTeacherImage
  if (/^(Mrs|Md)\./i.test(name)) return femaleTeacherImage
  return dummyTeacherImage
}

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
  { icon: BookOpen, t: 'Library & Research Hub', b: 'Over 20,000 physical volumes and access to e-resources.' },
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

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener?.('change', updatePreference)

    return () => mediaQuery.removeEventListener?.('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

function Reveal({ children, delay = 0, className = '', as: Component = 'div' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true)
      return
    }

    if (typeof IntersectionObserver === 'undefined' || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: reducedMotion
          ? 'none'
          : `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  )
}

function AutoTypeText({ text, className = '', onComplete }) {
  const [displayedText, setDisplayedText] = useState('')
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(text)
      onComplete?.()
      return
    }

    let intervalId
    let timeoutId
    let active = true
    let index = 0

    const typeNextLetter = () => {
      if (!active) return

      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index += 1
      } else {
        window.clearInterval(intervalId)
        onComplete?.()
      }
    }

    intervalId = window.setInterval(typeNextLetter, 90)

    return () => {
      active = false
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [reducedMotion, text, onComplete])

  return (
    <span className={className}>
      {displayedText.split('').map((char, index) => {
        const isActiveLetter = index === displayedText.length - 1 && displayedText.length > 0

        return (
          <span
            key={`${char}-${index}`}
            className="inline-block"
            style={{
              animation: isActiveLetter ? 'letterJump 420ms ease-out, shimmer 1.2s ease-in-out infinite' : 'none',
              display: 'inline-block',
              textShadow: isActiveLetter ? '0 0 10px rgba(255,255,255,0.35)' : 'none',
            }}
          >
            {char}
          </span>
        )
      })}
      <style>{`
        @keyframes letterJump {
          0% { transform: translateY(0); }
          40% { transform: translateY(-7px); }
          100% { transform: translateY(0); }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </span>
  )
}

export default function Academics() {
  const [activeLine, setActiveLine] = useState(0)
  const [activeView, setActiveView] = useState('departments')
  const [selectedDept, setSelectedDept] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const reducedMotion = usePrefersReducedMotion()

  const handleSelectDepartment = (departmentName) => {
    setSelectedDept(departmentName)
    setSelectedSubject(null)
    setActiveView('department')
  }

  const handleSelectSubject = (subjectName) => {
    setSelectedSubject(subjectName)
    setActiveView('subject')
  }

  const handleBackToDepartments = () => {
    setSelectedDept(null)
    setSelectedSubject(null)
    setActiveView('departments')
  }

  const handleBackToSubjects = () => {
    setSelectedSubject(null)
    setActiveView('department')
  }

  useEffect(() => {
    if (activeView === 'department' || activeView === 'subject') {
      const section = document.getElementById('academic-departments-section')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activeView])

  const currentDepartment = departments.find((d) => d.name === selectedDept)
  const currentTeachers = (selectedSubject && subjectTeachers[selectedSubject]) || []

  const backgroundStyle = reducedMotion
    ? {
        background: 'linear-gradient(135deg, #1f2328 0%, #30363d 100%)',
      }
    : {
        background: 'linear-gradient(135deg, #1f2328 0%, #2f4f66 45%, #2f6b4f 100%)',
        animation: 'sectionGlow 5s ease-in-out infinite alternate',
      }

  return (
    <>
      <PageHero
        crumbs={['Home', 'Academics']}
        eyebrow="Academic Pathways & Excellence"
        title="Academics at Kitui High School"
        subtitle="Empowering learners through quality teaching, practical experiences and a proven culture of academic excellence."
        bgImage={images.heroes.academics}
      />

      {/* ══ PHILOSOPHY ══ */}
      <section id="overview" className="relative overflow-hidden py-24 text-white sm:py-28 lg:py-32" style={backgroundStyle}>
        <div className="absolute inset-0 bg-slate-950/25" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(31, 35, 40, 0.95) 0%, rgba(47, 79, 102, 0.7) 35%, rgba(255, 255, 255, 0.25) 70%, rgba(255, 255, 255, 0) 100%)' }} />
        <div className="absolute left-[-6rem] top-[-3rem] h-72 w-72 rounded-full bg-[#8da1b4]/20 blur-3xl" />
        <div className="absolute bottom-[-2rem] right-[-2rem] h-80 w-80 rounded-full bg-[#2f6b4f]/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <Reveal delay={0.08}>
              <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f7d58b] backdrop-blur">
                Our Academic Philosophy
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#f7d58b] to-[#ffd978]" />
            </Reveal>
            <Reveal delay={0.24}>
              <h2 className="mb-5 text-4xl font-serif font-bold leading-tight sm:text-5xl lg:text-6xl">
                <span className="inline-block">
                  <AutoTypeText
                    text="Nurturing Minds."
                    onComplete={() => setActiveLine(1)}
                  />
                </span>
                <br />
                <span className="inline-block text-[#f7d58b]">
                  {activeLine >= 1 ? (
                    <AutoTypeText text="Building Futures." />
                  ) : null}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="mb-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                At Kitui High School, we believe that every learner has the potential to excel. We
                provide a supportive environment that promotes curiosity, critical thinking, creativity
                and character formation to shape responsible young men who are ready to serve both the
                nation and the world.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, label, desc, accent, border, iconBg, iconText }, index) => (
                <Reveal key={label} delay={0.45 + index * 0.12}>
                  <div className={`group relative flex h-full items-start gap-3 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/85 p-4 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:${border} hover:bg-slate-900/95 hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br opacity-80 transition duration-300 group-hover:opacity-95" style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                    <div className="absolute inset-0 bg-slate-950/35" />
                    <div className="relative z-10 flex w-full items-start gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${border} ${iconBg} transition duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                        <Icon className={iconText} size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-200">{desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.28} className="w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-white/20">
              <img
                src={images.academics.studentsClass}
                alt="Students in Class"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-white">
                <p className="text-lg font-semibold text-forest">Excellence in every lesson</p>
                <p className="mt-1 text-sm text-slate-600">A learning environment shaped for curiosity, discipline and purpose.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes sectionGlow {
          0% {
            background: linear-gradient(135deg, #1f2328 0%, #30363d 50%, #2f4f66 100%);
          }
          50% {
            background: linear-gradient(135deg, #2f4f66 0%, #3f5f73 50%, #2f6b4f 100%);
          }
          100% {
            background: linear-gradient(135deg, #2f6b4f 0%, #3d5f4b 50%, #1f2328 100%);
          }
        }
      `}</style>

      {/* ══ CBC STREAMS ══ */}
      <section id="departments" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">CBC Senior School (Grades 10 – 12)</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Diverse Pathways for Every Learner</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-sans text-sm">
              Offering diverse content pathways to help learners discover their strengths and prepare for the future.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {streams.map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center mb-5 shadow-sm border border-forest/10">
                  <s.icon className="text-forest" size={26} />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-1 font-sans">{s.full}</p>
                <h3 className="font-serif font-bold text-forest text-xl mb-3">{s.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{s.desc}</p>
                <Link to="/contact" className="btn-ghost text-sm inline-flex">
                  Inquire About Pathway <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ACADEMIC DEPARTMENTS ══ */}
      <section id="academic-departments-section" className="section-pad bg-[#f8f5eb]">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Academic Departments</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Our Departments</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              Our departments are dedicated to delivering quality education and nurturing excellence in every learner.
            </p>
          </div>

          {activeView === 'departments' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {departments.map((d) => (
                <button
                  key={d.name}
                  type="button"
                  onClick={() => handleSelectDepartment(d.name)}
                  className={`relative overflow-hidden rounded-2xl border p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${d.border} bg-gradient-to-br ${d.accent}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${d.iconBg} border border-white/40 flex items-center justify-center mx-auto mb-3`}>
                    <d.icon className={d.textColor} size={22} />
                  </div>
                  <p className={`font-serif font-semibold ${d.textColor} text-sm mb-2`}>{d.name}</p>
                  <ul className="space-y-0.5">
                    {d.subs.map((s) => (
                      <li key={s} className="text-[11px] text-slate-500 font-sans">{s}</li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          )}

          {activeView === 'department' && currentDepartment && (
            <div className="mt-8 rounded-[28px] border border-[#e8dcc4] bg-white/95 p-6 shadow-xl">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  type="button"
                  onClick={handleBackToDepartments}
                  className="inline-flex items-center gap-2 self-start rounded-full border border-[#e8dcc4] bg-[#fffdf7] px-4 py-2 text-sm font-semibold text-forest transition hover:border-gold/40 hover:bg-[#fef8e8]"
                >
                  ← Back to departments
                </button>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Selected Department</p>
                  <h3 className="font-serif font-semibold text-forest text-2xl">{currentDepartment.name}</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {currentDepartment.subs.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => handleSelectSubject(subject)}
                    className="rounded-2xl border border-[#efe4c8] bg-[#fffdf7] p-5 text-left shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-card-hover"
                  >
                    <h4 className="font-serif font-semibold text-forest text-lg mb-2">{subject}</h4>
                    <p className="text-sm text-slate-600 font-sans">
                      Tap to view the teachers supporting this subject area.
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeView === 'subject' && selectedSubject && (
            <div className="mt-8 rounded-[28px] border border-[#e8dcc4] bg-white/95 p-6 shadow-xl">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Teachers for</p>
                  <h4 className="font-serif font-semibold text-forest text-xl">{selectedSubject}</h4>
                </div>
                <p className="text-sm text-slate-600 font-sans">Experienced teachers supporting this subject area.</p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {currentTeachers.map((teacher) => {
                  const teacherImage = getTeacherImage(teacher.name)

                  return (
                    <div key={teacher.name} className="overflow-hidden rounded-2xl border border-[#efe4c8] bg-white shadow-sm">
                      <div className="overflow-hidden bg-slate-100">
                        <img
                          src={teacherImage}
                          alt={teacher.name}
                          className="h-48 w-full object-cover object-top"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-serif font-semibold text-forest">{teacher.name}</h5>
                        <p className="mt-1 text-sm text-slate-600 font-sans">{teacher.role}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 flex justify-start">
                <button
                  type="button"
                  onClick={handleBackToSubjects}
                  className="inline-flex items-center gap-2 rounded-full border border-[#e8dcc4] bg-[#fffdf7] px-4 py-2 text-sm font-semibold text-forest transition hover:border-gold/40 hover:bg-[#fef8e8]"
                >
                  ← Back to {currentDepartment?.name || 'departments'}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ LEARNING FACILITIES ══ */}
      <section id="facilities" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Learning Facilities</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">State-of-the-Art Facilities</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              Well-equipped facilities that support practical learning and academic growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((f) => (
              <div
                key={f.label}
                className="rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer relative shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={f.image}
                  alt={f.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <p className="text-white text-xs font-semibold font-sans">{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEACHING & SUPPORT ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          {/* Teaching & Learning */}
          <div>
            <p className="section-eyebrow mb-3">Teaching & Learning</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-5">Modern Teaching Methods</h2>
            <p className="section-sub mb-6">
              We use modern teaching methods that inspire curiosity, creativity and independent
              thinking at every level.
            </p>
            <ul className="space-y-3 mb-6">
              {teachingMethods.map((m) => (
                <li key={m} className="flex items-center gap-3">
                  <CheckCircle className="text-gold shrink-0" size={18} />
                  <span className="text-sm text-slate-600 font-sans">{m}</span>
                </li>
              ))}
            </ul>
            {/* Photo */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] relative group shadow-md">
              <img
                src={images.academics.teacherClass}
                alt="Teacher with students in classroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Academic Support */}
          <div>
            <p className="section-eyebrow mb-3">Academic Support</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-5">We Go Beyond Teaching</h2>
            <div className="grid grid-cols-2 gap-4">
              {support.map(({ icon: Icon, t, b }) => (
                <div key={t} className="card p-4 hover:border-gold/30">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-3">
                    <Icon className="text-gold" size={18} />
                  </div>
                  <h4 className="font-semibold text-forest text-sm mb-1">{t}</h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KCSE RESULTS ══ */}
      <section id="results" className="section-pad bg-white">
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
            <div className="card p-6 hover:border-gold/30">
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
                    <tr key={g.grade} className="border-b border-slate-50">
                      <td className="py-2 font-semibold text-forest">{g.grade}</td>
                      <td className="py-2 text-center text-slate-500">{g.count}</td>
                      <td className="py-2 text-right">
                        <span className="text-gold font-semibold">{g.pct}</span>
                      </td>
                    </tr>
                  ))}
                  <tr className="font-semibold">
                    <td className="pt-3 text-forest">Total</td>
                    <td className="pt-3 text-center text-forest">354</td>
                    <td className="pt-3 text-right text-forest">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Top performers / quote */}
            <div className="flex flex-col gap-4">
              <div className="card p-6 hover:border-gold/30">
                <h4 className="font-serif font-bold text-forest mb-3">Top Subject Performers</h4>
                <ul className="space-y-2">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-600 font-sans">
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      {s} — Outstanding results
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6 bg-forest-gradient text-white hover:border-gold/30">
                <p className="text-gold text-3xl font-serif mb-2">&ldquo;</p>
                <p className="text-white/80 text-sm italic leading-relaxed">
                  Excellence is our tradition. The future is our destination.
                </p>
                <p className="text-gold/70 text-xs mt-3 font-sans">— Kitui High School</p>
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
        bgImage={images.gate}
      />
    </>
  )
}
