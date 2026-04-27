import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { HiArrowRight, HiOutlineChatAlt2 } from 'react-icons/hi'
import profileImg from '../assets/profile.jpg'

function useTypewriter(words, speed = 75, pause = 2200) {
  const [index, setIndex]     = useState(0)
  const [text, setText]       = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const timeout = deleting ? Math.round(speed / 2) : text === word ? pause : speed

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex(i => (i + 1) % words.length)
      } else {
        setText(prev =>
          deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
        )
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, speed, pause])

  return text
}

function ProfileCard() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [16, -16]), { stiffness: 200, damping: 26 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 200, damping: 26 })

  const handleMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width  - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative cursor-pointer select-none"
    >
      {/* Orbital rings */}
      <div
        className="absolute rounded-full animate-spin-slow pointer-events-none"
        style={{
          inset: '-28px',
          border: '1px solid rgba(167,139,250,0.22)',
          borderRadius: '9999px',
        }}
      />
      <div
        className="absolute rounded-full animate-spin-reverse pointer-events-none"
        style={{
          inset: '-52px',
          border: '1px dashed rgba(244,63,94,0.14)',
          borderRadius: '9999px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute rounded-full animate-pulse-glow pointer-events-none"
        style={{
          inset: '-24px',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.32) 0%, rgba(190,24,93,0.16) 50%, transparent 75%)',
          filter: 'blur(24px)',
          borderRadius: '9999px',
        }}
      />

      {/* Photo with animated gradient border */}
      <div
        className="relative rounded-full"
        style={{
          padding: '3px',
          background:
            'linear-gradient(135deg,#6d28d9 0%,#a21caf 30%,#be185d 55%,#ea580c 80%,#6d28d9 100%)',
          backgroundSize: '300% 300%',
          animation: 'gradient-shift 5s ease infinite',
          boxShadow:
            '0 0 60px rgba(124,58,237,0.45), 0 0 120px rgba(190,24,93,0.2), 0 32px 80px rgba(0,0,0,0.5)',
          borderRadius: '9999px',
        }}
      >
        <img
          src={profileImg}
          alt="Madika Jain"
          className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[356px] lg:h-[356px] rounded-full object-cover block"
          style={{ transform: 'translateZ(20px)' }}
        />
      </div>

      {/* Floating badge — Role */}
      <motion.div
        animate={{ y: [0, -11, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-14 top-1/3 pointer-events-none"
        style={{ transform: 'translateZ(50px)' }}
      >
        <div
          className="px-4 py-2.5 rounded-2xl shadow-depth"
          style={{
            background: 'rgba(12,12,18,0.88)',
            border: '1px solid rgba(167,139,250,0.18)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Current Role</p>
          <p className="text-sm font-bold text-white whitespace-nowrap">CollegeDunia ✍️</p>
        </div>
      </motion.div>

      {/* Floating badge — MBA */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -right-12 bottom-1/4 pointer-events-none"
        style={{ transform: 'translateZ(50px)' }}
      >
        <div
          className="px-4 py-2.5 rounded-2xl shadow-depth"
          style={{
            background: 'rgba(12,12,18,0.88)',
            border: '1px solid rgba(251,146,60,0.18)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Education</p>
          <p className="text-sm font-bold text-white whitespace-nowrap">MBA — Finance & HR 🎓</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const role = useTypewriter([
    'Content Writer',
    'MBA Candidate',
    'AI Explorer',
    'Strategic Thinker',
  ])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* ── Background ──────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -left-40 w-[800px] h-[800px] rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.18) 0%, rgba(109,40,217,0.05) 45%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 right-0 w-[700px] h-[700px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(190,24,93,0.14) 0%, rgba(234,88,12,0.06) 45%, transparent 70%)',
            animationDelay: '1.8s',
          }}
        />

        {/* Perspective grid */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[44%]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.2) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            transform: 'perspective(480px) rotateX(65deg)',
            transformOrigin: 'bottom center',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 80%)',
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7 border"
              style={{ background: 'rgba(52,211,153,0.07)', borderColor: 'rgba(52,211,153,0.22)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400 tracking-wider">
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[70px] font-display font-bold leading-[1.05] dark:text-white text-gray-900"
            >
              Hi, I'm
              <br />
              <span className="gradient-text">Madika Jain</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-5 flex items-center gap-2 h-9"
            >
              <span className="text-xl sm:text-2xl font-semibold dark:text-gray-200 text-gray-600">
                {role}
              </span>
              <span className="inline-block w-[2px] h-7 bg-violet-400 cursor-blink" />
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 text-base sm:text-lg dark:text-gray-400 text-gray-500 leading-relaxed max-w-lg"
            >
              Content Writer at CollegeDunia | MBA Candidate | AI-Augmented Research Content Strategy
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-3 text-sm dark:text-gray-500 text-gray-400 max-w-md leading-relaxed"
            >
              Blending research, storytelling, and emerging AI tools to create insightful educational content.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {['Content', 'Strategy', 'Education Insights', 'AI-Driven Research'].map((tag, i) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-300 ${
                    i === 1
                      ? 'dark:bg-rose-500/10 bg-rose-50 dark:border-rose-500/25 border-rose-200 dark:text-rose-300 text-rose-600'
                      : 'dark:bg-white/5 bg-gray-100 dark:border-white/8 border-gray-200 dark:text-gray-300 text-gray-600 hover:dark:border-violet-500/30 hover:border-violet-300'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full gradient-btn text-sm"
              >
                View Portfolio
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 dark:text-white text-gray-700 hover:dark:border-violet-500/35 hover:border-violet-300 transition-all duration-300"
              >
                Connect
                <HiOutlineChatAlt2 className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right — 3D profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
            style={{ perspective: '1200px' }}
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
