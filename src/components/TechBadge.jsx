import { motion } from 'framer-motion'
import { popIn } from '../lib/motion'
import { TECH_ICONS } from './techIconMap'

// A single animated tech chip: pops in on view, lifts + glows on hover.
// Crimson-tinted (border + text) on a dark chip so tags read clearly.
// Shows the real brand logo (react-icons) when one exists; otherwise text only.
export default function TechBadge({ tag }) {
  const Icon = TECH_ICONS[tag]

  return (
    <motion.span
      variants={popIn}
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className="group/badge inline-flex items-center gap-1.5 rounded-full border border-[#dc2626]/35 bg-[#dc2626]/[0.08] px-3 py-1.5 text-xs font-medium text-[#fca5a5] transition-colors duration-300 hover:border-[#dc2626]/80 hover:bg-[#dc2626]/20 hover:text-white hover:shadow-[0_0_18px_-6px_rgba(220,38,38,0.7)]"
    >
      {Icon && (
        <Icon className="h-3.5 w-3.5 shrink-0 text-white transition-transform duration-300 group-hover/badge:-translate-y-0.5 group-hover/badge:scale-110" />
      )}
      {tag}
    </motion.span>
  )
}
