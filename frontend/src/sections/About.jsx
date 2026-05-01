import { motion } from 'framer-motion'
import {
  HiOutlinePencilAlt,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from 'react-icons/hi'
import { HiOutlineCpuChip } from 'react-icons/hi2'

const infoCards = [
  { icon: HiOutlinePencilAlt, title: 'Content Writer', value: 'CollegeDunia' },
  { icon: HiOutlineAcademicCap, title: 'MBA Candidate', value: 'Finance & HR' },
  { icon: HiOutlineCpuChip,   title: 'AI Explorer',   value: 'LLMs & tools' },
  { icon: HiOutlineBriefcase, title: 'Former BDE',    value: 'Lawgical India' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Eyebrow + Title */}
        <motion.div {...fadeUp()} className="max-w-3xl">
          <p className="section-label">About</p>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
            A writer at the intersection of <span className="accent">research</span>, education, and machines that think.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left — bio paragraphs */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-7">
            <div className="space-y-6 text-cream-700 dark:text-cream-300 text-[17px] leading-[1.85] font-light">
              <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:text-coral-600 dark:first-letter:text-coral-400 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85]">
                Madika is a content writer at CollegeDunia, one of India's leading higher-education platforms. She develops well-researched editorial content that helps students navigate universities, academic programs, and the increasingly tangled map of modern career pathways.
              </p>
              <p>
                Her work blends strategic communication, data-driven research, and audience-focused storytelling — the kind of writing that doesn't just describe a topic but quietly takes the reader somewhere useful.
              </p>
              <p>
                Alongside her writing career, she is actively exploring emerging AI technologies — large language models, prompt design, and the workflow tools changing how research gets done. Currently pursuing an MBA in Finance and Human Resources while expanding the overlap of <em className="text-coral-600 dark:text-coral-400 not-italic font-medium">communication, technology, and strategy</em>.
              </p>
            </div>

            {/* Signature mark */}
            <div className="mt-10 flex items-center gap-3 text-sm text-cream-600 dark:text-cream-400">
              <span className="font-serif italic text-2xl text-coral-600 dark:text-coral-400">— Madika</span>
              <span className="hairline flex-1 max-w-[120px]" />
              <span className="font-mono text-[11px] uppercase tracking-widest">Gurgaon, IN</span>
            </div>
          </motion.div>

          {/* Right — stat cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.15 + 0.07 * i)}
                className="card-hover p-6"
              >
                <div className="icon-box-sm mb-5">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-cream-900 dark:text-cream-100">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-cream-600 dark:text-cream-400">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
