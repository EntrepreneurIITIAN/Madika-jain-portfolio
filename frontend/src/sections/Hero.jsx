import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineChatAlt2 } from 'react-icons/hi'
import profileImg from '../assets/profile.jpg'

const fade = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Quiet warm wash in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-coral-100/50 dark:bg-coral-900/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cream-200/70 dark:bg-cream-800/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* ── Left — editorial text ─────────────────────────────── */}
          <div className="lg:col-span-7">
            <motion.p {...fade(0.05)} className="section-label">
              Portfolio · 2026
            </motion.p>

            <motion.h1
              {...fade(0.15, 32)}
              className="display-heading text-5xl sm:text-6xl lg:text-[88px]"
            >
              Writing that thinks,
              <br />
              <span className="accent">research that listens.</span>
            </motion.h1>

            <motion.p
              {...fade(0.3)}
              className="mt-8 max-w-xl text-lg leading-relaxed text-cream-700 dark:text-cream-300"
            >
              I'm <span className="font-medium text-cream-900 dark:text-cream-100">Madika Jain</span> — a content writer at <span className="font-medium text-cream-900 dark:text-cream-100">CollegeDunia</span>, MBA candidate, and quiet enthusiast of the AI tools rewriting how we research, draft, and decide.
            </motion.p>

            {/* Tagged disciplines */}
            <motion.div
              {...fade(0.4)}
              className="mt-7 flex flex-wrap gap-2"
            >
              {['Editorial', 'Strategy', 'Education', 'AI · LLM Research'].map((tag, i) => (
                <span
                  key={tag}
                  className={i === 3 ? 'pill-accent' : 'pill'}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fade(0.5)}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="group btn-primary">
                View selected work
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-ghost">
                <HiOutlineChatAlt2 className="w-4 h-4" />
                Get in touch
              </a>
            </motion.div>

            {/* Quiet metrics row */}
            <motion.div
              {...fade(0.65)}
              className="mt-14 grid grid-cols-3 max-w-md gap-6 pt-7 border-t border-cream-300 dark:border-cream-700"
            >
              {[
                { k: '300+', v: 'Articles published' },
                { k: '4 yrs', v: 'Editorial experience' },
                { k: 'MBA',  v: 'Finance & HR' },
              ].map(m => (
                <div key={m.v}>
                  <div className="font-serif text-2xl text-cream-900 dark:text-cream-100">
                    {m.k}
                  </div>
                  <div className="mt-1 text-xs text-cream-600 dark:text-cream-500 leading-snug">
                    {m.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — portrait with editorial frame ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* outer paper frame */}
              <div className="absolute -inset-3 rounded-[28px] bg-coral-100/60 dark:bg-coral-900/20 -rotate-2" />
              <div className="absolute -inset-1.5 rounded-[24px] border border-coral-300/60 dark:border-coral-700/40" />

              {/* photo */}
              <div className="relative overflow-hidden rounded-[20px] bg-cream-200 dark:bg-cream-800">
                <img
                  src={profileImg}
                  alt="Madika Jain"
                  className="w-72 sm:w-80 lg:w-[360px] aspect-[4/5] object-cover"
                />
              </div>

              {/* caption chip */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-cream-800 border border-cream-300 dark:border-cream-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
                <span className="text-xs font-medium text-cream-800 dark:text-cream-200">
                  Available for collaborations
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
