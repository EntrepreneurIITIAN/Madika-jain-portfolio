import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="border-t border-cream-300 dark:border-cream-700 mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="font-serif text-2xl text-cream-900 dark:text-cream-100">
              Madika <span className="italic text-coral-600 dark:text-coral-400">Jain</span>
            </h3>
            <p className="mt-2 text-sm text-cream-600 dark:text-cream-400 leading-relaxed max-w-xs">
              Content writer, MBA candidate, and quiet enthusiast of AI tools that help us think better.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-cream-500 dark:text-cream-500 font-mono mb-3">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Skills', 'AI', 'Projects', 'Contact'].map(name => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase()}`}
                    className="text-cream-700 dark:text-cream-300 hover:text-coral-600 dark:hover:text-coral-400 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-cream-500 dark:text-cream-500 font-mono mb-3">
              Elsewhere
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/madika-jain-439335229/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-cream-300 dark:border-cream-700 flex items-center justify-center text-cream-700 dark:text-cream-300 hover:border-coral-500 hover:text-coral-600 dark:hover:text-coral-400 transition-all"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="mailto:madikajain24@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-cream-300 dark:border-cream-700 flex items-center justify-center text-cream-700 dark:text-cream-300 hover:border-coral-500 hover:text-coral-600 dark:hover:text-coral-400 transition-all"
              >
                <HiOutlineMail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream-300 dark:border-cream-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-600 dark:text-cream-400">
          <p>© {new Date().getFullYear()} Madika Jain. All rights reserved.</p>
          <p className="font-mono">Set in Fraunces &amp; Inter · Built with care</p>
        </div>
      </div>
    </footer>
  )
}
