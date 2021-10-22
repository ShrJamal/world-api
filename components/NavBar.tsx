import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { mutateDarkMode, useDarkMode } from '../data/config'
export default function NavBar() {
  const { data: isDarkMode } = useDarkMode()
  const { mutate: toggleDarMode } = mutateDarkMode()

  return (
    <nav className="navbar h-16 px-20 shadow-xl flex items-center justify-between">
      <h1 className="text-xl font-medium">Where in the world?</h1>
      <button
        className="flex items-center space-x-2"
        onClick={() => toggleDarMode()}
      >
        {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        <span>{isDarkMode ? ' Dark Mode' : 'Light Mode'}</span>
      </button>
    </nav>
  )
}