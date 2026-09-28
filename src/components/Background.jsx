import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

// Ambient atmosphere: slow-drifting purple/magenta glow orbs bleeding in from
// the edges + a grain overlay. Orbs parallax subtly on scroll.
export default function Background() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#140f22_0%,#0a0812_45%,#08070d_100%)]" />

      {/* top-left magenta orb */}
      <motion.div
        style={reduce ? undefined : { y: y1 }}
        className={`absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-fuchsia-600/25 blur-[120px] ${
          reduce ? '' : 'animate-drift'
        }`}
      />
      {/* right purple orb */}
      <motion.div
        style={reduce ? undefined : { y: y2 }}
        className={`absolute -right-52 top-1/4 h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-[130px] ${
          reduce ? '' : 'animate-driftAlt'
        }`}
      />
      {/* bottom center glow */}
      <motion.div
        style={reduce ? undefined : { y: y1 }}
        className={`absolute -bottom-52 left-1/3 h-[36rem] w-[36rem] rounded-full bg-purple-700/20 blur-[140px] ${
          reduce ? '' : 'animate-drift'
        }`}
      />

      {/* subtle vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_50%,transparent_55%,#050409_100%)]" />
    </div>
  )
}
