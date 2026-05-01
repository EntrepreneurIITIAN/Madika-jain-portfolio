import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
} from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'

const contactInfo = [
  { icon: HiOutlineMail,             label: 'Email',    value: 'madikajain24@gmail.com',                   href: 'mailto:madikajain24@gmail.com' },
  { icon: FaLinkedinIn,              label: 'LinkedIn', value: 'Connect on LinkedIn',                       href: 'https://www.linkedin.com/in/madika-jain-439335229/' },
  { icon: HiOutlinePhone,            label: 'Phone',    value: '+91 7668752751',                            href: 'tel:+917668752751' },
  { icon: HiOutlineLocationMarker,   label: 'Location', value: 'Gurgaon, Haryana, India',                   href: null },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }
    setSending(true)
    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success("Thanks for reaching out! Madika will get back to you soon.")
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-cream-50 dark:bg-cream-900/40 border border-cream-300 dark:border-cream-700 text-cream-900 dark:text-cream-100 placeholder:text-cream-500 dark:placeholder:text-cream-500 focus:outline-none focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 transition-all duration-300'

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      {/* Soft warm wash */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-coral-100/40 dark:bg-coral-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="max-w-3xl mb-16">
          <p className="section-label">Contact</p>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
            Have a project, a question, or a quiet <span className="accent">hello?</span>
          </h2>
          <p className="mt-6 text-lg text-cream-600 dark:text-cream-400 leading-relaxed">
            I'm always open to discussing content opportunities, research collaborations, and the occasional good idea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact info */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-5 card p-8 sm:p-10">
            <h3 className="font-serif text-xl text-cream-900 dark:text-cream-100 mb-2">
              Reach out directly
            </h3>
            <p className="text-sm text-cream-600 dark:text-cream-400 mb-8">
              Pick whichever feels easiest.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="flex items-center gap-4 group"
                >
                  <div className="icon-box-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-cream-500 dark:text-cream-500 font-mono">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block truncate text-cream-900 dark:text-cream-100 font-medium group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cream-900 dark:text-cream-100 font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.18)} className="lg:col-span-7 card p-8 sm:p-10">
            <h3 className="font-serif text-xl text-cream-900 dark:text-cream-100 mb-2">
              Send a message
            </h3>
            <p className="text-sm text-cream-600 dark:text-cream-400 mb-8">
              Three small fields. I read every one.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-cream-600 dark:text-cream-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-cream-600 dark:text-cream-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-cream-600 dark:text-cream-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about it…"
                  rows={5}
                  className={`${inputClass} resize-y`}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending…' : 'Send message'}
                <HiOutlinePaperAirplane className="w-4 h-4 rotate-90" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
