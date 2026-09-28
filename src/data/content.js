// ============================================================================
//  EDIT EVERYTHING HERE
//  This is the single source of truth for the whole site. Update your bio,
//  projects, skills, and links below — no need to touch any component files.
// ============================================================================

export const site = {
  name: 'Tanisha Majumder.',
  // Used for the browser tab / meta if you want to tweak later.
  tagline: 'Computer Science & Engineering Student',
  accentTagline: 'AI & Full-Stack Developer',
  heroBio:
    'First-year CSE student who learns by building — across Web, AI, and DSA. I turn ideas into working products, from RAG-based apps to autonomous multi-agent systems.',
  // Resume: drop a file at /public/resume.pdf and the button appears automatically.
  resumePath: '/resume.pdf',
}

export const links = {
  github: 'https://github.com/tanishamajumder23-cpu',
  linkedin: 'https://www.linkedin.com/in/tanisha-majumder-758343372/',
  email: 'tanishamajumder23@gmail.com',
}

export const about = {
  paragraph:
    "I'm a first-year Computer Science & Engineering student at Siddaganga Institute of Technology who enjoys learning by building. I work across Web Development, Artificial Intelligence, and DSA — turning ideas into working products, from RAG-based AI apps to autonomous multi-agent systems. I'm active in tech communities like AI Brewery and DeCoders.",
  highlights: [
    { icon: '🎓', label: 'CGPA 9.08' },
    { icon: '🥈', label: '2nd place — Smart India Hackathon 2026 (Internal), Team Matrix' },
    { icon: '🥈', label: '2nd place — TCS Technology Day Hackathon' },
  ],
}

// Technologies — logos are pulled live from the Simple Icons CDN
// (https://cdn.simpleicons.org/<slug>) and rendered monochrome/white.
// `slug` is the Simple Icons slug; if a logo is missing the tile falls back
// to the name's initial automatically. Add/reorder freely.
export const technologies = [
  { slug: 'mongodb', name: 'MongoDB' },
  { slug: 'express', name: 'Express' },
  { slug: 'react', name: 'React' },
  { slug: 'nodedotjs', name: 'Node.js' },
  { slug: 'python', name: 'Python' },
  { slug: 'groq', name: 'Groq' },
  { slug: 'langchain', name: 'LangChain' },
  { slug: 'docker', name: 'Docker' },
]

// Projects — set `github` to null for team projects without a public repo.
// COVER IMAGES: drop a screenshot at public/projects/<slug>.png and it shows
// automatically; if the file is missing, a generated dark cover (icon + name)
// is used instead. `icon` picks the concept glyph (see ProjectCover.jsx).
export const projects = [
  {
    title: 'NetraSetu',
    slug: 'netrasetu',
    icon: 'eye',
    blurb:
      'An offline-first retinal teletriage system for Diabetic Retinopathy screening in rural India (Smart India Hackathon 2026, 2nd place). Checks fundus image quality, enhances low-quality images with adaptive contrast, extracts deep features with ResNet-18, and classifies DR across 5 severity levels using an explainable ECOC + RBF-SVM pipeline — routing higher-risk cases for clinical review. Improved Level-4 recall to 86.44%.',
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'ResNet-18', 'Explainable AI'],
    github: null,
  },
  {
    title: 'AURA — Retail Product Description Generator',
    slug: 'aura',
    icon: 'tag',
    blurb:
      'A GenAI/RAG tool that generates retail product descriptions from structured product attributes (TCS Technology Day, 2nd place).',
    tags: ['GenAI', 'RAG', 'Python', 'LLM'],
    github: null,
  },
  {
    title: 'TrueSource (VeriState)',
    slug: 'truesource',
    icon: 'shield',
    blurb:
      'AI-powered fact-checking web app using RAG. Extracts claims, retrieves real-time web evidence, and generates sourced verdicts with cards; supports article URLs and image/screenshot fact-checking.',
    tags: ['React', 'Node.js', 'Express', 'Groq', 'Tavily', 'RAG', 'MySQL'],
    github: 'https://github.com/tanishamajumder23-cpu/TrueSource',
  },
  {
    title: 'EchoTrace',
    slug: 'echotrace',
    icon: 'document',
    blurb:
      'Plagiarism detection system with a full NLP pipeline (cleaning, tokenization, stop-word removal, stemming) using TF-IDF + cosine similarity to find and visualize document overlap. Modular architecture.',
    tags: ['Python', 'scikit-learn', 'NLTK', 'NLP', 'TF-IDF'],
    github: 'https://github.com/tanishamajumder23-cpu/EchoTrace',
  },
  {
    title: 'Aegis AutoDev Agency',
    slug: 'aegis',
    icon: 'bot',
    blurb:
      'An autonomous multi-agent framework (CrewAI + Llama 3.3) that audits legacy files, plans refactors, and pushes self-healing fixes to GitHub.',
    tags: ['Python', 'CrewAI', 'Llama 3.3', 'Multi-Agent', 'Automation'],
    github: 'https://github.com/tanishamajumder23-cpu/Aegis-AutoDev-Agency-Project',
  },
]

export const connect = {
  heading: "Let's Connect",
  location: 'Bengaluru, India',
  note: 'Open to internships, collaborations & cool projects',
}

// Navigation anchors (top nav)
export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Connect', href: '#connect' },
]
