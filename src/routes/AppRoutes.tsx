import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Booking from '../pages/Booking/Booking'
import Gallery from '../pages/Gallery/Gallery'
import Contact from '../pages/Contact/Contact'
import About from '../pages/AboutUS/About'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
