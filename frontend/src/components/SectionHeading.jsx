import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mb-16"
    >
      {label && <p className="section-label">{label}</p>}
      <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
        {title}{' '}
        {highlight && <span className="accent">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-cream-600 dark:text-cream-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
