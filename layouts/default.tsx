import React from 'react'
import NavBar from '../components/NavBar'

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}
