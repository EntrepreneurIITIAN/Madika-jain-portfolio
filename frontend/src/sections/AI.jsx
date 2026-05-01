import { motion } from 'framer-motion'
import {
  HiOutlineSparkles,
  HiOutlineSearch,
  HiOutlinePencilAlt,
  HiOutlineLightBulb,
} from 'react-icons/hi'

const aiCapabilities = [
  { icon: HiOutlinePencilAlt, label: 'AI-assisted content generation' },
  { icon: HiOutlineLightBulb, label: 'Prompt engineering for research workflows' },
  { icon: HiOutlineSparkles,  label: 'LLM-powered information synthesis' },
  { icon: HiOutlineSearch,    label: 'AI tools for productivity & strategy' },
]

const tools = [
  { name: 'Claude',     desc: 'Long-form research synthesis & editing' },
  { name: 'ChatGPT',    desc: 'Ideation & first-draft scaffolding' },
  { name: 'Perplexity', desc: 'Real-time research queries' },
  { name: 'Notion AI',  desc: 'Content planning & organisation' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function AI() {
  return (
    <section id="ai" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="max-w-3xl">
          <p className="section-label">AI · Workflow</p>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
            Working <span className="accent">alongside</span> the new tools, not behind them.
          </h2>
          <p className="mt-6 text-lg text-cream-600 dark:text-cream-400 leading-relaxed">
            Madika is actively learning modern AI tools and large language model
            ecosystems to enhance research, content creation, and knowledge delivery.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Capabilities list */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-7 card p-8 sm:p-10">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-cream-200 dark:border-cream-700">
              <h3 className="font-serif text-xl text-cream-900 dark:text-cream-100">
                What that looks like
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cream-500 dark:text-cream-500">
                in practice
              </span>
            </div>
            <ul className="space-y-5">
              {aiCapabilities.map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  className="flex items-start gap-4 group"
                >
                  <span className="mt-1 w-6 h-6 rounded-full bg-coral-50 dark:bg-coral-900/30 border border-coral-200 dark:border-coral-700/40 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-3.5 h-3.5 text-coral-600 dark:text-coral-400" />
                  </span>
                  <span className="text-cream-800 dark:text-cream-200 text-base group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors">
                    {c.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools list */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-5 card p-8 sm:p-10 bg-coral-50/50 dark:bg-coral-900/10">
            <h3 className="font-serif text-xl text-cream-900 dark:text-cream-100 mb-2">
              Tools in rotation
            </h3>
            <p className="text-sm text-cream-600 dark:text-cream-400 mb-6">
              The current studio shelf.
            </p>
            <div className="space-y-4">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="flex items-baseline justify-between pb-3 border-b border-cream-300/60 dark:border-cream-700/50 last:border-0"
                >
                  <span className="font-serif text-lg text-cream-900 dark:text-cream-100">
                    {t.name}
                  </span>
                  <span className="text-xs text-cream-600 dark:text-cream-400 text-right max-w-[60%]">
                    {t.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
