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
import TiltCard from '../components/TiltCard'

const contactInfo = [
  { icon: HiOutlineMail,           label: 'Email',    value: 'madikajain24@gmail.com',       href: 'mailto:madikajain24@gmail.com',                       gradient: 'from-violet-500 to-fuchsia-500', glow: 'rgba(139,92,246,0.3)' },
  { icon: FaLinkedinIn,            label: 'LinkedIn', value: 'Connect on LinkedIn',            href: 'https://www.linkedin.com/in/madika-jain-439335229/', gradient: 'from-blue-500 to-sky-400',       glow: 'rgba(59,130,246,0.3)'  },
  { icon: HiOutlinePhone,          label: 'Phone',    value: '+91 7668752751',                 href: 'tel:+917668752751',                                   gradient: 'from-emerald-500 to-teal-400',   glow: 'rgba(16,185,129,0.3)'  },
  { icon: HiOutlineLocationMarker, label: 'Location', value: 'Gurgaon, Haryana, India',        href: null,                                                  gradient: 'from-rose-500 to-orange-400',    glow: 'rgba(244,63,94,0.28)'  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

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
    "w-full px-4 py-3.5 rounded-xl dark:bg-white/4 bg-gray-50 border dark:border-white/8 border-gray-200 dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none dark:focus:border-violet-500/45 focus:border-violet-400 focus:ring-1 dark:focus:ring-violet-500/18 focus:ring-violet-400/20 transition-all duration-300"

  return (
    <section id="contact" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse, rgba(109,40,217,0.1) 0%, rgba(190,24,93,0.05) 50%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label justify-center">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-gray-900">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 dark:text-gray-400 text-gray-500 max-w-2xl mx-auto text-lg">
            I'm always open to discussing content opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7" style={{ perspective: '1200px' }}>
          {/* Contact info */}
          <motion.div {...fadeUp(0.1)}>
            <TiltCard className="card p-8 h-full" intensity={4}>
              <h3 className="text-xl font-display font-bold dark:text-white text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-7">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 * index }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                      style={{ boxShadow: `0 6px 20px ${item.glow}` }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs dark:text-gray-500 text-gray-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="dark:text-gray-200 text-gray-700 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-300 font-medium text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="dark:text-gray-200 text-gray-700 font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          {/* Contact form */}
          <motion.div {...fadeUp(0.2)}>
            <TiltCard className="card p-8 h-full" intensity={4}>
              <h3 className="text-xl font-display font-bold dark:text-white text-gray-900 mb-8">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">Name</label>
                  <input type="text"  name="name"    value={form.name}    onChange={handleChange} placeholder="Your name"       className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">Email</label>
                  <input type="email" name="email"   value={form.email}   onChange={handleChange} placeholder="your@email.com"  className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">Message</label>
                  <textarea           name="message" value={form.message} onChange={handleChange} placeholder="Your message..." rows={4} className={`${inputClass} resize-y`} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl gradient-btn flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                  <HiOutlinePaperAirplane className="w-5 h-5 rotate-90" />
                </button>
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
