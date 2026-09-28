import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

// Abstract geometric SVG inside a purple-pink gradient card.
// Gently bobs, and tilts toward the cursor (subtle 3D parallax).
// Swap the <svg> below for an <img> of a photo later — the frame stays.
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
        {/* glow behind card */}
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-magenta/30 via-accent/20 to-accent-deep/30 blur-2xl" />

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-accent-deep/40 via-fuchsia-700/25 to-accent/30 p-[1px] shadow-2xl">
          <div className="relative aspect-square overflow-hidden rounded-[1.7rem] bg-ink-800/80">
            <AbstractArt />
          </div>
        </div>
      </motion.div>
    </motion.div>
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
          <stop offset="0%" stopColor="#d946ef" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#7c3aed" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0c0a14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>

      <rect width="400" height="400" fill="url(#hg1)" />

      {/* concentric rings */}
      {[150, 115, 80, 45].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="url(#hg2)"
          strokeOpacity={0.25 + i * 0.12}
          strokeWidth={i === 0 ? 1 : 1.4}
        />
      ))}

      {/* orbiting nodes */}
      <circle cx="200" cy="50" r="6" fill="#f0abfc" />
      <circle cx="350" cy="200" r="4" fill="#c084fc" />
      <circle cx="200" cy="350" r="5" fill="#e879f9" />
      <circle cx="72" cy="160" r="3.5" fill="#a855f7" />

      {/* thin diagonal grid lines */}
      <g stroke="#c084fc" strokeOpacity="0.12" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={i * 80} y1="0" x2={i * 80 - 120} y2="400" />
        ))}
      </g>

      {/* glowing core */}
      <circle cx="200" cy="200" r="14" fill="url(#hg2)" />
      <circle cx="200" cy="200" r="26" fill="none" stroke="#f0abfc" strokeOpacity="0.4" />
    </svg>
  )
}
