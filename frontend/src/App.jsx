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
      return false // default light (Claude editorial cream)
    }
    return false
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
            background: darkMode ? '#2a2724' : '#ffffff',
            color:      darkMode ? '#faf9f5' : '#1f1d1a',
            border:     darkMode ? '1px solid rgba(255,249,245,0.10)' : '1px solid rgba(15,13,10,0.08)',
            borderRadius: '14px',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
          },
          duration: 4000,
          iconTheme: {
            primary: '#d97757',
            secondary: darkMode ? '#2a2724' : '#ffffff',
          },
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
