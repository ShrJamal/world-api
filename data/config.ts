import { useMutation, useQuery } from 'react-query'
import { reactQuery } from '.'

let isDarkMode: boolean | undefined
export function useDarkMode() {
  return useQuery<boolean>('darkMode', () => {
    if (typeof isDarkMode === 'undefined') {
      isDarkMode = localStorage.getItem('darkMode') === 'true'
      setDarkMode(isDarkMode)
    }
    return isDarkMode
  })
}

export function mutateDarkMode() {
  return useMutation(async () => {
    isDarkMode = !isDarkMode
    setDarkMode(isDarkMode)
    reactQuery.invalidateQueries(['darkMode'])
  })
}

function setDarkMode(isDarkMode: boolean) {
  document.documentElement.setAttribute(
    'data-theme',
    isDarkMode ? 'dark' : 'light',
  )
  if (isDarkMode) document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
}
