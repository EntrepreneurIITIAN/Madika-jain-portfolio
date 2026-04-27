import { motion } from 'framer-motion'
import { HiOutlineLightningBolt, HiOutlineCube } from 'react-icons/hi'
import TiltCard from '../components/TiltCard'

const aiSkills = [
  'AI-assisted content generation',
  'Prompt engineering for research workflows',
  'LLM-powered information synthesis',
  'AI tools for productivity and content strategy',
]

const tools = [
  { name: 'ChatGPT',    emoji: '🤖', desc: 'Content ideation & drafting',          gradient: 'from-emerald-500 to-teal-500',    glow: 'rgba(16,185,129,0.25)' },
  { name: 'Claude',     emoji: '✨', desc: 'Research synthesis & editing',          gradient: 'from-violet-500 to-fuchsia-500',  glow: 'rgba(139,92,246,0.28)' },
  { name: 'Perplexity', emoji: '🔍', desc: 'Real-time research queries',            gradient: 'from-sky-500 to-blue-500',        glow: 'rgba(14,165,233,0.25)' },
  { name: 'Notion AI',  emoji: '📝', desc: 'Content planning & organisation',       gradient: 'from-rose-500 to-pink-500',       glow: 'rgba(244,63,94,0.25)'  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function AI() {
  return (
    <section id="ai" className="py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse, rgba(109,40,217,0.1) 0%, rgba(168,85,247,0.04) 50%, transparent 75%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="mb-16">
          <p className="section-label">AI & Technology</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Exploring <span className="gradient-text">Artificial Intelligence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left — Description + skill list */}
          <motion.div {...fadeUp(0.1)}>
            <TiltCard className="card p-8 sm:p-10 h-full" intensity={4}>
              <div className="flex items-start gap-4 mb-7">
                <div
                  className="icon-box bg-gradient-to-br from-violet-500 to-fuchsia-500 flex-shrink-0"
                  style={{ boxShadow: '0 8px 28px rgba(139,92,246,0.35)' }}
                >
                  <HiOutlineCube className="w-7 h-7 text-white" />
                </div>
                <p className="dark:text-gray-300 text-gray-600 text-base sm:text-lg leading-relaxed">
                  Madika is actively learning modern AI tools and large language
                  model ecosystems to enhance research, content creation, and
                  knowledge delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aiSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08 * index }}
                    className="flex items-center gap-3 p-3.5 rounded-xl dark:bg-violet-500/6 bg-violet-50/60 border dark:border-violet-500/14 border-violet-200/50 transition-all duration-300 hover:dark:border-violet-500/28 hover:border-violet-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0"
                      style={{ boxShadow: '0 4px 12px rgba(139,92,246,0.3)' }}
                    >
                      <HiOutlineLightningBolt className="w-4 h-4 text-white" />
                    </div>
                    <span className="dark:text-gray-200 text-gray-700 text-sm font-medium leading-snug">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          {/* Right — AI Tool cards 2×2 */}
          <div className="grid grid-cols-2 gap-4" style={{ perspective: '1000px' }}>
            {tools.map((tool, index) => (
              <motion.div key={tool.name} {...fadeUp(0.1 * index + 0.15)}>
                <TiltCard className="card-hover p-6 h-full" intensity={7}>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4`}
                    style={{ boxShadow: `0 8px 24px ${tool.glow}` }}
                  >
                    <span className="text-xl">{tool.emoji}</span>
                  </div>
                  <h4 className="font-display font-bold dark:text-white text-gray-900 mb-1.5">{tool.name}</h4>
                  <p className="text-xs dark:text-gray-400 text-gray-500 leading-relaxed">{tool.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
