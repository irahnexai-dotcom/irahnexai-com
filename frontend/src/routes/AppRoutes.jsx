import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Solutions from '../pages/Solutions/Solutions'
import Industries from '../pages/Industries/Industries'
import About from '../pages/About/About'
import Process from '../pages/Process/Process'
import Contact from '../pages/Contact/Contact'

function AppRoutes() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="/about" element={<About />} />
    <Route path="/process" element={<Process />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
}

export default AppRoutes