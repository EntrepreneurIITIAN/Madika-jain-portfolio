import { motion } from 'framer-motion'
import {
  HiOutlinePencilAlt,
  HiOutlineSearch,
  HiOutlineBookOpen,
  HiOutlineChatAlt2,
  HiOutlineTrendingUp,
  HiOutlineChartBar,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineCube,
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlineSparkles,
} from 'react-icons/hi'
import TiltCard from '../components/TiltCard'

const skillGroups = [
  {
    category: 'Writing & Strategy',
    emoji: '✍️',
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: 'rgba(139,92,246,0.28)',
    badgeClass: 'dark:bg-violet-500/10 bg-violet-50 dark:border-violet-500/20 border-violet-200/60 dark:text-violet-300 text-violet-700',
    skills: [
      { name: 'Content Strategy',         icon: HiOutlinePencilAlt,    desc: 'Planning and executing content that drives engagement and delivers value.' },
      { name: 'SEO Writing',              icon: HiOutlineSearch,        desc: 'Crafting search-optimized content that ranks and resonates with readers.' },
      { name: 'Editorial Research',       icon: HiOutlineBookOpen,      desc: 'Deep-dive research to produce authoritative, fact-based content.' },
      { name: 'Strategic Communication',  icon: HiOutlineChatAlt2,      desc: 'Clear messaging aligned with brand voice and audience needs.' },
      { name: 'Data-Driven Storytelling', icon: HiOutlineTrendingUp,    desc: 'Transforming data insights into compelling narrative content.' },
    ],
  },
  {
    category: 'Research & Business',
    emoji: '📊',
    gradient: 'from-rose-500 to-orange-400',
    glow: 'rgba(244,63,94,0.25)',
    badgeClass: 'dark:bg-rose-500/10 bg-rose-50 dark:border-rose-500/20 border-rose-200/60 dark:text-rose-300 text-rose-700',
    skills: [
      { name: 'Market Research',      icon: HiOutlineChartBar,    desc: 'Analyzing trends and competition to inform content strategy.' },
      { name: 'Business Development', icon: HiOutlineGlobe,       desc: 'Identifying growth opportunities and building partnerships.' },
      { name: 'Client Management',    icon: HiOutlineUserGroup,   desc: 'Building lasting professional relationships with stakeholders.' },
    ],
  },
  {
    category: 'AI & Technology',
    emoji: '🤖',
    gradient: 'from-fuchsia-500 to-pink-500',
    glow: 'rgba(232,121,249,0.28)',
    badgeClass: 'dark:bg-fuchsia-500/10 bg-fuchsia-50 dark:border-fuchsia-500/20 border-fuchsia-200/60 dark:text-fuchsia-300 text-fuchsia-700',
    skills: [
      { name: 'AI Content Creation', icon: HiOutlineCube,          desc: 'Leveraging AI tools for enhanced content production workflows.' },
      { name: 'LLM Tools',           icon: HiOutlineSparkles,      desc: 'Working with large language model ecosystems and APIs.' },
      { name: 'Prompt Engineering',  icon: HiOutlineChip,          desc: 'Crafting effective prompts for AI-powered research flows.' },
      { name: 'AI Research Tools',   icon: HiOutlineLightningBolt, desc: 'Using AI for accelerated research and data synthesis.' },
    ],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="mb-16">
          <p className="section-label">Expertise</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {skillGroups.map((group, gi) => (
            <motion.div key={group.category} {...fadeUp(0.1 * gi)}>
              <TiltCard className="card-hover p-7 h-full" intensity={5}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center flex-shrink-0`}
                    style={{ boxShadow: `0 8px 24px ${group.glow}` }}
                  >
                    <span className="text-xl">{group.emoji}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold dark:text-white text-gray-900">
                    {group.category}
                  </h3>
                </div>

                {/* Skill list */}
                <div className="space-y-3">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.06 * si + 0.1 * gi }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-br ${group.gradient}`}
                        style={{ opacity: 0.85 }}
                      >
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold dark:text-gray-200 text-gray-800">{skill.name}</p>
                        <p className="text-xs dark:text-gray-500 text-gray-400 mt-0.5 leading-relaxed">{skill.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pill tags */}
                <div className="mt-6 pt-5 border-t dark:border-white/6 border-gray-100 flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${group.badgeClass}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
