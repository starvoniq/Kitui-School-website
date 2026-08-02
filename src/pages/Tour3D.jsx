import { Play, MapPin } from 'lucide-react'
import CtaBanner from '../components/CtaBanner.jsx'

const locations = [
  { n: 1, title: 'Main Entrance', text: 'Welcome to Kitui High School. Start your journey here.' },
  { n: 2, title: 'Administration Block', text: 'The heart of leadership and management.' },
  { n: 3, title: 'Science Laboratories', text: 'Well-equipped labs for practical learning and discovery.' },
  { n: 4, title: 'Library', text: 'A quiet place for research, reading and inspiration.' },
  { n: 5, title: 'Computer Lab', text: 'Modern technology for innovation and digital learning.' },
  { n: 6, title: 'Boarding Wing', text: 'Safe, comfortable and conducive boarding environment.' },
  { n: 7, title: 'Dining Hall', text: 'Nutritious meals served in a clean and friendly environment.' },
  { n: 8, title: 'Sports Grounds', text: 'Where champions are made and teamwork thrives.' },
]

export default function Tour3D() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-page py-16">
          <p className="section-eyebrow mb-3">Explore Our Campus</p>
          <h1 className="text-4xl font-bold max-w-lg mb-4">
            Take a 3D Tour of Kitui High School
          </h1>
          <p className="text-slate-300 max-w-lg mb-8">
            Step inside our campus from anywhere in the world. Explore our
            facilities, learning spaces and boarding environment in immersive 3D.
          </p>
          <div className="flex gap-4 mb-10">
            <button className="btn-primary">Start 3D Tour →</button>
            <button className="btn-outline">
              <Play size={16} /> How It Works
            </button>
          </div>

          {/* Viewer placeholder — wire up a real 360 viewer (e.g. Pannellum, Three.js) here */}
          <div className="bg-navy-light rounded-md aspect-video flex items-center justify-center text-slate-400 text-sm border border-white/10">
            360° tour viewer placeholder
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-navy font-bold text-2xl mb-2">Experience KHS Like Never Before</h2>
        <p className="text-slate-600 max-w-xl mb-10">
          Our 3D tour gives you an interactive look at our world-class facilities,
          modern learning spaces, serene environment and vibrant student life.
        </p>

        <h3 className="text-navy font-bold text-xl mb-6">Tour Locations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div key={loc.n} className="border rounded-md overflow-hidden">
              <div className="aspect-video bg-slate-100 flex items-center justify-center relative text-slate-400 text-xs">
                <span className="absolute top-2 left-2 bg-navy text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {loc.n}
                </span>
                Photo placeholder
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-navy mb-1">{loc.title}</h4>
                <p className="text-sm text-slate-600">{loc.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-navy text-white px-6 py-3 rounded-sm font-semibold inline-flex items-center gap-2 hover:bg-navy-light transition-colors">
            <MapPin size={16} /> View Tour Map
          </button>
        </div>
      </section>

      <CtaBanner
        title="Visit Us In Person"
        subtitle="We'd love to welcome you to our campus. Book a visit or speak to our admissions team."
        primaryLabel="Book a Visit"
        secondaryLabel="Contact Admissions"
      />
    </>
  )
}
