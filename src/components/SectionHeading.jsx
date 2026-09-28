import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

// Small kicker + large thin heading, animated as the first staggered child.
export default function SectionHeading({ kicker, title }) {
  return (
    <motion.div variants={fadeUp} className="mb-10">
      {kicker && (
        <span className="mb-4 block text-sm font-medium uppercase tracking-[0.3em] text-accent-soft/80">
          {kicker}
        </span>
      )}
      <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </motion.div>
  )
}
