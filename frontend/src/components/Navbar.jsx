import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Skills',   href: '#skills'   },
  { name: 'AI',       href: '#ai'       },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact'  },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive]         = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(link => {
      const el = document.getElementById(link.href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'dark:bg-[#09090b]/88 bg-white/88 backdrop-blur-2xl border-b dark:border-white/5 border-gray-200/60 dark:shadow-black/30 shadow-gray-200/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-2xl font-display font-bold gradient-text select-none">
            MJ
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    isActive
                      ? 'dark:text-white text-gray-900'
                      : 'dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg dark:bg-white/8 bg-gray-100/90"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-full dark:bg-white/5 bg-gray-100 border dark:border-white/8 border-gray-200 flex items-center justify-center transition-all duration-300 hover:dark:border-violet-500/30 hover:border-violet-300"
              aria-label="Toggle theme"
            >
              {darkMode
                ? <HiSun  className="w-4 h-4 text-amber-400" />
                : <HiMoon className="w-4 h-4 text-gray-600"  />
              }
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden w-9 h-9 rounded-full dark:bg-white/5 bg-gray-100 border dark:border-white/8 border-gray-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX className="w-4 h-4" /> : <HiMenu className="w-4 h-4" />}
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
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-[#09090b]/96 bg-white/96 backdrop-blur-2xl border-t dark:border-white/5 border-gray-200/50"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active === link.href.slice(1)
                      ? 'dark:bg-white/8 bg-gray-100 dark:text-white text-gray-900'
                      : 'dark:text-gray-400 text-gray-500'
                  }`}
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
