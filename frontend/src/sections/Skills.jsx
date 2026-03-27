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

const skills = [
  { name: 'Content Strategy', desc: 'Planning and executing content that drives engagement and delivers value.', icon: HiOutlinePencilAlt, gradient: 'from-purple-500 to-pink-500' },
  { name: 'SEO Writing', desc: 'Crafting search-optimized content that ranks and resonates with readers.', icon: HiOutlineSearch, gradient: 'from-rose-500 to-pink-500' },
  { name: 'Editorial Research', desc: 'Deep-dive research to produce authoritative, fact-based content.', icon: HiOutlineBookOpen, gradient: 'from-violet-500 to-purple-500' },
  { name: 'Strategic Communication', desc: 'Clear messaging aligned with brand voice and audience needs.', icon: HiOutlineChatAlt2, gradient: 'from-pink-500 to-rose-500' },
  { name: 'Data-Driven Storytelling', desc: 'Transforming data insights into compelling narrative content.', icon: HiOutlineTrendingUp, gradient: 'from-purple-500 to-violet-500' },
  { name: 'Market Research', desc: 'Analyzing trends and competition to inform content strategy.', icon: HiOutlineChartBar, gradient: 'from-rose-500 to-orange-400' },
  { name: 'Business Development', desc: 'Identifying growth opportunities and building partnerships.', icon: HiOutlineGlobe, gradient: 'from-pink-500 to-purple-500' },
  { name: 'Client Management', desc: 'Building lasting professional relationships with stakeholders.', icon: HiOutlineUserGroup, gradient: 'from-purple-500 to-rose-500' },
  { name: 'AI Content Creation', desc: 'Leveraging AI tools for enhanced content production workflows.', icon: HiOutlineCube, gradient: 'from-rose-500 to-orange-400' },
  { name: 'LLM Tools', desc: 'Working with large language model ecosystems and APIs.', icon: HiOutlineSparkles, gradient: 'from-violet-500 to-pink-500' },
  { name: 'Prompt Engineering', desc: 'Crafting effective prompts for AI-powered research flows.', icon: HiOutlineChip, gradient: 'from-emerald-500 to-teal-500' },
  { name: 'AI Research Tools', desc: 'Using AI for accelerated research and data synthesis.', icon: HiOutlineLightningBolt, gradient: 'from-orange-500 to-rose-500' },
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
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              {...fadeUp(0.05 * index)}
              className="card-hover p-6 group"
            >
              <div className={`icon-box-sm bg-gradient-to-br ${skill.gradient} mb-5 group-hover:scale-110`}>
                <skill.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="dark:text-white text-gray-900 font-bold text-lg">{skill.name}</h3>
              <p className="dark:text-gray-400 text-gray-500 text-sm mt-2 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
