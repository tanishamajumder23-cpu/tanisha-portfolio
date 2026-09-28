import { motion } from 'framer-motion'
import { popIn } from '../lib/motion'
import { TECH_ICONS } from './techIconMap'

// A single animated tech badge: pops in on view, lifts + glows on hover.
// Shows the real brand logo (react-icons) when one exists, otherwise just the
// clean text label — no icon, no fallback letter.
export default function TechBadge({ tag }) {
  const Icon = TECH_ICONS[tag]

  return (
    <motion.span
      variants={popIn}
      whileHover={{ y: -3, scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className="group/badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition-colors duration-300 hover:border-[#dc2626]/50 hover:bg-[#dc2626]/[0.08] hover:text-white hover:shadow-[0_0_20px_-6px_rgba(220,38,38,0.6)]"
    >
      {Icon && (
        <Icon className="h-4 w-4 shrink-0 text-white transition-transform duration-300 group-hover/badge:-translate-y-0.5 group-hover/badge:scale-110" />
      )}
      {tag}
    </motion.span>
  )
}
