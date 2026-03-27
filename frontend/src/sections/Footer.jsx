import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="border-t dark:border-white/5 border-gray-200/60 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-display font-bold gradient-text">Madika Jain</h3>
            <p className="text-sm dark:text-gray-500 text-gray-400 mt-0.5">Content Writer at CollegeDunia</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/madika-jain-439335229/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl dark:bg-white/5 bg-gray-100 border dark:border-white/8 border-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 hover:dark:border-purple-500/30 hover:border-purple-300 transition-all duration-400"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="mailto:madikajain24@gmail.com"
              className="w-10 h-10 rounded-xl dark:bg-white/5 bg-gray-100 border dark:border-white/8 border-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-rose-500 dark:hover:text-rose-400 hover:dark:border-rose-500/30 hover:border-rose-300 transition-all duration-400"
              aria-label="Email"
            >
              <HiOutlineMail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm dark:text-gray-500 text-gray-400">
            &copy; {new Date().getFullYear()} Madika Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
