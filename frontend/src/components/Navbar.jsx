import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home',     href: '#home' },
  { name: 'About',    href: '#about' },
  { name: 'Skills',   href: '#skills' },
  { name: 'AI',       href: '#ai' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/85 dark:bg-cream-900/85 backdrop-blur-xl border-b border-cream-300/70 dark:border-cream-700/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <a href="#home" className="group flex items-baseline gap-2">
            <span className="font-serif text-[22px] leading-none tracking-tightest text-cream-900 dark:text-cream-100">
              Madika
            </span>
            <span className="font-serif italic text-[22px] leading-none tracking-tightest text-coral-600 dark:text-coral-400">
              Jain
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const id = link.href.slice(1)
              const isActive = activeId === id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-cream-700 dark:text-cream-300 hover:text-cream-900 dark:hover:text-cream-50 transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-cream-200/80 dark:bg-cream-800/70"
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              )
            })}

            <button
              onClick={toggleDarkMode}
              className="ml-3 w-9 h-9 rounded-full flex items-center justify-center border border-cream-300 dark:border-cream-700 text-cream-700 dark:text-cream-300 hover:border-coral-400 hover:text-coral-600 dark:hover:text-coral-400 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode
                ? <HiSun  className="w-4 h-4" />
                : <HiMoon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-cream-300 dark:border-cream-700 text-cream-700 dark:text-cream-300"
              aria-label="Toggle theme"
            >
              {darkMode
                ? <HiSun  className="w-4 h-4" />
                : <HiMoon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-cream-300 dark:border-cream-700 text-cream-700 dark:text-cream-300"
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <HiX    className="w-5 h-5" />
                : <HiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-cream-100/95 dark:bg-cream-900/95 backdrop-blur-xl border-t border-cream-300/70 dark:border-cream-700/70 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-cream-700 dark:text-cream-300 hover:bg-cream-200 dark:hover:bg-cream-800 hover:text-coral-600 dark:hover:text-coral-400 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
