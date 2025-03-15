import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/Navbar.css'
import './Components/About.css' 
import './Components/Project.css'
import './Components/Contact.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Project'
import Contact from './Components/Contactloc'
import Footer from './Components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Project />
    <Contact />
    <Footer />
  </StrictMode>
)

