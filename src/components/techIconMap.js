// Real brand logos as components from react-icons' Simple Icons set.
// Keyed by the display label used in content.js (tags and tech names).
// Anything not in this map has no brand logo and renders as clean text.
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiDocker,
  SiTailwindcss,
  SiScikitlearn,
  SiMysql,
  SiLangchain,
  SiCrewai,
} from 'react-icons/si'

export const TECH_ICONS = {
  React: SiReact,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Python: SiPython,
  Docker: SiDocker,
  Tailwind: SiTailwindcss,
  'scikit-learn': SiScikitlearn,
  MySQL: SiMysql,
  LangChain: SiLangchain,
  CrewAI: SiCrewai,
}
