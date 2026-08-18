import { useParams, useNavigate, Link } from 'react-router-dom'
import { FlaskConical, Globe, BookText, ArrowLeft, Lightbulb, Users, TrendingUp, Award, Rocket } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'
import heroBg from '../assets/resultsAcademics.png'

const streams = [
  {
    icon: FlaskConical,
    label: 'STEM',
    full: 'Science, Technology, Engineering & Mathematics',
    desc: 'For learners passionate about innovation, problem solving and shaping the future through science and technology.',
    longDesc: 'The STEM pathway prepares students for careers at the forefront of innovation and technological advancement. Through rigorous coursework in science and mathematics, students develop critical thinking, analytical skills, and practical problem-solving abilities essential for success in today\'s technology-driven world.',
    subjects: [
      { subject: 'Physics', teacher: 'Mr Otieno', image: images.teachers.otieno },
      { subject: 'Chemistry', teacher: 'Ms Waithera', image: images.teachers.ombado },
      { subject: 'Biology', teacher: 'Mr Mwangi', image: images.teachers.nzomo },
      { subject: 'Mathematics', teacher: 'Mrs Wambua', image: images.teachers.wambua },
    ],
    careerPaths: [
      { career: 'Engineer', desc: 'Civil, Mechanical, Electrical, Software - building and innovating infrastructure and systems' },
      { career: 'Medical Professional', desc: 'Doctor, Surgeon, Pharmacist, Dentist - dedicating to healthcare and wellness' },
      { career: 'Scientist', desc: 'Researcher, Physicist, Chemist, Biologist - advancing scientific knowledge' },
      { career: 'Technology Expert', desc: 'Software Developer, Data Scientist, Tech Innovator - shaping digital transformation' },
      { career: 'Architect', desc: 'Designing innovative and sustainable built environments' },
      { career: 'Environmental Specialist', desc: 'Addressing climate change and ecological sustainability' },
    ],
    achievements: [
      '95% university placement rate for STEM graduates',
      'Multiple award-winning science fair projects',
      'High performance in Physics and Chemistry national competitions',
      'Partnerships with leading tech companies for internships',
      'State-of-the-art laboratories and facilities',
    ],
  },
  {
    icon: Globe,
    label: 'Social Sciences',
    full: 'Humanities, Business & Social Sciences',
    desc: 'For learners interested in people, society, leadership, governance, business and making a difference in communities.',
    longDesc: 'The Social Sciences pathway equips students with understanding of human behavior, societies, economics and governance. Students develop leadership skills, critical analysis of global issues, and entrepreneurial thinking for impactful careers in business, government, education and social sectors.',
    subjects: [
      { subject: 'History', teacher: 'Mr Tyrus',image: images.teachers.tyrus },
      { subject: 'Geography', teacher: 'Ms Nduta',image: images.teachers.njeri },
      { subject: 'Business Studies', teacher: 'Mrs Mbuva', image: images.teachers.mbuva },
    ],
    careerPaths: [
      { career: 'Entrepreneur', desc: 'Starting and managing successful business ventures' },
      { career: 'Economist', desc: 'Analyzing economic trends and policies' },
      { career: 'Policy Maker', desc: 'Influencing government and institutional decisions' },
      { career: 'Business Manager', desc: 'Leading organizations and driving strategic growth' },
      { career: 'Journalist/Analyst', desc: 'Reporting and interpreting global events' },
      { career: 'Diplomat/NGO Leader', desc: 'Advancing international relations and social causes' },
    ],
    achievements: [
      'Best performing stream in business and economics competitions',
      'Student entrepreneurs launching successful ventures',
      'High success rate in commerce and economics subjects',
      'Partnerships with leading businesses for mentorship',
      'Strong leadership and public speaking development',
    ],
  },
  {
    icon: BookText,
    label: 'Arts & Sports Science',
    full: 'Creative Arts & Physical Education',
    desc: 'For learners with a creative heart and a passion for sports, performing arts and physical education.',
    longDesc: 'The Arts & Sports Science pathway nurtures creativity, physical excellence and artistic expression. Students develop confidence, discipline, collaboration and cultural awareness while pursuing excellence in the arts, sports and wellness.',
    subjects: [
      { subject: 'Art', teacher: 'Mr Njuguna',image: images.teachers.njuguna },
      { subject: 'Physical Education', teacher: 'Mrs Mbuva',image: images.teachers.mbuva },
      { subject: 'Music', teacher: 'Mr Kavele',image: images.teachers.kavele },
    ],
    careerPaths: [
      { career: 'Professional Athlete', desc: 'Competing and excelling in various sports disciplines' },
      { career: 'Artist/Designer', desc: 'Creating visual art, graphic design or architectural design' },
      { career: 'Music Professional', desc: 'Musician, composer, music producer or conductor' },
      { career: 'Sports Coach', desc: 'Training and developing athletic talent' },
      { career: 'Creative Director', desc: 'Leading creative projects in film, theater or media' },
      { career: 'Wellness Expert', desc: 'Fitness trainer, physiotherapist or health coach' },
    ],
    achievements: [
      'Championship wins in rugby, basketball and volleyball',
      'Award-winning art and music performances',
      'High participation in national sports competitions',
      'Strong cultural representation and artistic excellence',
      'Holistic development fostering confidence and leadership',
    ],
  },
]

export default function StreamsDetail() {
  const { label } = useParams()
  const navigate = useNavigate()
  const s = streams.find((x) => x.label.toLowerCase() === (label || '').toLowerCase())

  if (!s) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-serif font-bold text-forest">Stream Not Found</h1>
        <p className="mt-4 text-slate-600">The pathway you're looking for doesn't exist.</p>
        <Link to="/academics" className="mt-6 btn-primary">
          Back to Academics
        </Link>
      </div>
    )
  }

  const Icon = s.icon

  return (
    <>
      <PageHero
        crumbs={[ 'Home', 'Academics', s.label ]}
        eyebrow={`${s.label} Pathway`}
        title={s.label}
        subtitle={s.full}
        bgImage={heroBg}
      />

      {/* ════ Overview Section ════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white py-28">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />
        <div className="container-page relative z-10">
          <button
            onClick={() => navigate('/academics')}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-forest/5 px-5 py-2 text-sm font-semibold text-forest border border-forest/20 hover:bg-forest/10 transition"
          >
            <ArrowLeft size={16} />
            Back to Academics
          </button>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Academic Pathway
              </span>
              <h1 className="mt-6 text-5xl font-serif font-bold text-forest lg:text-6xl">{s.label}</h1>
              <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
              <p className="mt-8 text-lg text-slate-600 leading-9">{s.desc}</p>
              <p className="mt-6 text-slate-600 leading-9">{s.longDesc}</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 shadow-2xl">
                <Icon size={120} className="text-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ Core Subjects Section ════ */}
      <section className="relative overflow-hidden bg-cream py-28">
        <div className="container-page">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Curriculum
            </span>
            <h2 className="mt-6 text-4xl font-serif font-bold text-forest lg:text-5xl">
              Core Subjects
            </h2>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
            <p className="mt-8 text-lg leading-9 text-slate-600">
              Master these essential subjects to excel in your {s.label} pathway and prepare for university.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {s.subjects.map((sub, idx) => (
              <div
                key={sub.subject}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 md:p-10 shadow-lg transition hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-gold to-yellow-300 transition group-hover:w-full" />
                <div className="absolute right-0 top-0 translate-x-10 -translate-y-8 opacity-5 text-gold">
                  <FlaskConical size={130} />
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-gold/20 bg-gold/10">
                    <img
                      src={sub.image}
                      alt={sub.teacher}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">Teacher</p>
                    <p className="mt-2 text-lg font-semibold text-forest">{sub.teacher}</p>
                    <p className="text-sm text-gold uppercase tracking-[0.3em]">{sub.focus}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-forest">{sub.subject}</h3>
                <p className="mt-5 leading-7 text-slate-600">{sub.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ Career Paths Section ════ */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />
        <div className="container-page relative">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full bg-forest/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              Future Pathways
            </span>
            <h2 className="mt-6 text-4xl font-serif font-bold text-forest lg:text-5xl">
              Career Opportunities
            </h2>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
            <p className="mt-8 text-lg leading-9 text-slate-600">
              Graduates of the {s.label} pathway pursue diverse careers that shape industries and change the world.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.careerPaths.map(({ career, desc }) => (
              <div
                key={career}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cream p-8 shadow-lg min-h-[22rem] transition hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-5 text-gold">
                  <Rocket size={100} />
                </div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 transition group-hover:rotate-6 group-hover:scale-110">
                  <Rocket size={28} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold text-forest">{career}</h3>
                <p className="mt-3 text-slate-600 leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ Achievements Section ════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-cream py-28">
        <div className="container-page">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Excellence
            </span>
            <h2 className="mt-6 text-4xl font-serif font-bold text-forest lg:text-5xl">
              Stream Achievements
            </h2>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {s.achievements.map((achievement, idx) => (
              <div
                key={achievement}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg min-h-[14rem] transition hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-gold to-yellow-300 transition group-hover:w-full" />
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 transition group-hover:scale-110">
                    <Award size={24} className="text-gold" />
                  </div>
                  <p className="text-lg leading-8 text-slate-700 font-semibold">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Join This Pathway?"
        subtitle="Contact our admissions team to learn how to enroll and start your journey with us."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Back to Academics"
        secondaryTo="/academics"
        transparent={true}
      />
    </>
  )
}
