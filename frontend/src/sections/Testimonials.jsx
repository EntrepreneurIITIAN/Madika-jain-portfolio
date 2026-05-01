import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Madika brings a unique blend of analytical thinking and creative storytelling to her content work. Her research-driven approach ensures every piece delivers real value to readers.',
    name: 'Content Lead',
    role: 'CollegeDunia',
  },
  {
    quote: 'Her ability to quickly adapt to new technologies, especially AI tools, while maintaining content quality is impressive. Madika consistently delivers results that exceed expectations.',
    name: 'Senior Editor',
    role: 'Education Platform',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="max-w-3xl mb-16">
          <p className="section-label">Words from collaborators</p>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
            What people <span className="accent">tend to say.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              {...fadeUp(0.1 + 0.12 * i)}
              className="card p-8 sm:p-10 relative"
            >
              {/* Big editorial quote mark */}
              <span
                aria-hidden
                className="absolute top-4 right-6 font-serif text-[110px] leading-none text-coral-200 dark:text-coral-900/50 select-none"
              >
                “
              </span>

              <blockquote className="relative font-serif text-xl sm:text-2xl leading-snug text-cream-900 dark:text-cream-100">
                {t.quote}
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-cream-200 dark:border-cream-700 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-cream-900 dark:text-cream-100">
                    {t.name}
                  </div>
                  <div className="text-xs text-cream-600 dark:text-cream-400 mt-0.5">
                    {t.role}
                  </div>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-coral-600 dark:text-coral-400">
                  0{i + 1} / 0{testimonials.length}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
