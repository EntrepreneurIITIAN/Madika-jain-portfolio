import { motion } from 'framer-motion'
import {
  HiOutlinePencilAlt,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from 'react-icons/hi'
import { HiOutlineCpuChip } from 'react-icons/hi2'

const achievements = [
  {
    icon: HiOutlinePencilAlt,
    title: 'Content Writer',
    subtitle: 'At CollegeDunia',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'MBA Candidate',
    subtitle: 'Finance & Human Resources',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'AI Explorer',
    subtitle: 'Learning LLM & AI tools',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: HiOutlineBriefcase,
    title: 'Former BDE',
    subtitle: 'Lawgical India',
    gradient: 'from-rose-500 to-orange-400',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Achievements() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label">Milestones</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp(0.1 * index)}
              className="card-hover p-7 text-center group"
            >
              <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="dark:text-white text-gray-900 font-bold text-lg">{item.title}</h3>
              <p className="dark:text-gray-400 text-gray-500 text-sm mt-1.5">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
