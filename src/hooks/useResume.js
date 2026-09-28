import { useEffect, useState } from 'react'

// Returns true only if a file exists at `path` (e.g. /resume.pdf).
// Lets the Resume button hide itself automatically when no file is present.
export function useResume(path) {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    let active = true
    fetch(path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        // A dev server may return index.html (200) for a missing file — guard
        // against that by requiring a PDF-ish content type.
        if (active && res.ok && !type.includes('text/html')) {
          setExists(true)
        }
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [path])

  return exists
}
