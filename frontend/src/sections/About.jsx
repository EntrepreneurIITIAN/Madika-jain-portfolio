import { motion } from 'framer-motion'
import { HiOutlinePencilAlt, HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi'
import { HiOutlineCpuChip } from 'react-icons/hi2'
import TiltCard from '../components/TiltCard'

const infoCards = [
  {
    icon: HiOutlinePencilAlt,
    title: 'Content Writer',
    value: 'At CollegeDunia',
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'MBA Candidate',
    value: 'Finance & Human Resources',
    gradient: 'from-fuchsia-500 to-rose-500',
    glow: 'rgba(232,121,249,0.28)',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'AI Explorer',
    value: 'Learning LLM & AI tools',
    gradient: 'from-violet-600 to-purple-500',
    glow: 'rgba(109,40,217,0.3)',
  },
  {
    icon: HiOutlineBriefcase,
    title: 'Former BDE',
    value: 'Lawgical India',
    gradient: 'from-rose-500 to-orange-400',
    glow: 'rgba(244,63,94,0.28)',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()}>
          <p className="section-label">About Me</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900 leading-tight">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <motion.div {...fadeUp(0.15)}>
            <div className="space-y-6 dark:text-gray-300 text-gray-600 text-base sm:text-lg leading-[1.85]">
              <p>
                Madika Jain is a content writer at CollegeDunia, one of India's leading higher-education
                platforms, where she develops well-researched editorial content that helps students
                navigate universities, academic programs, and career pathways.
              </p>
              <p>
                Her work combines strategic communication, data-driven research, and audience-focused
                storytelling to create content that is both informative and impactful.
              </p>
              <p>
                Alongside her writing career, Madika is actively exploring emerging AI technologies
                including large language models and modern AI productivity tools.
              </p>
              <p>
                She is currently pursuing an MBA in Finance and Human Resources while expanding her
                expertise at the intersection of communication, technology, and strategy.
              </p>
            </div>
          </motion.div>

          {/* Right — 3D Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ perspective: '1000px' }}>
            {infoCards.map((card, index) => (
              <motion.div key={card.title} {...fadeUp(0.1 + 0.1 * index)}>
                <TiltCard className="card-hover p-6 h-full" intensity={6}>
                  <div
                    className={`icon-box bg-gradient-to-br ${card.gradient} mb-4`}
                    style={{ boxShadow: `0 8px 28px ${card.glow}` }}
                  >
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="dark:text-white text-gray-900 font-bold text-lg">{card.title}</h3>
                  <p className="dark:text-gray-400 text-gray-500 text-sm mt-1 leading-relaxed">{card.value}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
