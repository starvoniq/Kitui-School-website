import { Microscope, BookOpen, Sigma, Palette, Users, Trophy, ShieldCheck } from 'lucide-react'
import CtaBanner from '../components/CtaBanner.jsx'

const stats = [
  { label: 'Years of Legacy', value: '115+' },
  { label: 'Students Enrolled', value: '1,200+' },
  { label: 'Mean Pass Rate (2025)', value: '8.1' },
  { label: 'Faculty & Staff', value: '120+' },
]

const pathways = [
  { icon: Microscope, title: 'STEM & Sciences', text: 'Innovate, experiment and solve real-world problems.' },
  { icon: BookOpen, title: 'Humanities', text: 'Understand society, culture and the human experience.' },
  { icon: Sigma, title: 'Mathematics', text: 'Build strong analytical and problem-solving skills.' },
  { icon: Palette, title: 'Creative Arts', text: 'Express, create and inspire through the arts.' },
]

const whyUs = [
  { icon: Users, title: 'Small Class Sizes', text: 'Personalized attention for every learner.' },
  { icon: Trophy, title: 'Award-Winning Co-curriculars', text: 'Excellence beyond the classroom.' },
  { icon: ShieldCheck, title: 'Safe Supervised Boarding', text: 'A second home with care and discipline.' },
]

const news = [
  { title: 'Mock Exam Timetable Released', text: 'Term 3 mock exams timetable is out. Check the schedule.', date: 'May 15, 2026' },
  { title: 'Athletics Team Shines at Region', text: 'Our athletes bag 12 medals at the Eastern Regionals.', date: 'May 12, 2026' },
  { title: 'Career Week 2026', text: 'Inspiring talks and workshops with industry leaders.', date: 'May 8, 2026' },
]

const testimonials = [
  { quote: 'Kitui High School instills discipline, confidence and values that prepare our children for life.', name: 'Mrs. Jane W.', role: 'Parent' },
  { quote: 'KHS gave me the foundation to succeed in university and beyond. I will always be proud to call it home.', name: 'Brian M.', role: 'Alumni' },
  { quote: 'The teachers are dedicated, the environment is nurturing and the opportunities are limitless.', name: 'Faith K.', role: 'Alumni' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="container-page py-24">
          <p className="section-eyebrow mb-3">A Legacy Of</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
            Character. A Future of Excellence.
          </h1>
          <p className="text-slate-300 mt-5 max-w-xl">
            Kitui High School is a National Mixed Day and Boarding School nurturing
            disciplined, responsible and compassionate leaders.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="btn-primary">Start Application</button>
            <button className="btn-outline">Discover Our Story</button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-light text-white">
        <div className="container-page py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold">{s.value}</p>
              <p className="text-xs uppercase tracking-wide text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="container-page py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-eyebrow mb-3 text-navy">Who We Are</p>
          <h2 className="text-3xl font-bold text-navy mb-4">
            More Than a School. A Community.
          </h2>
          <p className="text-slate-600 mb-4">
            For over seven decades, we have remained steadfast in our mission to
            nurture disciplined, responsible and compassionate leaders.
          </p>
          <p className="text-slate-600 mb-6">
            We are home to four houses: Nzou, Ngo, Mbiti and Kavata and a vibrant
            prefect body of Form 4 leaders.
          </p>
          <button className="bg-navy text-white px-6 py-3 rounded-sm font-semibold hover:bg-navy-light transition-colors">
            Learn More About Us
          </button>
        </div>
        <div className="bg-slate-100 rounded-md aspect-video flex items-center justify-center text-slate-400 text-sm">
          Photo placeholder — students in class
        </div>
      </section>

      {/* Academic pathways */}
      <section className="bg-slate-50 py-20">
        <div className="container-page text-center mb-12">
          <p className="section-eyebrow">Academic Pathways</p>
          <h2 className="text-3xl font-bold text-navy mt-2">Explore. Learn. Excel.</h2>
        </div>
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-6 rounded-md shadow-sm">
              <Icon className="text-navy mb-3" size={28} />
              <h3 className="font-semibold text-navy mb-1">{title}</h3>
              <p className="text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why families choose us */}
      <section className="bg-navy text-white py-16">
        <div className="container-page grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {whyUs.map(({ icon: Icon, title, text }) => (
            <div key={title} className="py-6 md:py-0 px-4">
              <Icon className="mx-auto mb-3 text-gold" size={28} />
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News & testimonials */}
      <section className="container-page py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-bold text-navy text-xl mb-6">News & Events</h3>
          <div className="space-y-6">
            {news.map((n) => (
              <div key={n.title} className="flex gap-4">
                <div className="w-24 h-16 bg-slate-100 rounded shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">{n.title}</h4>
                  <p className="text-sm text-slate-600">{n.text}</p>
                  <p className="text-xs text-slate-400 mt-1">{n.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-navy text-xl mb-6">What Our Community Says</h3>
          <div className="grid gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 p-5 rounded-md">
                <p className="text-slate-600 text-sm italic mb-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to join our community?"
        subtitle="Admissions for 2026 are ongoing."
        primaryLabel="Apply Now"
        secondaryLabel="Talk to Admissions"
      />
    </>
  )
}
