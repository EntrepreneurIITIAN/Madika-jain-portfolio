import { motion } from 'framer-motion'
import {
  HiOutlinePencilAlt,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from 'react-icons/hi'
import { HiOutlineCpuChip } from 'react-icons/hi2'

const milestones = [
  {
    icon: HiOutlinePencilAlt,
    period: 'Now',
    title: 'Content Writer',
    org: 'CollegeDunia',
    note: 'Editorial work helping students navigate higher education in India.',
  },
  {
    icon: HiOutlineAcademicCap,
    period: 'In progress',
    title: 'MBA Candidate',
    org: 'Finance & Human Resources',
    note: 'Building the strategic and analytical foundation under the writing.',
  },
  {
    icon: HiOutlineCpuChip,
    period: 'Ongoing',
    title: 'AI Explorer',
    org: 'LLM tools & prompt design',
    note: 'Quietly weaving modern AI into the daily research workflow.',
  },
  {
    icon: HiOutlineBriefcase,
    period: 'Previously',
    title: 'Business Development',
    org: 'Lawgical India',
    note: 'Client conversations and partnerships before the writing chapter.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Achievements() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="max-w-3xl mb-16">
          <p className="section-label">Milestones</p>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
            A short <span className="accent">timeline</span> of where the work has gone.
          </h2>
        </motion.div>

        {/* Vertical hairline timeline */}
        <div className="relative pl-6 sm:pl-8">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-0 w-px bg-cream-300 dark:bg-cream-700"
          />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.article
                key={m.title}
                {...fadeUp(0.05 * i)}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
              >
                {/* Dot on the line */}
                <span className="absolute -left-[26px] sm:-left-[34px] top-3 w-3 h-3 rounded-full bg-cream-100 dark:bg-cream-900 border-2 border-coral-500 group-hover:scale-125 transition-transform" />

                {/* Period */}
                <div className="lg:col-span-2 font-mono text-[11px] uppercase tracking-widest text-coral-600 dark:text-coral-400 pt-2">
                  {m.period}
                </div>

                {/* Content */}
                <div className="lg:col-span-10 card-hover p-7 flex gap-5">
                  <div className="icon-box-sm flex-shrink-0">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-cream-900 dark:text-cream-100">
                      {m.title}
                      <span className="font-sans font-normal text-base text-cream-600 dark:text-cream-400">
                        {' '}· {m.org}
                      </span>
                    </h3>
                    <p className="mt-2 text-sm text-cream-600 dark:text-cream-400 leading-relaxed">
                      {m.note}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
