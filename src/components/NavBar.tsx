import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from '~/hooks/useTheme'

export default function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav className="navbar mb-2 px-5 sm:px-10 lg:px-20 shadow-lg flex justify-between">
      <h1 className="text-xl font-medium">Where in the world?</h1>
      <button className="btn" onClick={() => toggleTheme()}>
        <span className="mr-2">
          {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        </span>
        <span>{isDarkMode ? ' Dark Mode' : 'Light Mode'}</span>
      </button>
    </nav>
  )
}
