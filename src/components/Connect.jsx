import { motion } from 'framer-motion'
import { connect, links } from '../data/content'
import { staggerContainer, fadeUp, inViewProps } from '../lib/motion'

export default function Connect() {
  return (
    <section id="connect" className="relative overflow-hidden py-20 sm:py-24">
      {/* focused glow behind the CTA */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dc2626]/[0.10] blur-[120px]" />

      <motion.div
        variants={staggerContainer(0.14)}
        {...inViewProps}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="mb-4 block text-sm font-medium uppercase tracking-[0.3em] text-accent-soft/80"
        >
          Get in touch
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="text-5xl font-light tracking-tight text-white sm:text-7xl"
        >
          {connect.heading}
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center justify-center gap-3 text-zinc-400 sm:flex-row sm:gap-8"
        >
          <span className="inline-flex items-center gap-2">
            <span>📍</span> {connect.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span>🚀</span> {connect.note}
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href={`mailto:${links.email}`}
            className="group relative inline-flex items-center gap-2 rounded-full p-[1.5px]"
          >
            {/* animated gradient border */}
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(110deg,#7f1d1d,#ef4444,#dc2626,#7f1d1d)] bg-[length:200%_100%] animate-shimmer" />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-ink-800">
              Get in Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-6 text-sm text-zinc-500">
          or email me at{' '}
          <a
            href={`mailto:${links.email}`}
            className="text-accent-soft underline-offset-4 hover:text-white hover:underline"
          >
            {links.email}
          </a>
        </motion.p>
      </motion.div>
    </section>
  )
}
