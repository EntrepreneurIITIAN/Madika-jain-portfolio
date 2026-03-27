import { motion } from 'framer-motion'
import { HiOutlineLightningBolt, HiOutlineCube } from 'react-icons/hi'

const aiSkills = [
  'AI-assisted content generation',
  'Prompt engineering for research workflows',
  'LLM-powered information synthesis',
  'AI tools for productivity and content strategy',
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Exploring <span className="gradient-text">Artificial Intelligence</span>
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          className="card p-8 sm:p-10 border-t-2 dark:border-t-purple-500/40 border-t-purple-400/60"
        >
          <div className="flex items-start gap-5 mb-8">
            <div className="icon-box bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0">
              <HiOutlineCube className="w-7 h-7 text-white" />
            </div>
            <p className="dark:text-gray-300 text-gray-600 text-base sm:text-lg leading-relaxed">
              Madika is actively learning modern AI tools and large language
              model ecosystems to enhance research, content creation, and
              knowledge delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-center gap-3 p-4 rounded-xl dark:bg-purple-500/8 bg-purple-50 border dark:border-purple-500/15 border-purple-200/50 transition-all duration-400 hover:dark:border-purple-500/30 hover:border-purple-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <HiOutlineLightningBolt className="w-4 h-4 text-white" />
                </div>
                <span className="dark:text-gray-200 text-gray-700 text-sm sm:text-base font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
