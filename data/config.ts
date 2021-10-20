import { useMutation, useQuery } from 'react-query'
import { reactQuery } from '.'

let isDarkMode: boolean
export function useDarkMode() {
  return useQuery<boolean>('darkMode', () => {
    if (!isDarkMode) {
      isDarkMode = localStorage.getItem('darkMode') === 'true'
      document.documentElement.setAttribute(
        'data-theme',
        isDarkMode ? 'dark' : 'light',
      )
    }
    return isDarkMode
  })
}

export function mutateDarkMode() {
  return useMutation(async () => {
    isDarkMode = !isDarkMode
    localStorage.setItem('darkMode', String(isDarkMode))
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light',
    )
    reactQuery.invalidateQueries(['darkMode'])
  })
}
