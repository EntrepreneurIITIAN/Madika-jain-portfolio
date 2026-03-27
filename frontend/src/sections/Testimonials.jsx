import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Madika brings a unique blend of analytical thinking and creative storytelling to her content work. Her research-driven approach ensures every piece delivers real value to readers.",
    name: 'Content Lead',
    role: 'CollegeDunia',
    initial: 'C',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    quote: "Her ability to quickly adapt to new technologies, especially AI tools, while maintaining content quality is impressive. Madika consistently delivers results that exceed expectations.",
    name: 'Senior Editor',
    role: 'Education Platform',
    initial: 'S',
    gradient: 'from-rose-500 to-orange-400',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Testimonials() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/8 via-rose-600/5 to-pink-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              {...fadeUp(0.15 * index)}
              className="card p-8"
            >
              <div className="text-4xl font-bold gradient-text mb-5 leading-none">&ldquo;&rdquo;</div>
              <p className="dark:text-gray-300 text-gray-600 text-base leading-[1.8] italic mb-7">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initial}
                </div>
                <div>
                  <p className="dark:text-white text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="dark:text-gray-500 text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
