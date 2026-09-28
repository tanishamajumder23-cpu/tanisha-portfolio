import { TECH_ICONS } from './techIconMap'

// A designed graphic panel that fills the "image" half of a project row until a
// real screenshot exists: a dark crimson-tinted card with a big faded project
// number and the project's main tech logos arranged in tiles.
export default function ProjectPanel({ project, index }) {
  const number = String(index + 1).padStart(2, '0')
  // Project's tags that have a real brand logo → shown as tiles in the panel.
  const logos = project.tags
    .map((tag) => [tag, TECH_ICONS[tag]])
    .filter(([, Icon]) => Icon)
    .slice(0, 6)

  // Alternate the crimson glow corner for variety down the page.
  const glow =
    index % 2 === 0
      ? 'left-[-20%] top-[-25%]'
      : 'right-[-20%] top-[-25%]'

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#171012] via-[#0d0d0d] to-black" />
      {/* crimson glow */}
      <div className={`absolute h-64 w-64 rounded-full bg-[#dc2626]/20 blur-3xl ${glow}`} />
      {/* faint grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
        <defs>
          <pattern id={`pg-${index}`} width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0V36" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pg-${index})`} />
      </svg>

      {/* big faded number */}
      <span className="pointer-events-none absolute -bottom-6 left-3 select-none font-sans text-[9rem] font-thin leading-none text-white/[0.06] sm:text-[11rem]">
        {number}
      </span>

      {/* crimson corner accent */}
      <span className="absolute right-5 top-5 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-[#dc2626]/50" />

      {/* tech logo tiles */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="flex max-w-[80%] flex-wrap items-center justify-center gap-3">
          {logos.map(([tag, Icon]) => (
            <div
              key={tag}
              title={tag}
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
            >
              <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
