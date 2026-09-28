// Colored brand logos as inline SVGs, keyed by the `key` field in content.js.
// Simplified but recognizable marks — no external icon dependency.

const icons = {
  mongodb: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="#4FAA41"
        d="M16.6 2.3c-.2-.3-.4-.5-.6-.8-.2.3-.4.5-.6.8C13 5.6 10.3 9.6 10.3 15c0 5.9 3.9 9 5 10.2l.1.1c.2 1.4.2 2.7.1 4l.6 2 .6-2c-.1-1.3-.1-2.6.1-4l.1-.1c1.1-1.2 5-4.3 5-10.2 0-5.4-2.7-9.4-5.3-12.7Z"
      />
      <path
        fill="#3F9337"
        d="M16 29.3s0-19.7.7-27.8c-.2.3-.4.5-.6.8C13 5.6 10.3 9.6 10.3 15c0 5.9 3.9 9 5 10.2l.1.1c.2 1.4.2 2.7.1 4l.5 0Z"
      />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12" fill="#e2e8f0">
        ex
      </text>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.4">
        <ellipse cx="16" cy="16" rx="11" ry="4.2" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)" />
      </g>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="#539E43"
        d="M16 2 3.3 9.3v13.4L16 30l12.7-7.3V9.3L16 2Zm0 3 9.9 5.7v11.5L16 27 6.1 21.2V9.7L16 5Z"
      />
      <path fill="#539E43" d="M16 10.5c-3 0-4.7 1.3-4.7 3.4 0 2.3 1.8 2.9 4.6 3.2 2.4.3 2.7.6 2.7 1.2 0 .7-.6 1.1-2.1 1.1-1.9 0-2.4-.5-2.5-1.5h-2.3c.1 2.1 1.5 3.4 4.8 3.4 3.1 0 4.6-1.3 4.6-3.4 0-2.3-1.9-2.9-4.7-3.2-2.4-.3-2.6-.6-2.6-1.2 0-.6.5-1 1.9-1 1.4 0 2 .4 2.2 1.4h2.3c-.1-2-1.5-3.2-4.5-3.2Z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#3776AB" d="M15.9 3c-2.6 0-4.8.4-4.8 3.2v2.4h5v.9H8.4c-2.8 0-5 1.7-5 5.6 0 3.9 1.8 5.6 4.5 5.6h2v-3c0-2.5 2.2-4.6 4.9-4.6h5c2.3 0 4-1.9 4-4.3V6.2C23.8 4 22.5 3 19.9 3h-4Zm-2.7 2.2c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Z" />
      <path fill="#FFD43B" d="M16.1 29c2.6 0 4.8-.4 4.8-3.2v-2.4h-5v-.9h7.7c2.8 0 5-1.7 5-5.6 0-3.9-1.8-5.6-4.5-5.6h-2v3c0 2.5-2.2 4.6-4.9 4.6h-5c-2.3 0-4 1.9-4 4.3v3.6C8.2 28 9.5 29 12.1 29h4Zm2.7-2.2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Z" />
    </svg>
  ),
  groq: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12" fill="#F55036">
        groq
      </text>
    </svg>
  ),
  langchain: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <g fill="none" stroke="#1C3C3C" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="13" width="9" height="6" rx="3" stroke="#2AB090" />
        <rect x="19" y="13" width="9" height="6" rx="3" stroke="#2AB090" />
        <path d="M13 16h6" stroke="#2AB090" />
      </g>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <g fill="#2496ED">
        <rect x="5" y="14" width="4" height="4" rx="0.5" />
        <rect x="10" y="14" width="4" height="4" rx="0.5" />
        <rect x="15" y="14" width="4" height="4" rx="0.5" />
        <rect x="10" y="9.5" width="4" height="4" rx="0.5" />
        <rect x="15" y="9.5" width="4" height="4" rx="0.5" />
        <rect x="20" y="14" width="4" height="4" rx="0.5" />
      </g>
      <path
        fill="#2496ED"
        d="M29 15.5c-.6-.4-2-.5-3-.3-.1-1-.7-1.8-1.6-2.5l-.6-.4-.4.6c-.5.8-.7 2-.2 2.9-.3.2-.9.4-1.7.4H3.2c-.3 1.9.2 4.3 1.7 6 1.5 1.6 3.7 2.4 6.6 2.4 6.3 0 11-2.9 13.2-8.2 0.9 0 2.8 0 3.8-1.9.1-.1.3-.4.3-.5l-.5-.5Z"
      />
    </svg>
  ),
}

export default function TechIcon({ name, className = 'h-9 w-9' }) {
  const icon = icons[name]
  if (!icon) {
    return (
      <div className={`${className} grid place-items-center text-accent-soft`}>
        <span className="text-lg font-semibold">{name?.[0]?.toUpperCase()}</span>
      </div>
    )
  }
  return <span className={`${className} block`}>{icon}</span>
}
