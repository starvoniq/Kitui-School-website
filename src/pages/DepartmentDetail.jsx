import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  FlaskConical, Pi, Globe, BookOpen, Wrench, ArrowLeft, Award, TrendingUp, Users, Star, Languages, ClipboardCheck, GraduationCap
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'
import heroBg from '../assets/resultsAcademics.png'

const teacher = (name, image = images.teachers.kavele) => ({ name, image })

const departments = [
  {
    icon: Pi,
    name: 'Mathematics',
    slug: 'math',
    aliases: ['math', 'mathematics'],
    lead: 'Mrs Phylis Wambua',
    leadImage: images.teachers.wambua,
    color: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-600 bg-blue-50',
    teachers: [
      teacher('Mrs Phylis Wambua', images.teachers.wambua),
      teacher('Mr Katee', images.teachers.katee),
      teacher('Mr Kilinda'),
      teacher('Mr Mulwa'),
      teacher('Mr Mutuku', images.teachers.mutuku),
      teacher('Mrs Mutua', images.teachers.mbuva),
      teacher('Mr Mali'),
    ],
    achievements: [
      'Flagship academic subject and second-best ranking mathematics department nationally',
      'Consistent outstanding performance in KCSE Mathematics examinations',
      'Winners of Inter-School Mathematics Olympiad and regional mathematical contests',
      'Over 98.5% university qualification rate for mathematics students',
      'Innovative problem-solving methodologies unlocking endless academic possibilities',
    ],
    results: {
      avgGrade: 'A-',
      universityPlacement: '98.6%',
      topPerformers: 104,
    },
  },
  {
    icon: BookOpen,
    name: 'English',
    slug: 'eng',
    aliases: ['eng', 'english'],
    lead: 'Mr John Kavele',
    leadImage: images.teachers.kavele,
    color: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200',
    accentColor: 'text-purple-600 bg-purple-50',
    teachers: [
      teacher('Mr John Kavele', images.teachers.kavele),
      teacher('Mrs Mutuku', images.teachers.mbuva),
      teacher('Mr James'),
      teacher('Md John'),
      teacher('Mr Musyoki'),
    ],
    achievements: [
      'Achieved a stellar KCSE 2025 Mean Score of 10.19',
      'Award-winning debate team representing the school at the national level',
      'Empowering learners with critical thinking, creativity, and effective communication',
      'Exceptional performance in English language mastery and literary analysis',
      '96% university placement in humanities, law, and communication fields',
    ],
    results: {
      avgGrade: '10.19',
      universityPlacement: '98.5%',
      topPerformers: 86,
    },
  },
  {
    icon: Languages,
    name: 'Kiswahili',
    slug: 'kiswahili',
    aliases: ['kiswahili', 'swahili', 'idara-ya-kiswahili'],
    lead: 'Mrs Mugambi',
    leadImage: images.teachers.mugambi,
    color: 'from-amber-50 to-amber-100',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-600 bg-amber-50',
    teachers: [
      teacher('Mrs Mugambi (Mkuu wa Idara)', images.teachers.mugambi),
      teacher('Mr Kitemange'),
      teacher('Mrs Wasike'),
      teacher('Mrs Mugombi'),
      teacher('Walimu wa Idara ya Kiswahili'),
    ],
    achievements: [
      'Kukuza vipawa vya wanafunzi kupitia vilabu vya lugha na mijadala (Mjadala)',
      'Uhamasishaji wa uandishi wa kidijitali, blogu, na majarida ya shule',
      'Kukuza umilisi wa lugha ya Kiswahili kitaifa na kimataifa',
      'Kujenga uzalendo, utambulisho na mshikamano thabiti wa kitaifa kupitia lugha',
      'Matokeo bora na ufaulu wa hali ya juu katika mtihani wa KCSE',
    ],
    results: {
      avgGrade: 'B+',
      universityPlacement: '97.5%',
      topPerformers: 72,
    },
  },
  {
    icon: FlaskConical,
    name: 'Sciences',
    slug: 'sciences',
    aliases: ['sciences', 'science'],
    lead: 'Mrs Lilian Gabriel',
    leadImage: images.teachers.gabriel,
    color: 'from-green-50 to-green-100',
    borderColor: 'border-green-200',
    accentColor: 'text-green-600 bg-green-50',
    subjects: [
      {
        name: 'Biology (Mean: 9.60)',
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
        name: 'Chemistry (Mean: 8.10)',
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
        name: 'Physics (Mean: 8.65)',
        teachers: [
          teacher('Mr Mutuku', images.teachers.mutuku),
          teacher('Mr Mulwa'),
          teacher('Mr Mulukya'),
          teacher('Mr Kioko'),
        ],
      },
    ],
    achievements: [
      'Biology recorded an outstanding KCSE mean score of 9.60',
      'Physics earned a commendable KCSE mean score of 8.65',
      'Chemistry achieved a solid KCSE mean score of 8.10',
      'Hands-on practical laboratory work nurturing analytical minds and scientific inquiry',
      'Consistent championship in the Kenya Science & Engineering Fair (KSEF)',
    ],
    results: {
      avgGrade: 'A-',
      universityPlacement: '99%',
      topPerformers: 94,
    },
  },
  {
    icon: Globe,
    name: 'Humanities',
    slug: 'humanities',
    aliases: ['humanities', 'humanity', 'social-sciences'],
    lead: 'Mr Kyalo Tirus',
    leadImage: images.teachers.tyrus,
    color: 'from-red-50 to-red-100',
    borderColor: 'border-red-200',
    accentColor: 'text-red-600 bg-red-50',
    subjects: [
      {
        name: 'Geography',
        teachers: [
          teacher('Mr Sebastian (HOS Geography)', images.teachers.kavele),
          teacher('Ms Silo'),
          teacher('Ms Mulonzi (Dean of Studies)', images.teachers.mulonzi),
        ],
      },
      {
        name: 'History & Citizenship',
        teachers: [
          teacher('Mr Kitemange (HOS History)'),
          teacher('Mrs Mbithi'),
          teacher('Ms Kanyolu'),
          teacher('Ms Mutie'),
          teacher('Mr Simbo (B.O.M)'),
          teacher('Mr Shiholo (B.O.M)'),
          teacher('Mrs Mugombi'),
        ],
      },
      {
        name: 'Christian Religious Education (CRE)',
        teachers: [
          teacher('Ms Job (HOS CRE)'),
          teacher('Mr Kimani'),
          teacher('Mrs Wasike'),
          teacher('Ms Muema'),
          teacher('Mr Mbuvi (B.O.M)'),
          teacher('Ms Charity'),
          teacher('Ms Catherine'),
        ],
      },
      {
        name: 'Community Service Learning (CSL)',
        teachers: [
          teacher('Humanities Faculty & CSL Coordinators'),
        ],
      },
    ],
    achievements: [
      'Over 300 CBC Senior School learners transitioning into Humanities & Social Sciences',
      'Annual educational field trips to Coast region for History and Geography exploration',
      'Successful integration of compulsory Community Service Learning (CSL)',
      'High analytical skills and essay writing excellence across all humanities disciplines',
      '97% university placement into law, international relations, and humanities',
    ],
    results: {
      avgGrade: 'A-',
      universityPlacement: '97%',
      topPerformers: 90,
    },
  },
  {
    icon: Wrench,
    name: 'Technical & Creative',
    slug: 'technicals',
    aliases: ['technicals', 'technical', 'technical-creative', 'technical & creative'],
    lead: 'Mrs Beatrice Mbuva',
    leadImage: images.teachers.mbuva,
    color: 'from-amber-50 to-amber-100',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-600 bg-amber-50',
    subjects: [
      {
        name: 'Computer Studies (KCSE Mean: 10.87)',
        teachers: [
          teacher('Mr Patrick'),
          teacher('Mr Kavoi'),
          teacher('Mr Kitonga', images.teachers.njuguna),
          teacher('Mr Mwendwa Mark'),
        ],
      },
      {
        name: 'French (KCSE Mean: 10.36)',
        teachers: [
          teacher('Ms Musyoka'),
        ],
      },
      {
        name: 'Agriculture (KCSE Mean: 9.05)',
        teachers: [
          teacher('Mr Munyao'),
          teacher('Mr Nzomo', images.teachers.nzomo),
          teacher('Mrs Gabriel', images.teachers.gabriel),
          teacher('Mr Kisangau'),
        ],
      },
      {
        name: 'Business Studies (KCSE Mean: 7.85)',
        teachers: [
          teacher('Mrs Sila'),
          teacher('Mrs Mbuva', images.teachers.mbuva),
          teacher('Mr Kyalo D'),
          teacher('Ms Sharon'),
          teacher('Mr Dominic'),
          teacher('Mr Kelvin'),
        ],
      },
      {
        name: 'Music & Performing Arts',
        teachers: [
          teacher('Mr Shiholo'),
        ],
      },
    ],
    achievements: [
      'Computer Studies recorded stellar KCSE Mean score of 10.866 (20 As, 35 A-s)',
      'French achieved an outstanding KCSE Mean score of 10.360',
      'Agriculture recorded a strong KCSE Mean score of 9.046 with 176 candidates',
      'State-of-the-art ICT centre, French language room, and practical agricultural farm',
      'Ambitious 2026 Target Means: Computer 12.00, French 11.00, Agriculture 11.00, Business 9.80',
    ],
    results: {
      avgGrade: '10.87',
      universityPlacement: '98.5%',
      topPerformers: 55,
    },
  },
  {
    icon: ClipboardCheck,
    name: 'Examination & Dean of Studies',
    slug: 'examination',
    aliases: ['examination', 'examinations', 'dean-of-studies', 'dean'],
    lead: 'Madam Jackline Mulonzi',
    leadImage: images.teachers.mulonzi,
    color: 'from-indigo-50 to-indigo-100',
    borderColor: 'border-indigo-200',
    accentColor: 'text-indigo-600 bg-indigo-50',
    teachers: [
      teacher('Md. Jacqueline M. Mulonzi (Dean of Studies / HOD Examination)', images.teachers.mulonzi),
      teacher('Mr. Jeremiah W. Munyao (Assistant HOD Examination)'),
    ],
    achievements: [
      'Attained an overall school KCSE 2025 Mean Score of 9.718 (Mean Grade B+), up from 9.534 in 2024',
      '98.59% of the 355 candidates achieved direct university qualifying grades (C+ and above)',
      'Rigorous continuous assessment system stirring curiosity, creativity and intellectual growth',
      'Balanced academic ethos encouraging co-curricular participation alongside academic rigor',
      'Exemplary teamwork between teachers, students, parents, and school administration',
    ],
    results: {
      avgGrade: '9.718',
      universityPlacement: '98.59%',
      topPerformers: 350,
    },
  },
]

export default function DepartmentDetail() {
  const { name } = useParams()
  const navigate = useNavigate()
  const [selectedSubject, setSelectedSubject] = useState(null)

  const dept = departments.find((d) =>
    d.name.toLowerCase() === name.toLowerCase() ||
    (d.slug && d.slug.toLowerCase() === name.toLowerCase()) ||
    (d.aliases && d.aliases.some((a) => a.toLowerCase() === name.toLowerCase()))
  )

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
    }))
    : dept.subjects.map((subject) => ({
      subject: subject.name,
      teacher: subject.teachers[0]?.name,
      image: subject.teachers[0]?.image,
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