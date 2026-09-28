import { motion } from 'framer-motion'
import { about } from '../data/content'
import { staggerContainer, fadeUp, popIn, inViewProps } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.div variants={staggerContainer()} {...inViewProps}>
        <SectionHeading kicker="About" title="A little about me" />

        <motion.p
          variants={fadeUp}
          className="max-w-4xl text-xl font-light leading-relaxed text-zinc-200 sm:text-2xl"
        >
          {about.paragraph}
        </motion.p>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          className="mt-10 grid gap-5 sm:grid-cols-3"
        >
          {about.highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={popIn}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-[#dc2626]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-16px_rgba(220,38,38,0.6)]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#dc2626]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 text-3xl">{h.icon}</div>
              <p className="text-base leading-snug text-zinc-200 group-hover:text-white">
                {h.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
