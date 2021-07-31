import Link from 'next/link'
import { useState } from 'react'

// ASSETS
import MenuIcon from '@material-ui/icons/Menu'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-secondary shadow-lg w-full h-14 z-40">
      <nav className="container my-auto mx-auto px-5 py-3 flex items-center justify-between md:py-0">
        <Link href="/">
          <h1 className="text-xl text-white font-semibold">Joselpadonc</h1>
        </Link>
        <menu className="hidden md:flex md:flex-row md:items-center md:justify-center md:relative md:w-auto md:top-0 md:left-0 md:right-0 md:mx-0 md:p-0">
          <Link href="/">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Inicio</a>
          </Link>
          <Link href="/portafolio">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Portafolio</a>
          </Link>
          <Link href="/blog">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Contacto</a>
          </Link>
        </menu>
        <button className="text-white md:hidden" onClick={handleMenu}>
          <MenuIcon />
        </button>
      </nav>
      {
        showMenu
        ? <menu className="fixed shadow-lg w-11/12 mx-auto top-12 left-0 right-0 rounded-xl w-full bg-secondary h-auto py-5 px-2 flex flex-col items-center justify-center">
          <Link href="/">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Inicio</a>
          </Link>
          <Link href="/portafolio">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Portafolio</a>
          </Link>
          <Link href="/blog">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="text-white capitalize font-medium mt-2 md:ml-4 md:mt-0">Contacto</a>
          </Link>
        </menu>

        : ""
      }
    </header>
  )
}
