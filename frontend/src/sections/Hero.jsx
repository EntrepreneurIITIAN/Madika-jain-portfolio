import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineChatAlt2 } from 'react-icons/hi'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label"
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1]"
            >
              <span className="dark:text-white text-gray-900">Hi, I'm </span>
              <span className="gradient-text">Madika Jain</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg sm:text-xl dark:text-gray-300 text-gray-600 font-medium leading-relaxed max-w-xl"
            >
              Content Writer at CollegeDunia | MBA Candidate | AI-Augmented Research Content Strategy
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-base dark:text-gray-400 text-gray-500 max-w-lg leading-relaxed"
            >
              Blending research, storytelling, and emerging AI tools to create insightful educational content.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {['Content', 'Strategy', 'Education Insights', 'AI-Driven Research'].map((tag, i) => (
                <span
                  key={tag}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                    i === 1
                      ? 'dark:bg-rose-500/15 bg-rose-50 dark:border-rose-500/30 border-rose-200 dark:text-rose-300 text-rose-600'
                      : 'dark:bg-white/5 bg-gray-100/80 dark:border-white/10 border-gray-200 dark:text-gray-300 text-gray-600 hover:dark:border-purple-500/30 hover:border-purple-300'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full gradient-btn shadow-lg shadow-purple-500/20"
              >
                View Portfolio
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 dark:text-white text-gray-700 hover:dark:border-purple-500/40 hover:border-purple-300 transition-all duration-400"
              >
                Connect
                <HiOutlineChatAlt2 className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-rose-500/20 to-orange-500/20 blur-3xl scale-110" />
              {/* Gradient border */}
              <div className="relative p-1.5 rounded-full gradient-border">
                <img
                  src={profileImg}
                  alt="Madika Jain"
                  className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
