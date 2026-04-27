import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'

const testimonials = [
  {
    quote: "Madika brings a unique blend of analytical thinking and creative storytelling to her content work. Her research-driven approach ensures every piece delivers real value to readers.",
    name: 'Content Lead',
    role: 'CollegeDunia',
    initial: 'C',
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    quote: "Her ability to quickly adapt to new technologies, especially AI tools, while maintaining content quality is impressive. Madika consistently delivers results that exceed expectations.",
    name: 'Senior Editor',
    role: 'Education Platform',
    initial: 'S',
    gradient: 'from-rose-500 to-orange-400',
    glow: 'rgba(244,63,94,0.32)',
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
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, rgba(190,24,93,0.04) 55%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label justify-center">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7" style={{ perspective: '1200px' }}>
          {testimonials.map((t, index) => (
            <motion.div key={t.name} {...fadeUp(0.15 * index)}>
              <TiltCard className="card p-8 relative overflow-hidden h-full" intensity={5}>
                {/* Large decorative quote */}
                <div
                  className="absolute top-4 right-6 font-display font-bold leading-none select-none pointer-events-none"
                  style={{
                    fontSize: '120px',
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, rgba(167,139,250,0.08), rgba(244,114,182,0.05))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  "
                </div>

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${t.glow.replace('0.', '1').replace('1.', '0.8')}, transparent 70%)` }}
                />

                {/* Quote text */}
                <p className="dark:text-gray-300 text-gray-600 text-base leading-[1.9] mb-8 relative z-10 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}
                    style={{ boxShadow: `0 6px 20px ${t.glow}` }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="dark:text-white text-gray-900 font-semibold text-sm">{t.name}</p>
                    <p className="dark:text-gray-500 text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
