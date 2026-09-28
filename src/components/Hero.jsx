import { motion } from 'framer-motion'
import { site, links } from '../data/content'
import { useResume } from '../hooks/useResume'
import HeroCard from './HeroCard'
import { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcons'

const EASE = [0.22, 1, 0.36, 1]

// Word-by-word stagger for the name.
const nameContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
}
const word = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

function Socials() {
  const items = [
    { Icon: GithubIcon, href: links.github, label: 'GitHub' },
    { Icon: LinkedinIcon, href: links.linkedin, label: 'LinkedIn' },
    { Icon: MailIcon, href: `mailto:${links.email}`, label: 'Email' },
  ]
  return (
    <div className="flex items-center gap-3">
      {items.map(({ Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.1 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-accent/50 hover:text-accent-soft"
        >
          <Icon className="h-[18px] w-[18px]" />
        </motion.a>
      ))}
    </div>
  )
}

export default function Hero() {
  const hasResume = useResume(site.resumePath)
  const nameWords = site.name.split(' ')

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 sm:pt-36 lg:pt-44">
      {/* socials: top-right on desktop */}
      <div className="mb-10 flex justify-end lg:absolute lg:right-6 lg:top-28 lg:mb-0">
        <Socials />
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs tracking-wide text-slate-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Available for internships & collaborations
          </motion.p>

          <motion.h1
            variants={nameContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl font-extralight leading-[1.05] tracking-tight text-slate-50 sm:text-6xl md:text-7xl"
          >
            {nameWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2">
                <motion.span variants={word} className="inline-block">
                  {w}
                  {i < nameWords.length - 1 && ' '}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-6"
          >
            <p className="text-lg font-light text-slate-300 sm:text-xl">{site.tagline}</p>
            <p className="text-lg font-medium text-gradient sm:text-xl">{site.accentTagline}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400"
          >
            {site.heroBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-magenta px-7 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">View my work</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#connect"
              className="rounded-full border border-white/15 px-7 py-3 text-sm text-slate-300 transition-colors duration-300 hover:border-accent/50 hover:text-white"
            >
              Get in touch
            </a>
            {hasResume && (
              <a
                href={site.resumePath}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent-soft underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Resume ↗
              </a>
            )}
          </motion.div>
        </div>

        {/* right: graphic card */}
        <HeroCard />
      </div>
    </section>
  )
}
