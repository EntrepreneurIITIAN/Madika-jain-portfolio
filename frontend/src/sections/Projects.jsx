import { motion } from 'framer-motion'

const projects = [
  {
    title: 'University Admission Guides',
    desc: 'Created comprehensive editorial guides helping students understand admission processes, university programs, and academic opportunities.',
    tags: ['Editorial', 'Education', 'Guides'],
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    title: 'SEO Education Articles',
    desc: 'Produced long-form SEO-optimized articles improving organic search visibility and student engagement.',
    tags: ['SEO', 'Content', 'Engagement'],
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Career Path Insights',
    desc: 'Developed research-based articles highlighting emerging industries, career opportunities, and professional skill development.',
    tags: ['Research', 'Careers', 'Insights'],
    gradient: 'from-purple-500 to-rose-500',
  },
  {
    title: 'Education Data Analysis',
    desc: 'Compiled and analyzed education data to create insightful reports on admission trends and academic opportunities.',
    tags: ['Data', 'Analysis', 'Reports'],
    gradient: 'from-pink-500 to-orange-400',
  },
  {
    title: 'AI-Assisted Content Research',
    desc: 'Experimented with AI tools and large language models to accelerate research workflows and improve content depth.',
    tags: ['AI Tools', 'LLMs', 'Research'],
    gradient: 'from-violet-500 to-purple-500',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 dark:text-gray-400 text-gray-500 max-w-2xl mx-auto text-lg">
            Content and research work that showcases editorial expertise and AI exploration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...fadeUp(0.08 * index)}
              className="card-hover p-7 relative overflow-hidden group"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

              <h3 className="dark:text-white text-gray-900 font-display font-bold text-xl mt-2 mb-3">
                {project.title}
              </h3>
              <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-5">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full dark:bg-purple-500/10 bg-purple-50 dark:text-purple-300 text-purple-600 dark:border-purple-500/15 border-purple-200/50 border transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
