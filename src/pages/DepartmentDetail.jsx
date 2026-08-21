import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  FlaskConical, Pi, Globe, BookOpen, Wrench, ArrowLeft, Award, TrendingUp, Users, Star
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'
import heroBg from '../assets/resultsAcademics.png'

const teacher = (name, image = images.teachers.kavele) => ({ name, image })

const departments = [
  {
    icon: Pi,
    name: 'Math',
    lead: 'Mrs Wambua',
    leadImage: images.teachers.wambua,
    color: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-600 bg-blue-50',
    teachers: [
      teacher('Mrs Wambua', images.teachers.wambua),
      teacher('Mr Katee', images.teachers.katee),
      teacher('Mr Kilinda'),
      teacher('Mr Mulwa'),
      teacher('Mr Mutuku', images.teachers.mutuku),
      teacher('Mrs Mutua', images.teachers.mbuva),
      teacher('Mr Mali'),
    ],
    achievements: [
      'Top 5% performance in national mathematics examinations',
      '15 students secured A grades in KCSE Mathematics',
      'Winners of Inter-School Mathematics Olympiad 2024',
      'Multiple scholarships awarded to graduates',
      '98% university placement rate',
    ],
    results: {
      avgGrade: 'A-',
      universityPlacement: '98%',
      topPerformers: 15,
    },
  },
  {
    icon: BookOpen,
    name: 'Eng',
    lead: 'Mr Kavele',
    leadImage: images.teachers.kavele,
    color: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200',
    accentColor: 'text-purple-600 bg-purple-50',
    teachers: [
      teacher('Mrs Mutuku', images.teachers.mbuva),
      teacher('Mr James'),
      teacher('Md John'),
      teacher('Mr Kavele', images.teachers.kavele),
      teacher('Mr Musyoki'),
    ],
    achievements: [
      'Consistent high performance in English language examinations',
      'Award-winning debate team representing school nationally',
      'Student publications recognized in national media',
      'Excellence in communication and oratory skills',
      '96% university placement in humanities courses',
    ],
    results: {
      avgGrade: 'A',
      universityPlacement: '96%',
      topPerformers: 18,
    },
  },
  {
    icon: Wrench,
    name: 'Technicals',
    lead: 'Mrs Mbuva',
    leadImage: images.teachers.mbuva,
    color: 'from-amber-50 to-amber-100',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-600 bg-amber-50',
    subjects: [
      { name: 'Computer Studies', teachers: [{ name: 'Mr Kitonga', image: images.teachers.njuguna }] },
      { name: 'Agriculture', teachers: [{ name: 'Mr Nzomo', image: images.teachers.nzomo }] },
      { name: 'Business Studies', teachers: [{ name: 'Mrs Mbuva', image: images.teachers.mbuva }] },
    ],
    achievements: [
      'State-of-the-art computer labs with latest technology',
      'Innovative agricultural projects with community impact',
      'National recognition for practical skills training',
      '94% employment rate for technical graduates',
    ],
    results: {
      avgGrade: 'A-',
      universityPlacement: '94%',
      topPerformers: 12,
    },
  },
  {
    icon: FlaskConical,
    name: 'Sciences',
    lead: 'Mrs Gabriel',
    leadImage: images.teachers.gabriel,
    color: 'from-green-50 to-green-100',
    borderColor: 'border-green-200',
    accentColor: 'text-green-600 bg-green-50',
    subjects: [
      {
        name: 'Biology',
        teachers: [
          teacher('Mr Kitua'),
          teacher('Mr Mali'),
          teacher('Mr Mulozya'),
          teacher('Mrs Gabriel', images.teachers.gabriel),
          teacher('Md Makilya'),
          teacher('Md Silvester'),
          teacher('Mr Mbithuka'),
        ],
      },
      {
        name: 'Chemistry',
        teachers: [
          teacher('Mr Kilinda'),
          teacher('Mr Mulukya'),
          teacher('Mr Munene'),
          teacher('Mr Orina'),
          teacher('Mr Kitua'),
          teacher('Mr Mbithuka'),
          teacher('Md Makilya'),
        ],
      },
      {
        name: 'Physics',
        teachers: [
          teacher('Mr Mutuku', images.teachers.mutuku),
          teacher('Mr Mulwa'),
          teacher('Mr Mulukya'),
          teacher('Mr Kioko'),
        ],
      },
    ],
    achievements: [
      'Excellence in science practical examinations',
      'Winners of National Science Fair 2024',
      'Research projects recognized internationally',
      'Partnership with research institutions',
      '99% university placement rate',
    ],
    results: {
      avgGrade: 'A',
      universityPlacement: '99%',
      topPerformers: 20,
    },
  },
  {
    icon: Globe,
    name: 'Humanities',
    lead: 'Mr Tyrus',
    leadImage: images.teachers.tyrus,
    color: 'from-red-50 to-red-100',
    borderColor: 'border-red-200',
    accentColor: 'text-red-600 bg-red-50',
    subjects: [
      {
        name: 'Geography',
        teachers: [
          teacher('Md Sila'),
          teacher('Mr Sebastian'),
          teacher('Md Mulonzi'),
        ],
      },
      { name: 'History', teachers: [{ name: 'Mr Tyrus', image: images.teachers.tyrus }] },
      { name: 'CRE', teachers: [{ name: 'Mrs Wanjiru', image: images.teachers.kagema }] },
    ],
    achievements: [
      'Excellent essay writing and analytical skills development',
      'Award-winning historical research projects',
      'Student entrepreneurs launching businesses',
      'High performance in humanities subjects',
      '95% university placement rate',
    ],
    results: {
      avgGrade: 'A-',
      universityPlacement: '95%',
      topPerformers: 16,
    },
  },
]

export default function DepartmentDetail() {
  const { name } = useParams()
  const navigate = useNavigate()
  const [selectedSubject, setSelectedSubject] = useState(null)

  const dept = departments.find((d) => d.name.toLowerCase() === name.toLowerCase())

  if (!dept) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-serif font-bold text-forest">Department Not Found</h1>
        <p className="mt-4 text-slate-600">The department you're looking for doesn't exist.</p>
        <Link to="/academics#academic-departments" className="mt-6 btn-primary">
          Back to Academic Departments
        </Link>
      </div>
    )
  }

  const Icon = dept.icon
  const isDepartmentTeacherList = Array.isArray(dept.teachers)
  const displayItems = isDepartmentTeacherList
    ? dept.teachers.map((teacher) => ({
        subject: teacher.name,
        teacher: teacher.name,
        image: teacher.image,
        specialty: 'Department faculty',
      }))
    : dept.subjects.map((subject) => ({
        subject: subject.name,
        teacher: subject.teachers[0]?.name,
        image: subject.teachers[0]?.image,
        specialty: 'Subject faculty',
        teachers: subject.teachers,
      }))

  return (
    <>
      <PageHero
        crumbs={['Home', 'Academics', dept.name]}
        eyebrow={`${dept.name} Department`}
        title={`${dept.name} Department`}
        subtitle={`Led by ${dept.lead} | Dedicated to academic excellence and student success`}
        bgImage={heroBg}
      />

      {/* =========================================================
          DEPARTMENT INTRODUCTION
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-page">

          <div className="mb-10">
            <button
              onClick={() => navigate('/academics#academic-departments')}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-forest transition-colors hover:text-gold"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Academic Departments
            </button>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* TEXT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                {dept.name} Department
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-forest sm:text-6xl lg:text-7xl">
                Inspiring
                <span className="block text-gold">
                  Excellence
                </span>
              </h1>

              <div className="mt-8 h-px w-20 bg-gold" />

              <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
                The {dept.name} Department is committed to inspiring curiosity,
                nurturing talent, and delivering academic excellence through
                experienced educators and practical learning.
              </p>

              <div className="mt-10 flex items-center gap-5 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Department Lead
                  </p>

                  <p className="mt-2 font-serif text-xl font-bold text-forest">
                    {dept.lead}
                  </p>
                </div>
              </div>
            </div>

            {/* LEAD IMAGE */}
            <div className="relative lg:pl-8">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={dept.leadImage}
                  alt={dept.lead}
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
                  Department Lead
                </p>

                <p className="mt-1 font-serif text-lg font-bold text-forest">
                  {dept.lead}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SUBJECTS & TEACHERS
      ========================================================= */}
      <section className="bg-cream py-20 sm:py-24 lg:py-32">
        <div className="container-page">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            {/* SECTION INTRO */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Curriculum
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
                {isDepartmentTeacherList
                  ? 'Department Teachers'
                  : 'Subjects & Teachers'}
              </h2>

              <div className="mt-6 h-px w-16 bg-gold" />

              <p className="mt-7 max-w-md text-base leading-8 text-slate-600">
                {isDepartmentTeacherList
                  ? 'Meet the teachers in this department.'
                  : 'Select a subject card to view the teachers assigned to it.'}
              </p>
            </div>


            {/* CONTENT */}
            <div className="border-t border-slate-300">

              {displayItems.map((item, index) => (
                <div
                  key={item.subject}
                  onClick={() =>
                    !isDepartmentTeacherList &&
                    setSelectedSubject(
                      selectedSubject === item.subject
                        ? null
                        : item.subject
                    )
                  }
                  role={!isDepartmentTeacherList ? 'button' : undefined}
                  tabIndex={!isDepartmentTeacherList ? 0 : undefined}
                  onKeyDown={(event) => {
                    if (
                      !isDepartmentTeacherList &&
                      (event.key === 'Enter' || event.key === ' ')
                    ) {
                      event.preventDefault()

                      setSelectedSubject(
                        selectedSubject === item.subject
                          ? null
                          : item.subject
                      )
                    }
                  }}
                  className="
                    group
                    border-b
                    border-slate-300
                    py-8
                    transition-all
                    duration-300
                    hover:bg-white/60
                    sm:py-10
                  "
                >

                  <div className="flex gap-6 sm:gap-8">

                    {/* NUMBER */}
                    <span className="hidden w-10 shrink-0 pt-1 font-serif text-sm font-bold text-gold sm:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* IMAGE */}
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white sm:h-24 sm:w-24">
                      <img
                        src={item.image}
                        alt={item.teacher}
                        className="
                          h-full
                          w-full
                          object-cover
                          grayscale-[15%]
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-start justify-between gap-4">

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                            {isDepartmentTeacherList
                              ? 'Teacher'
                              : 'Subject'}
                          </p>

                          <h3 className="mt-2 font-serif text-2xl font-bold text-forest sm:text-3xl">
                            {item.subject}
                          </h3>
                        </div>

                        {!isDepartmentTeacherList && (
                          <span className="pt-1 text-sm text-gold transition-transform duration-300 group-hover:translate-x-1">
                            View
                          </span>
                        )}

                      </div>

                      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-600">

                        <span>
                          <span className="font-semibold text-forest">
                            Teacher:
                          </span>{' '}
                          {item.teacher}
                        </span>

                        <span>
                          <span className="font-semibold text-forest">
                            {item.specialty}
                          </span>
                        </span>

                      </div>


                      {/* SUBJECT TEACHERS */}
                      {!isDepartmentTeacherList &&
                        selectedSubject === item.subject && (
                          <div className="mt-7 border-t border-slate-200 pt-6">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                              Teachers
                            </p>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">

                              {item.teachers.map((teacher) => (
                                <div
                                  key={teacher.name}
                                  className="flex items-center gap-3"
                                >
                                  <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="h-11 w-11 rounded-full object-cover"
                                  />

                                  <span className="text-sm font-semibold text-forest">
                                    {teacher.name}
                                  </span>
                                </div>
                              ))}

                            </div>
                          </div>
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
          TEACHING PHILOSOPHY
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="container-page">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Approach
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Our Teaching Philosophy
              </h2>

              <div className="mt-6 h-px w-16 bg-gold" />
            </div>


            <div className="border-t border-slate-300">

              {[
                {
                  title: 'Practical Learning',
                  desc: 'Hands-on laboratory work and real-world applications that deepen understanding.',
                },
                {
                  title: 'Student-Centered',
                  desc: 'Personalized attention and differentiated instruction for every learner.',
                },
                {
                  title: 'Innovation',
                  desc: 'Embracing technology and modern teaching methods for engagement.',
                },
                {
                  title: 'Collaboration',
                  desc: 'Group projects and peer learning that build teamwork and communication skills.',
                },
              ].map(({ title, desc }, index) => (
                <div
                  key={title}
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
                      {title}
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
          RESULTS
      ========================================================= */}
      <section className="bg-forest py-20 text-white sm:py-24 lg:py-28">
        <div className="container-page">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Performance Metrics
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Department Results & Excellence
              </h2>

              <div className="mt-6 h-px w-16 bg-gold" />
            </div>


            <div className="grid grid-cols-1 border-t border-white/20 sm:grid-cols-3 sm:border-t-0">

              <div className="border-b border-white/20 py-7 sm:border-b-0 sm:border-l sm:px-7">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Average Grade
                </p>

                <p className="mt-3 font-serif text-5xl font-bold text-gold">
                  {dept.results.avgGrade}
                </p>

                <p className="mt-2 text-sm text-white/60">
                  KCSE Performance
                </p>
              </div>


              <div className="border-b border-white/20 py-7 sm:border-b-0 sm:border-l sm:px-7">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  University Placement
                </p>

                <p className="mt-3 font-serif text-5xl font-bold text-gold">
                  {dept.results.universityPlacement}
                </p>

                <p className="mt-2 text-sm text-white/60">
                  of graduates placed
                </p>
              </div>


              <div className="py-7 sm:border-l sm:px-7">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Top Performers
                </p>

                <p className="mt-3 font-serif text-5xl font-bold text-gold">
                  {dept.results.topPerformers}
                </p>

                <p className="mt-2 text-sm text-white/60">
                  A grade achievers
                </p>
              </div>

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
                Recognition
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Accomplishments & Achievements
              </h2>

              <div className="mt-6 h-px w-16 bg-gold" />

              <p className="mt-7 max-w-md leading-8 text-slate-600">
                The {dept.name} Department has earned recognition for its
                commitment to excellence, innovation, and student success.
              </p>
            </div>


            <div className="border-t border-slate-300">

              {dept.achievements.map((achievement, index) => (
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
        title="Ready to Excel in This Department?"
        subtitle="Explore our full academic programs and discover how we can help you achieve your goals."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Back to Academic Departments"
        secondaryTo="/academics#academic-departments"
        transparent={true}
      />
    </>
  )
}