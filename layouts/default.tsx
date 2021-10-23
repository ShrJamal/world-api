import React from 'react'
import NavBar from '../components/NavBar'
import { useDarkMode } from '../data/config'

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  const { data: isDarkMode } = useDarkMode()

  return (
    <>
      <NavBar isDarkMode={isDarkMode || true} />
      <main className="px-5 sm:px-10 lg:px-20">{children}</main>
    </>
  )
}
