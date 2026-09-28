import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { staggerContainer, fadeUp, inViewProps } from '../lib/motion'
import SectionHeading from './SectionHeading'
import TechBadge from './TechBadge'
import { GithubIcon } from './SocialIcons'

// A clean list row: index, title, description, and an animated row of tech
// badges (real logos where they exist). No cover image.
function ProjectItem({ project, index }) {
  return (
    <motion.article
      variants={staggerContainer(0.08)}
      {...inViewProps}
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-colors duration-500 hover:border-[#dc2626]/30 hover:bg-white/[0.03] sm:p-8"
    >
      {/* faint crimson glow on hover */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[#dc2626]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        {/* index + accent rule */}
        <motion.div variants={fadeUp} className="flex shrink-0 items-start gap-3 sm:flex-col sm:items-center">
          <span className="font-mono text-sm text-[#f87171]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="hidden h-full w-px flex-1 bg-gradient-to-b from-[#dc2626]/40 to-transparent sm:block" />
        </motion.div>

        <div className="min-w-0 flex-1">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-light tracking-tight text-zinc-100 transition-colors group-hover:text-white sm:text-2xl">
              {project.title}
            </h3>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-zinc-300 transition-all duration-300 hover:border-[#dc2626]/50 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            )}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {project.blurb}
          </motion.p>

          {/* animated tech-stack badges */}
          <motion.div variants={staggerContainer(0.06, 0.05)} className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechBadge key={tag} tag={tag} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-4xl px-6 py-24 sm:py-28">
      <motion.div variants={staggerContainer()} {...inViewProps}>
        <SectionHeading kicker="Projects" title="Things I've built" />
      </motion.div>

      <div className="mt-4 space-y-5">
        {projects.map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
