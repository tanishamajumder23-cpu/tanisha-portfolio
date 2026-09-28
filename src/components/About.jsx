import { motion } from 'framer-motion'
import { about } from '../data/content'
import { staggerContainer, fadeUp, popIn, inViewProps } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <motion.div variants={staggerContainer()} {...inViewProps}>
        <SectionHeading kicker="About" title="A little about me" />

        <motion.p
          variants={fadeUp}
          className="max-w-3xl text-lg font-light leading-relaxed text-zinc-300"
        >
          {about.paragraph}
        </motion.p>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {about.highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={popIn}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.04]"
            >
              <div className="mb-3 text-2xl">{h.icon}</div>
              <p className="text-sm leading-snug text-zinc-300 group-hover:text-white">
                {h.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
