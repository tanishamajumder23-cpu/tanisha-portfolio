import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

// Ambient atmosphere so no area reads as flat black: a base gradient, a global
// dot-grid texture, drifting crimson glow orbs, and a vignette. Orbs parallax
// subtly on scroll.
export default function Background() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient — pure near-black with a faint dark-red lift up top */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#160b0b_0%,#0b0808_45%,#080808_100%)]" />

      {/* global dot-grid texture — very subtle, so empty areas aren't flat */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      {/* faint crimson grid lines running down the page for structure */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)',
          backgroundSize: '120px 100%',
        }}
      />

      {/* top-left dark-red glow */}
      <motion.div
        style={reduce ? undefined : { y: y1 }}
        className={`absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[#dc2626]/[0.09] blur-[130px] ${
          reduce ? '' : 'animate-drift'
        }`}
      />
      {/* right dark-red glow */}
      <motion.div
        style={reduce ? undefined : { y: y2 }}
        className={`absolute -right-52 top-1/4 h-[36rem] w-[36rem] rounded-full bg-[#991b1b]/[0.10] blur-[140px] ${
          reduce ? '' : 'animate-driftAlt'
        }`}
      />
      {/* mid-page glow so the middle never goes flat */}
      <motion.div
        style={reduce ? undefined : { y: y2 }}
        className={`absolute left-1/4 top-[45%] h-[32rem] w-[32rem] rounded-full bg-[#dc2626]/[0.06] blur-[150px] ${
          reduce ? '' : 'animate-driftAlt'
        }`}
      />
      {/* bottom center glow */}
      <motion.div
        style={reduce ? undefined : { y: y1 }}
        className={`absolute -bottom-52 left-1/3 h-[38rem] w-[38rem] rounded-full bg-[#7f1d1d]/[0.08] blur-[150px] ${
          reduce ? '' : 'animate-drift'
        }`}
      />

      {/* subtle vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_50%,transparent_60%,#050505_100%)]" />
    </div>
  )
}
