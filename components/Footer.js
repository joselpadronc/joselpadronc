import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-light-gray w-full px-5 pb-10 md:pb-0 rounded-t-2xl">
      <div className="container mx-auto py-10 px-5 flex flex-wrap items-center justify-between gap-10">
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold underline text-gray-800">Joselpadronc</h4>
          <div className="flex gap-5">
            <Link href="/portafolio">
              <a className="text-gray-900">Protafolio</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-900">Blog</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-900">Contacto</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href="mailto:padroncjosel@gmail.com" target="_blank" className="text-gray-900">padroncjosel@gmail.com</a>
          <a href="https://iconos8.es/" target="_blank" className="text-gray-900">Iconos by Icons8.es</a>
        </div>
      </div>
    </footer>
  )
}