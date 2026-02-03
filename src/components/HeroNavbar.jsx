import { Github, Linkedin, Moon, Send, Sun, Twitter } from 'lucide-react'
import { personalInfo } from '../data/personal'
import { useTheme } from '../hooks/useTheme'

const iconClassName = 'h-5 w-5'

export function HeroNavbar() {
  const { toggleTheme, isDark } = useTheme('dark')
  const { contact } = personalInfo

  const links = [
    { label: 'GitHub', href: contact?.github, Icon: Github },
    { label: 'LinkedIn', href: contact?.linkedin, Icon: Linkedin },
    { label: 'Twitter (X)', href: contact?.twitter, Icon: Twitter },
    { label: 'Telegram', href: contact?.telegram, Icon: Send },
  ].filter((l) => Boolean(l.href))

  return (
    <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left: availability badge */}
      <div className="flex items-center justify-between sm:justify-start">
        <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/15 px-3 py-1 text-xs font-medium text-green-300">
          Open for Work
        </span>
      </div>

      {/* Right: theme toggle + socials */}
      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/90 shadow-sm backdrop-blur-xl transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className={iconClassName} />
          ) : (
            <Moon className={iconClassName} />
          )}
          <span className="hidden sm:inline">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>

        <nav
          aria-label="Social links"
          className="flex items-center gap-2"
        >
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              <Icon className={iconClassName} />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}


