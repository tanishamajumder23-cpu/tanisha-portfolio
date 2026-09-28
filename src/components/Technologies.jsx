import { motion } from 'framer-motion'
import { technologies } from '../data/content'
import { staggerContainer, fadeUp, inViewProps } from '../lib/motion'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'

function Tile({ tech }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="group relative flex w-28 shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-accent/[0.06]"
    >
      {/* glow on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_30px_-4px_rgba(168,85,247,0.6)] transition-opacity duration-300 group-hover:opacity-100" />
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:scale-110">
        <TechIcon name={tech.key} />
      </span>
      <span className="text-xs font-medium text-slate-400 transition-colors group-hover:text-white">
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function Technologies() {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...technologies, ...technologies]

  return (
    <section id="technologies" className="relative py-24 sm:py-28">
      <motion.div
        variants={staggerContainer()}
        {...inViewProps}
        className="mx-auto max-w-6xl px-6 text-center"
      >
        <div className="flex flex-col items-center">
          <SectionHeading kicker="Technologies" title="My stack — MERN + AI" />
        </div>
        <motion.p variants={fadeUp} className="mx-auto -mt-6 mb-2 max-w-lg text-sm text-slate-500">
          Tools I reach for when turning ideas into working products.
        </motion.p>
      </motion.div>

      {/* marquee row */}
      <motion.div
        variants={fadeUp}
        {...inViewProps}
        className="marquee-mask pause-on-hover relative mt-12 overflow-hidden"
      >
        <div className="marquee-track flex w-max animate-marquee gap-5 px-3">
          {loop.map((tech, i) => (
            <Tile key={`${tech.key}-${i}`} tech={tech} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
