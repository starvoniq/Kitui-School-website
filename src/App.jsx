import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import DepartmentDetail from './pages/DepartmentDetail.jsx'
import StreamsDetail from './pages/StreamsDetail.jsx'
import Management from './pages/Management.jsx'
import Gallery from './pages/Gallery.jsx'
import Tour3D from './pages/Tour3D.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/Privacy.jsx'
import TermsOfUse from './pages/TermsOfUse.jsx'
import NotFound from './pages/NotFound.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/streams/:label" element={<StreamsDetail />} />
              <Route path="/academics/:name" element={<DepartmentDetail />} />
              <Route path="/management" element={<Management />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/3d-tour" element={<Tour3D />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
