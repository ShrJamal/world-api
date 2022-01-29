import { useEffect, useState } from 'react'

type ThemeType = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType | undefined>()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!theme) {
      const t = localStorage.getItem('theme') ?? ''
      setTheme(t === 'light' ? t : 'dark')
      return
    }
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const isDarkMode = theme === 'dark'
  return {
    isDarkMode,
    toggleTheme: () => setTheme(isDarkMode ? 'light' : 'dark'),
  }
}
