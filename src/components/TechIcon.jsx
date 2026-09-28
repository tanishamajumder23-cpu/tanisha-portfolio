import { useState } from 'react'

// Real brand logos from the Simple Icons CDN, rendered white for a monochrome
// look. If a slug is missing (some brands aren't in Simple Icons), it falls
// back to the name's initial so a tile is never empty.
export default function TechIcon({ slug, name, className = 'h-10 w-10' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !slug) {
    return (
      <div className={`${className} grid place-items-center rounded-md bg-white/5 text-zinc-200`}>
        <span className="text-lg font-semibold">{name?.[0]?.toUpperCase()}</span>
      </div>
    )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/white`}
      alt={`${name} logo`}
      loading="lazy"
      width={40}
      height={40}
      onError={() => setFailed(true)}
      className={`${className} object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
    />
  )
}
