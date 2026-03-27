import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'AI', href: '#ai' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'dark:bg-[#0a0a1a]/90 bg-white/90 backdrop-blur-xl border-b dark:border-white/5 border-gray-200/50 shadow-lg dark:shadow-black/20 shadow-gray-200/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold gradient-text">MJ</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 flex items-center justify-center transition-all duration-400 hover:dark:border-purple-500/30 hover:border-purple-300"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <HiSun className="w-4.5 h-4.5 text-yellow-400" />
              ) : (
                <HiMoon className="w-4.5 h-4.5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <HiSun className="w-4 h-4 text-yellow-400" />
              ) : (
                <HiMoon className="w-4 h-4 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-full dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-[#0a0a1a]/95 bg-white/95 backdrop-blur-xl border-t dark:border-white/5 border-gray-200/50"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:bg-white/5 hover:bg-gray-50 dark:hover:text-white hover:text-gray-900 transition-all duration-300"
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
