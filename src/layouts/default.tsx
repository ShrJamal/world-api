import NavBar from '../components/NavBar'

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <>
      <NavBar />
      <main className="px-5 sm:px-10 lg:px-20">{children}</main>
    </>
  )
}
