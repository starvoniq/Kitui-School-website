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
        crumbs={['Home', 'Academics', s.label]}
        eyebrow={`${s.label} Pathway`}
        title={s.label}
        subtitle={s.full}
        bgImage={heroBg}
      />

      {/* =========================================================
          PATHWAY INTRODUCTION
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-page">

          <div className="mb-10">
            <button
              onClick={() => navigate('/academics')}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-forest transition-colors hover:text-gold"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Academics
            </button>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Academic Pathway
              </p>

              <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] text-forest sm:text-6xl lg:text-7xl">
                {s.label}
              </h1>

              <p className="mt-5 max-w-2xl font-serif text-2xl leading-relaxed text-forest/80">
                {s.full}
              </p>

              <div className="mt-8 h-px w-20 bg-gold" />

              <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
                {s.desc}
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                {s.longDesc}
              </p>
            </div>


            {/* IMAGE-LED SIDE */}
            <div className="relative">

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={images.heroes.academics}
                  alt={s.label}
                  className="
                    h-[430px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.025]
                    sm:h-[500px]
                  "
                />
              </div>

              <div className="absolute -bottom-5 left-6 bg-white px-6 py-5 shadow-xl sm:left-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Pathway
                </p>

                <p className="mt-1 font-serif text-lg font-bold text-forest">
                  {s.label}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CORE SUBJECTS
      ========================================================= */}
      <section className="bg-cream py-20 sm:py-24 lg:py-32">
        <div className="container-page">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Curriculum
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Core Subjects
              </h2>

              <div className="mt-6 h-px w-16 bg-gold" />

              <p className="mt-7 max-w-md leading-8 text-slate-600">
                Master these essential subjects to excel in your {s.label}
                pathway and prepare for university.
              </p>
            </div>


            <div className="border-t border-slate-300">

              {s.subjects.map((sub, index) => (
                <div
                  key={sub.subject}
                  className="
                    group
                    border-b
                    border-slate-300
                    py-8
                    transition-colors
                    hover:bg-white/60
                    sm:py-10
                  "
                >

                  <div className="grid gap-6 sm:grid-cols-[60px_90px_1fr] sm:items-center">

                    <span className="font-serif text-sm font-bold text-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="h-20 w-20 overflow-hidden rounded-full border border-slate-200 bg-white">
                      <img
                        src={sub.image}
                        alt={sub.teacher}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                        Subject
                      </p>

                      <h3 className="mt-2 font-serif text-2xl font-bold text-forest sm:text-3xl">
                        {sub.subject}
                      </h3>

                      <p className="mt-3 text-sm text-slate-600">
                        <span className="font-semibold text-forest">
                          Teacher:
                        </span>{' '}
                        {sub.teacher}
                      </p>

                      {sub.focus && (
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                          {sub.focus}
                        </p>
                      )}

                      {sub.details && (
                        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                          {sub.details}
                        </p>
                      )}

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CAREER OPPORTUNITIES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-page">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Future Pathways
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Career Opportunities
              </h2>

              <div className="mt-6 h-px w-16 bg-gold" />

              <p className="mt-7 max-w-md leading-8 text-slate-600">
                Graduates of the {s.label} pathway pursue diverse careers that
                shape industries and change the world.
              </p>
            </div>


            <div className="border-t border-slate-300">

              {s.careerPaths.map(({ career, desc }, index) => (
                <div
                  key={career}
                  className="
                    group
                    grid
                    gap-4
                    border-b
                    border-slate-300
                    py-8
                    sm:grid-cols-[60px_1fr]
                  "
                >

                  <span className="font-serif text-sm font-bold text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>

                    <h3 className="font-serif text-2xl font-bold text-forest transition-colors group-hover:text-gold">
                      {career}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-8 text-slate-600">
                      {desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}
      <section className="bg-cream py-20 sm:py-24 lg:py-32">
        <div className="container-page">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Our Excellence
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Stream Achievements
              </h2>

              <div className="mt-6 h-px w-16 bg-gold" />
            </div>


            <div className="border-t border-slate-300">

              {s.achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className="
                    group
                    grid
                    gap-4
                    border-b
                    border-slate-300
                    py-7
                    sm:grid-cols-[60px_1fr]
                  "
                >

                  <span className="font-serif text-sm font-bold text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="text-lg leading-8 text-slate-700 transition-colors group-hover:text-forest">
                    {achievement}
                  </p>

                </div>
              ))}

            </div>

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