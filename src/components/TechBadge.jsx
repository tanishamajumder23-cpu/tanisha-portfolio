import { useState } from 'react'
import { motion } from 'framer-motion'
import { popIn } from '../lib/motion'

// Map a tech tag to its Simple Icons slug where a real brand logo exists.
// Tags not listed here (RAG, LLM, NLP, ML, ResNet-18, Llama 3.3, …) have no
// brand logo and show a small neutral dot instead of an icon.
const SLUGS = {
  React: 'react',
  'Node.js': 'nodedotjs',
  Express: 'express',
  MongoDB: 'mongodb',
  Python: 'python',
  Docker: 'docker',
  Tailwind: 'tailwindcss',
  'scikit-learn': 'scikitlearn',
  MySQL: 'mysql',
  LangChain: 'langchain',
  Groq: 'groq',
}

function BadgeIcon({ tag }) {
  const slug = SLUGS[tag]
  const [failed, setFailed] = useState(false)

  // No brand logo → small neutral dot, keeping the row aligned and clean.
  if (!slug || failed) {
    return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600 group-hover/badge:bg-[#f87171]" />
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/white`}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-4 w-4 shrink-0 object-contain opacity-90"
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
      <span className="flex items-center transition-transform duration-300 group-hover/badge:-translate-y-0.5 group-hover/badge:scale-110">
        <BadgeIcon tag={tag} />
      </span>
      {tag}
    </motion.span>
  )
}
