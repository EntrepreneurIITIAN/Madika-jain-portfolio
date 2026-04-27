import { motion } from 'framer-motion'
import screenshotImg from '../assets/ss1.jpg'
import TiltCard from '../components/TiltCard'

const projects = [
  {
    number: '01',
    title: 'University Admission Guides',
    desc: 'Created comprehensive editorial guides helping students understand admission processes, university programs, and academic opportunities.',
    tags: ['Editorial', 'Education', 'Guides'],
    gradient: 'from-violet-500 to-blue-500',
    glow: 'rgba(139,92,246,0.5)',
    featured: true,
  },
  {
    number: '02',
    title: 'SEO Education Articles',
    desc: 'Produced long-form SEO-optimized articles improving organic search visibility and student engagement.',
    tags: ['SEO', 'Content', 'Engagement'],
    gradient: 'from-rose-500 to-pink-500',
    glow: 'rgba(244,63,94,0.5)',
  },
  {
    number: '03',
    title: 'Career Path Insights',
    desc: 'Developed research-based articles highlighting emerging industries, career opportunities, and professional skill development.',
    tags: ['Research', 'Careers', 'Insights'],
    gradient: 'from-violet-500 to-rose-500',
    glow: 'rgba(139,92,246,0.45)',
  },
  {
    number: '04',
    title: 'Education Data Analysis',
    desc: 'Compiled and analyzed education data to create insightful reports on admission trends and academic opportunities.',
    tags: ['Data', 'Analysis', 'Reports'],
    gradient: 'from-pink-500 to-orange-400',
    glow: 'rgba(236,72,153,0.45)',
  },
  {
    number: '05',
    title: 'AI-Assisted Content Research',
    desc: 'Experimented with AI tools and large language models to accelerate research workflows and improve content depth.',
    tags: ['AI Tools', 'LLMs', 'Research'],
    gradient: 'from-fuchsia-500 to-violet-500',
    glow: 'rgba(232,121,249,0.45)',
  },
]

const tagClass = 'px-2.5 py-1 text-xs font-medium rounded-full dark:bg-violet-500/10 bg-violet-50 dark:text-violet-300 text-violet-600 dark:border-violet-500/15 border-violet-200/50 border'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="mb-16">
          <p className="section-label">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 dark:text-gray-400 text-gray-500 max-w-2xl text-lg">
            Content and research work that showcases editorial expertise and AI exploration
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div {...fadeUp(0.1)} className="mb-6" style={{ perspective: '1200px' }}>
          <TiltCard className="card-hover overflow-hidden" intensity={3}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Screenshot */}
              <div className="relative h-56 lg:h-auto overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: `linear-gradient(90deg, ${featured.glow.replace('0.5', '1')}, transparent)` }}
                />
                <img
                  src={screenshotImg}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:to-[#09090b]/70 bg-gradient-to-r from-transparent to-white/60" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold dark:text-gray-500 text-gray-400 uppercase tracking-widest font-display">
                    Featured — {featured.number}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(90deg, ${featured.glow.replace('0.5', '0.4')}, transparent)` }}
                  />
                </div>
                <h3 className="text-2xl font-display font-bold dark:text-white text-gray-900 mb-4">
                  {featured.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-6">
                  {featured.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map(tag => (
                    <span key={tag} className={tagClass}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ perspective: '1200px' }}>
          {rest.map((project, index) => (
            <motion.div key={project.title} {...fadeUp(0.08 * index + 0.2)}>
              <TiltCard className="card-hover p-7 relative overflow-hidden h-full group" intensity={6}>
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${project.glow.replace('0.5','1')}, transparent)` }}
                />

                <span className="text-xs font-display font-bold dark:text-gray-600 text-gray-400 tabular-nums">
                  {project.number}
                </span>
                <h3 className="dark:text-white text-gray-900 font-display font-bold text-xl mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className={tagClass}>{tag}</span>
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
