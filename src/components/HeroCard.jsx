import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { site } from '../data/content'

// A charcoal card with a faint crimson accent that gently bobs and tilts toward
// the cursor (subtle 3D parallax). Shows your photo (site.photo) when set,
// otherwise an abstract geometric graphic. The frame stays the same either way.
export default function HeroCard() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  })

  const handleMove = (e) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative mx-auto w-full max-w-sm [perspective:1200px] lg:mx-0"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={reduce ? '' : 'animate-bob'}
      >
        {/* faint crimson glow behind card */}
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#dc2626]/20 via-[#7f1d1d]/10 to-transparent blur-2xl" />

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 via-[#dc2626]/20 to-white/5 p-[1px] shadow-2xl">
          <div className="relative aspect-square overflow-hidden rounded-[1.7rem] bg-ink-800/80">
            <HeroImage />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Shows your photo when site.photo is set (and loads); otherwise the abstract
// graphic. A subtle gradient keeps a photo readable against the dark UI.
function HeroImage() {
  const [failed, setFailed] = useState(false)

  if (!site.photo || failed) return <AbstractArt />

  return (
    <>
      <img
        src={site.photo}
        alt="Tanisha Majumder"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </>
  )
}

function AbstractArt() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="hg1" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.30" />
          <stop offset="55%" stopColor="#7f1d1d" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      <rect width="400" height="400" fill="url(#hg1)" />

      {/* concentric rings — mostly white/graphite, crimson only on the inner */}
      {[150, 115, 80, 45].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke={i >= 2 ? 'url(#hg2)' : '#ffffff'}
          strokeOpacity={i >= 2 ? 0.5 : 0.1 + i * 0.05}
          strokeWidth={i === 0 ? 1 : 1.4}
        />
      ))}

      {/* orbiting nodes */}
      <circle cx="200" cy="50" r="6" fill="#dc2626" />
      <circle cx="350" cy="200" r="4" fill="#ffffff" fillOpacity="0.5" />
      <circle cx="200" cy="350" r="5" fill="#f87171" />
      <circle cx="72" cy="160" r="3.5" fill="#ffffff" fillOpacity="0.4" />

      {/* thin diagonal grid lines */}
      <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={i * 80} y1="0" x2={i * 80 - 120} y2="400" />
        ))}
      </g>

      {/* glowing crimson core */}
      <circle cx="200" cy="200" r="14" fill="url(#hg2)" />
      <circle cx="200" cy="200" r="26" fill="none" stroke="#dc2626" strokeOpacity="0.45" />
    </svg>
  )
}
