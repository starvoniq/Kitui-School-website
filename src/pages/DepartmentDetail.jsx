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

      {/* Department Overview */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white py-28">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />

        <div className="container-page relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/academics#academic-departments')}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-forest/5 px-5 py-2 text-sm font-semibold text-forest border border-forest/20 hover:bg-forest/10 transition"
          >
            <ArrowLeft size={16} />
            Back to Academic Departments
          </button>

          {/* Header */}
          <div className="mb-16 grid items-center gap-14 lg:grid-cols-[1.25fr_0.9fr]">
            <div>
              <h1 className="text-5xl font-serif font-bold text-forest lg:text-6xl">
                {dept.name} Department
              </h1>
              <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
              <p className="mt-8 text-lg leading-9 text-slate-600">
                The {dept.name} Department is committed to inspiring curiosity, nurturing talent, and delivering academic excellence through experienced educators and practical learning.
              </p>
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 p-6 border border-gold/20">
                <p className="text-sm uppercase tracking-[0.3em] text-forest/60 font-semibold">Department Lead</p>
                <p className="mt-3 text-2xl font-bold text-forest">{dept.lead}</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative flex flex-col items-center">
                {/* Department Lead Image */}
                <div className="mb-8 flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-4 border-gold/25 overflow-hidden shadow-2xl">
                  <img 
                    src={dept.leadImage} 
                    alt={dept.lead}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm uppercase tracking-[0.3em] text-forest/60 font-semibold">Department Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects & Teachers */}
      <section className="relative overflow-hidden bg-cream py-28">
        <div className="container-page">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Curriculum
            </span>
            <h2 className="mt-6 text-4xl font-serif font-bold text-forest lg:text-5xl">
              {isDepartmentTeacherList ? 'Department Teachers' : 'Subjects & Teachers'}
            </h2>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
            <p className="mt-8 text-lg leading-9 text-slate-600">
              {isDepartmentTeacherList
                ? 'Meet the teachers in this department.'
                : 'Select a subject card to view the teachers assigned to it.'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {displayItems.map((item) => (
              <div
                key={item.subject}
                onClick={() => !isDepartmentTeacherList && setSelectedSubject(selectedSubject === item.subject ? null : item.subject)}
                role={!isDepartmentTeacherList ? 'button' : undefined}
                tabIndex={!isDepartmentTeacherList ? 0 : undefined}
                onKeyDown={(event) => {
                  if (!isDepartmentTeacherList && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault()
                    setSelectedSubject(selectedSubject === item.subject ? null : item.subject)
                  }
                }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 md:p-10 shadow-lg transition hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-gold to-yellow-300 transition group-hover:w-full" />

                <div className="absolute right-0 top-0 translate-x-10 -translate-y-8 opacity-5 text-gold">
                  <Pi size={130} />
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold/15 to-gold/5 transition group-hover:rotate-6 group-hover:scale-110 overflow-hidden border-2 border-gold/20">
                    <img 
                      src={item.image}
                      alt={item.teacher}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">Teacher</p>
                    <p className="mt-2 text-lg font-semibold text-forest">{item.teacher}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-forest">{item.subject}</h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-forest/5 p-4 border border-forest/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">Lead Instructor</p>
                    <p className="mt-2 text-lg font-bold text-forest">{item.teacher}</p>
                  </div>
                  <div className="rounded-2xl bg-gold/5 p-4 border border-gold/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Specialty</p>
                    <p className="mt-2 text-sm font-semibold text-forest">{item.specialty}</p>
                  </div>
                </div>

                {!isDepartmentTeacherList && selectedSubject === item.subject && (
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">Teachers</p>
                    <div className="mt-3 space-y-2">
                      {item.teachers.map((teacher) => (
                        <div key={teacher.name} className="flex items-center gap-3">
                          <img src={teacher.image} alt={teacher.name} className="h-10 w-10 rounded-full object-cover" />
                          <span className="text-sm font-semibold text-forest">{teacher.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />

        <div className="container-page relative">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full bg-forest/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              Approach
            </span>
            <h2 className="mt-6 text-4xl font-serif font-bold text-forest lg:text-5xl">
              Our Teaching Philosophy
            </h2>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: 'Practical Learning', desc: 'Hands-on laboratory work and real-world applications that deepen understanding.' },
              { title: 'Student-Centered', desc: 'Personalized attention and differentiated instruction for every learner.' },
              { title: 'Innovation', desc: 'Embracing technology and modern teaching methods for engagement.' },
              { title: 'Collaboration', desc: 'Group projects and peer learning that build teamwork and communication skills.' },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-gradient-to-br from-cream to-white p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-forest">{title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ Department Results ════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-cream py-28">
        <div className="container-page">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Performance Metrics
            </span>
            <h2 className="mt-6 text-4xl font-serif font-bold text-forest lg:text-5xl">
              Department Results & Excellence
            </h2>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl transition">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5">
                <TrendingUp size={32} className="text-gold" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">Average Grade</p>
              <p className="mt-3 text-4xl font-serif font-bold text-forest">{dept.results.avgGrade}</p>
              <p className="mt-2 text-sm text-slate-600">KCSE Performance</p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl transition">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5">
                <Star size={32} className="text-gold" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">University Placement</p>
              <p className="mt-3 text-4xl font-serif font-bold text-gold">{dept.results.universityPlacement}</p>
              <p className="mt-2 text-sm text-slate-600">of graduates placed</p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl transition">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5">
                <Award size={32} className="text-gold" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">Top Performers</p>
              <p className="mt-3 text-4xl font-serif font-bold text-forest">{dept.results.topPerformers}</p>
              <p className="mt-2 text-sm text-slate-600">A grade achievers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ Achievements Section ════ */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />

        <div className="container-page relative">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full bg-forest/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              Recognition
            </span>
            <h2 className="mt-6 text-4xl font-serif font-bold text-forest lg:text-5xl">
              Accomplishments & Achievements
            </h2>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
            <p className="mt-8 text-lg leading-9 text-slate-600">
              The {dept.name} Department has earned recognition for its commitment to excellence, innovation, and student success.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {dept.achievements.map((achievement, idx) => (
              <div
                key={achievement}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cream p-8 shadow-lg transition hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-gold to-yellow-300 transition group-hover:w-full" />
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 transition group-hover:scale-110">
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
