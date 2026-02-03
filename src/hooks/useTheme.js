import { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'theme'

export function useTheme(defaultTheme = 'dark') {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
      if (stored === 'light' || stored === 'dark') return stored
    } catch {
      // ignore
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.classList.toggle('dark', theme === 'dark')

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, setTheme, toggleTheme, isDark: theme === 'dark' }
}


