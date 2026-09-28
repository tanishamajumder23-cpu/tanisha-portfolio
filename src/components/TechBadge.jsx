import { useState } from 'react'
import { motion } from 'framer-motion'
import { popIn } from '../lib/motion'

// Map a project tag to a Simple Icons slug where a real logo exists.
// Concept tags (ML, RAG, NLP, …) have no logo and get a small glyph instead.
const SLUGS = {
  Python: 'python',
  React: 'react',
  'Node.js': 'nodedotjs',
  Express: 'express',
  Docker: 'docker',
  MySQL: 'mysql',
  'scikit-learn': 'scikitlearn',
  NLTK: 'python',
}

// A small crimson "spark" glyph for concept tags with no brand logo.
function SparkGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f87171]" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 5.7a4 4 0 0 0 2.5 2.5L22 12l-5.7 1.8a4 4 0 0 0-2.5 2.5L12 22l-1.8-5.7a4 4 0 0 0-2.5-2.5L2 12l5.7-1.8a4 4 0 0 0 2.5-2.5L12 2z" />
    </svg>
  )
}

function BadgeIcon({ tag }) {
  const slug = SLUGS[tag]
  const [failed, setFailed] = useState(false)

  if (!slug || failed) return <SparkGlyph />

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/f87171`}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-4 w-4 object-contain"
    />
  )
}

// A single animated tech badge: pops in on view, lifts + glows on hover,
// icon does a small bounce.
export default function TechBadge({ tag }) {
  return (
    <motion.span
      variants={popIn}
      whileHover={{ y: -3, scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className="group/badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition-colors duration-300 hover:border-[#dc2626]/50 hover:bg-[#dc2626]/[0.08] hover:text-white hover:shadow-[0_0_20px_-6px_rgba(220,38,38,0.6)]"
    >
      <span className="transition-transform duration-300 group-hover/badge:-translate-y-0.5 group-hover/badge:rotate-12">
        <BadgeIcon tag={tag} />
      </span>
      {tag}
    </motion.span>
  )
}
