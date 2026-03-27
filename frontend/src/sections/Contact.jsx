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
  { icon: HiOutlineMail, label: 'Email', value: 'madikajain24@gmail.com', href: 'mailto:madikajain24@gmail.com' },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/madika-jain-439335229/' },
  { icon: HiOutlinePhone, label: 'Phone', value: '+91 7668752751', href: 'tel:+917668752751' },
  { icon: HiOutlineLocationMarker, label: 'Location', value: 'Gurgaon, Haryana, India', href: null },
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

  const inputClass = "w-full px-4 py-3.5 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-400"

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-purple-600/8 via-rose-600/4 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 dark:text-gray-400 text-gray-500 max-w-2xl mx-auto text-lg">
            I'm always open to discussing content opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div {...fadeUp(0.1)} className="card p-8">
            <h3 className="text-xl font-display font-bold dark:text-white text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-7">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl dark:bg-purple-500/10 bg-purple-50 border dark:border-purple-500/15 border-purple-200/40 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-gray-500 text-gray-400 uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="dark:text-gray-200 text-gray-700 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300 font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="dark:text-gray-200 text-gray-700 font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeUp(0.2)} className="card p-8">
            <h3 className="text-xl font-display font-bold dark:text-white text-gray-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." rows={4} className={`${inputClass} resize-y`} />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 rounded-xl gradient-btn flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Send Message'}
                <HiOutlinePaperAirplane className="w-5 h-5 rotate-90" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
