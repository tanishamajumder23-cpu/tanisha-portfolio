import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { staggerContainer, fadeUp, fromLeft, fromRight, inViewProps } from '../lib/motion'
import SectionHeading from './SectionHeading'
import ProjectCover from './ProjectCover'
import { GithubIcon } from './SocialIcons'

function ProjectRow({ project, index }) {
  const flipped = index % 2 === 1
  const media = (
    <motion.div
      variants={flipped ? fromRight : fromLeft}
      className={`group relative ${flipped ? 'lg:order-2' : ''}`}
    >
      <div className="absolute -inset-3 rounded-3xl bg-[#dc2626]/[0.12] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-colors duration-500 group-hover:border-[#dc2626]/40">
        <div className="aspect-[4/3] overflow-hidden">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <ProjectCover project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  )

  const body = (
    <motion.div variants={flipped ? fromLeft : fromRight} className={flipped ? 'lg:order-1' : ''}>
      <h3 className="text-2xl font-light tracking-tight text-zinc-100 sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-zinc-400">{project.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-xs text-accent-soft transition-colors duration-300 hover:border-accent/60 hover:bg-accent/15 hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:border-accent/50 hover:text-white"
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </a>
      )}
    </motion.div>
  )

  return (
    <motion.div
      variants={staggerContainer(0.15)}
      {...inViewProps}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {media}
      {body}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <motion.div variants={staggerContainer()} {...inViewProps}>
        <SectionHeading kicker="Projects" title="Things I've built" />
      </motion.div>

      <div className="mt-4 space-y-20 sm:space-y-24">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
