import { links, site } from '../data/content'
import { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { Icon: GithubIcon, href: links.github, label: 'GitHub' },
    { Icon: LinkedinIcon, href: links.linkedin, label: 'LinkedIn' },
    { Icon: MailIcon, href: `mailto:${links.email}`, label: 'Email' },
  ]
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} {site.name.replace(/\.$/, '')}
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="text-zinc-500 transition-colors hover:text-accent-soft"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
