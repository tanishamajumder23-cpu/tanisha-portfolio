import { useState } from 'react'

// Concept glyphs (thin line icons) keyed by project `icon` in content.js.
const glyphs = {
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12.2V5a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.5" cy="7.5" r="1.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h4M9 17h6" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 8V4M9 2h6" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <path d="M2 13h2M20 13h2" />
    </>
  ),
}

function GeneratedCover({ project }) {
  const glyph = glyphs[project.icon] || glyphs.document
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-800">
      {/* charcoal gradient panel */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,#1c1c1c_0%,#141414_45%,#0a0a0a_100%)]" />
      {/* faint crimson corner glow */}
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#dc2626]/[0.10] blur-3xl" />
      {/* thin grid lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id={`grid-${project.slug}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.slug})`} />
      </svg>

      {/* icon + name */}
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#f87171]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
            aria-hidden="true"
          >
            {glyph}
          </svg>
        </span>
        <span className="text-lg font-light tracking-wide text-zinc-200">{project.title}</span>
        <span className="h-px w-10 bg-[#dc2626]/60" />
      </div>
    </div>
  )
}

// Tries a real screenshot at /projects/<slug>.png, falls back to the
// generated cover if the file is absent or fails to load.
export default function ProjectCover({ project }) {
  const [useImage, setUseImage] = useState(true)
  const src = `/projects/${project.slug}.png`

  if (!useImage) return <GeneratedCover project={project} />

  return (
    <>
      <img
        src={src}
        alt={`${project.title} preview`}
        loading="lazy"
        onError={() => setUseImage(false)}
        className="h-full w-full object-cover"
      />
    </>
  )
}
