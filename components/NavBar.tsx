import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { mutateDarkMode } from '../data/config'

export default function NavBar({ isDarkMode }: { isDarkMode: boolean }) {
  const { mutate: toggleDarMode } = mutateDarkMode()

  return (
    <nav className="navbar mb-2 px-5 sm:px-10 lg:px-20 shadow-lg flex justify-between">
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
