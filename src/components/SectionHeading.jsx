import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

// Small kicker + large thin heading, animated as the first staggered child.
export default function SectionHeading({ kicker, title }) {
  return (
    <motion.div variants={fadeUp} className="mb-12">
      {kicker && (
        <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-accent-soft/80">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-extralight tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </motion.div>
  )
}
