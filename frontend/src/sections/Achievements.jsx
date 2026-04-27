import { motion } from 'framer-motion'
import {
  HiOutlinePencilAlt,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from 'react-icons/hi'
import { HiOutlineCpuChip } from 'react-icons/hi2'
import TiltCard from '../components/TiltCard'

const achievements = [
  {
    icon: HiOutlinePencilAlt,
    title: 'Content Writer',
    subtitle: 'At CollegeDunia',
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: 'rgba(139,92,246,0.35)',
    accentColor: '#a78bfa',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'MBA Candidate',
    subtitle: 'Finance & Human Resources',
    gradient: 'from-fuchsia-500 to-rose-500',
    glow: 'rgba(232,121,249,0.32)',
    accentColor: '#e879f9',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'AI Explorer',
    subtitle: 'Learning LLM & AI tools',
    gradient: 'from-violet-600 to-purple-500',
    glow: 'rgba(109,40,217,0.35)',
    accentColor: '#8b5cf6',
  },
  {
    icon: HiOutlineBriefcase,
    title: 'Former BDE',
    subtitle: 'Lawgical India',
    gradient: 'from-rose-500 to-orange-400',
    glow: 'rgba(244,63,94,0.32)',
    accentColor: '#fb7185',
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
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse, rgba(109,40,217,0.08) 0%, rgba(190,24,93,0.04) 50%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label justify-center">Milestones</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: '1200px' }}>
          {achievements.map((item, index) => (
            <motion.div key={item.title} {...fadeUp(0.1 * index)}>
              <TiltCard className="card-hover p-7 text-center group h-full" intensity={7}>
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5`}
                  style={{
                    boxShadow: `0 12px 36px ${item.glow}, 0 0 0 1px rgba(255,255,255,0.06)`,
                    transform: 'translateZ(16px)',
                  }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Label */}
                <h3 className="dark:text-white text-gray-900 font-bold text-lg">{item.title}</h3>
                <p className="dark:text-gray-400 text-gray-500 text-sm mt-1.5 leading-relaxed">{item.subtitle}</p>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-[1px] mx-auto w-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)` }}
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
