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

const categories = [
  {
    label: 'Editorial Craft',
    description: 'Where every story actually starts.',
    skills: [
      { name: 'Content Strategy',         desc: 'Planning content that drives engagement and delivers real value.', icon: HiOutlinePencilAlt },
      { name: 'SEO Writing',              desc: 'Search-optimized writing that ranks and resonates.',                icon: HiOutlineSearch },
      { name: 'Editorial Research',       desc: 'Deep-dive research producing authoritative, fact-based work.',      icon: HiOutlineBookOpen },
      { name: 'Strategic Communication',  desc: 'Clear messaging aligned with brand voice and audience needs.',      icon: HiOutlineChatAlt2 },
    ],
  },
  {
    label: 'Research & Analysis',
    description: 'Turning raw signal into useful narrative.',
    skills: [
      { name: 'Data-Driven Storytelling', desc: 'Transforming insights into compelling narrative content.', icon: HiOutlineTrendingUp },
      { name: 'Market Research',          desc: 'Trends and competition analysis to inform strategy.',     icon: HiOutlineChartBar },
      { name: 'Business Development',     desc: 'Identifying growth opportunities and partnerships.',      icon: HiOutlineGlobe },
      { name: 'Client Management',        desc: 'Building lasting professional relationships.',            icon: HiOutlineUserGroup },
    ],
  },
  {
    label: 'AI · Tools',
    description: 'Quietly weaving LLMs into the workflow.',
    skills: [
      { name: 'AI Content Creation', desc: 'Leveraging AI tools for enhanced production workflows.', icon: HiOutlineCube },
      { name: 'LLM Tools',           desc: 'Working across large language model ecosystems and APIs.', icon: HiOutlineSparkles },
      { name: 'Prompt Engineering',  desc: 'Crafting effective prompts for AI-powered research flows.', icon: HiOutlineChip },
      { name: 'AI Research Tools',   desc: 'Using AI for accelerated research and synthesis.',         icon: HiOutlineLightningBolt },
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
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="max-w-3xl">
          <p className="section-label">Skills</p>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
            Three crafts, one <span className="accent">throughline</span> — make complex things readable.
          </h2>
        </motion.div>

        <div className="mt-20 space-y-20">
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              {/* Category header */}
              <motion.div
                {...fadeUp(0.05)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-10 pb-6 border-b border-cream-300 dark:border-cream-700"
              >
                <div className="lg:col-span-1 font-mono text-xs text-coral-600 dark:text-coral-400">
                  0{ci + 1}
                </div>
                <h3 className="lg:col-span-5 font-serif text-2xl sm:text-3xl text-cream-900 dark:text-cream-100">
                  {cat.label}
                </h3>
                <p className="lg:col-span-6 text-cream-600 dark:text-cream-400 lg:text-right text-sm">
                  {cat.description}
                </p>
              </motion.div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    {...fadeUp(0.05 * i)}
                    className="card-hover p-6 flex gap-5"
                  >
                    <div className="icon-box-sm flex-shrink-0">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-cream-900 dark:text-cream-100">
                        {skill.name}
                      </h4>
                      <p className="mt-1.5 text-sm text-cream-600 dark:text-cream-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
