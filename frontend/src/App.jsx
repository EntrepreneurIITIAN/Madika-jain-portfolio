import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import AI from './sections/AI'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) return JSON.parse(saved)
      return true // default dark
    }
    return true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <div className="min-h-screen">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#f3f4f6' : '#111827',
            border: darkMode ? '1px solid rgba(75,85,99,0.4)' : '1px solid rgba(229,231,235,0.8)',
          },
          duration: 4000,
        }}
      />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <AI />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
