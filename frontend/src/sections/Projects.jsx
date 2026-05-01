import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'

const projects = [
  {
    title: 'University Admission Guides',
    desc: 'Comprehensive editorial guides helping students understand admission processes, university programs, and academic opportunities.',
    tags: ['Editorial', 'Education', 'Guides'],
    year: '2024',
  },
  {
    title: 'SEO Education Articles',
    desc: 'Long-form SEO-optimized articles improving organic search visibility and student engagement at scale.',
    tags: ['SEO', 'Content', 'Engagement'],
    year: '2024',
  },
  {
    title: 'Career Path Insights',
    desc: 'Research-based articles highlighting emerging industries, career opportunities, and professional skill development.',
    tags: ['Research', 'Careers', 'Insights'],
    year: '2024',
  },
  {
    title: 'Education Data Analysis',
    desc: 'Compiled and analyzed education data to create insightful reports on admission trends and academic opportunities.',
    tags: ['Data', 'Analysis', 'Reports'],
    year: '2023',
  },
  {
    title: 'AI-Assisted Content Research',
    desc: 'Experimented with AI tools and large language models to accelerate research workflows and improve content depth.',
    tags: ['AI Tools', 'LLMs', 'Research'],
    year: '2025',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="section-label">Selected Work</p>
            <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
              Projects, briefly <span className="accent">told.</span>
            </h2>
          </div>
          <p className="text-cream-600 dark:text-cream-400 text-sm max-w-xs">
            A small sample of editorial and research work. Full case studies on request.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.a
          {...fadeUp(0.1)}
          href="#contact"
          className="card-hover block p-8 sm:p-12 mb-8 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-coral-600 dark:text-coral-400">
                Featured · 01
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cream-500 dark:text-cream-500">
                {featured.year}
              </span>
            </div>
            <div className="lg:col-span-10">
              <div className="flex items-start justify-between gap-6">
                <h3 className="font-serif text-3xl sm:text-4xl text-cream-900 dark:text-cream-100 group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors">
                  {featured.title}
                </h3>
                <span className="flex-shrink-0 w-11 h-11 rounded-full border border-cream-300 dark:border-cream-700 flex items-center justify-center text-cream-700 dark:text-cream-300 group-hover:bg-coral-500 group-hover:border-coral-500 group-hover:text-white transition-all">
                  <HiArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
              <p className="mt-5 text-cream-700 dark:text-cream-300 text-lg leading-relaxed max-w-2xl">
                {featured.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tags.map(t => (
                  <span key={t} className="pill-accent">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.a>

        {/* Grid of remaining */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <motion.a
              key={project.title}
              {...fadeUp(0.1 + 0.07 * i)}
              href="#contact"
              className="card-hover p-8 group block"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-coral-600 dark:text-coral-400">
                  0{i + 2}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-cream-500 dark:text-cream-500">
                  {project.year}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-cream-900 dark:text-cream-100 group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-cream-600 dark:text-cream-400 text-sm leading-relaxed">
                {project.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map(t => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream-700 dark:text-cream-300 group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors">
                Read more
                <HiArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
