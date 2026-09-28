import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { staggerContainer, fadeUp, fromLeft, fromRight, inViewProps } from '../lib/motion'
import SectionHeading from './SectionHeading'
import ProjectPanel from './ProjectPanel'
import TechBadge from './TechBadge'
import { GithubIcon } from './SocialIcons'

function ProjectRow({ project, index }) {
  const flipped = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')

  const panel = (
    <motion.div
      variants={flipped ? fromRight : fromLeft}
      className={`transition-transform duration-500 group-hover:scale-[1.02] ${flipped ? 'lg:order-2' : ''}`}
    >
      <ProjectPanel project={project} index={index} />
    </motion.div>
  )

  const body = (
    <motion.div variants={flipped ? fromLeft : fromRight} className={flipped ? 'lg:order-1' : ''}>
      {/* crimson number + accent line */}
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-[#f87171]">{number}</span>
        <span className="h-px w-10 bg-gradient-to-r from-[#dc2626] to-transparent" />
      </div>

      <h3 className="text-2xl font-medium tracking-tight text-white sm:text-4xl">
        {project.title}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
        {project.blurb}
      </p>

      {/* all tags */}
      <motion.div variants={staggerContainer(0.05, 0.05)} className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechBadge key={tag} tag={tag} />
        ))}
      </motion.div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition-all duration-300 hover:border-[#dc2626]/60 hover:bg-[#dc2626]/10 hover:text-white"
        >
          <GithubIcon className="h-4 w-4" />
          View on GitHub
        </a>
      )}
    </motion.div>
  )

  return (
    <motion.div
      variants={staggerContainer(0.15)}
      {...inViewProps}
      className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.015] p-6 transition-all duration-500 hover:border-[#dc2626]/40 hover:bg-white/[0.03] hover:shadow-[0_0_60px_-18px_rgba(220,38,38,0.55)] sm:p-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {panel}
        {body}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.div variants={staggerContainer()} {...inViewProps}>
        <SectionHeading kicker="Projects" title="Things I've built" />
      </motion.div>

      <div className="mt-6 space-y-6">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
