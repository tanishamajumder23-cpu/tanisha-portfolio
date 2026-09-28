import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { staggerContainer, fadeUp, fromLeft, fromRight, inViewProps } from '../lib/motion'
import SectionHeading from './SectionHeading'
import { GithubIcon } from './SocialIcons'

// A distinct abstract thumbnail per project, seeded by index for variety.
function ProjectArt({ index }) {
  const hue = 270 + index * 18
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`pg-${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 80% 62%)`} stopOpacity="0.5" />
          <stop offset="100%" stopColor={`hsl(${hue + 40} 75% 45%)`} stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#0c0a14" />
      <rect width="400" height="300" fill={`url(#pg-${index})`} />
      <g stroke={`hsl(${hue} 85% 75%)`} strokeOpacity="0.2" strokeWidth="1" fill="none">
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx={80 + index * 30} cy="150" r={30 + i * 22} />
        ))}
      </g>
      <g fill={`hsl(${hue} 90% 80%)`}>
        <circle cx={320 - index * 20} cy="80" r="5" />
        <circle cx="90" cy="220" r="4" />
        <circle cx="260" cy="200" r="3" />
      </g>
    </svg>
  )
}

function ProjectRow({ project, index }) {
  const flipped = index % 2 === 1
  const media = (
    <motion.div
      variants={flipped ? fromRight : fromLeft}
      className={`group relative ${flipped ? 'lg:order-2' : ''}`}
    >
      <div className="absolute -inset-3 rounded-3xl bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
        <div className="aspect-[4/3] overflow-hidden">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <ProjectArt index={index} />
          </div>
        </div>
      </div>
    </motion.div>
  )

  const body = (
    <motion.div variants={flipped ? fromLeft : fromRight} className={flipped ? 'lg:order-1' : ''}>
      <h3 className="text-2xl font-light tracking-tight text-slate-100 sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-slate-400">{project.blurb}</p>

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
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-accent/50 hover:text-white"
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
