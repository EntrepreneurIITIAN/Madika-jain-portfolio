import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
