import Link from 'next/link'
// import Image from 'next/image'

// Components and Layouts
import BaseLayoutWeb from '../layouts/BaseLayoutWeb'

// Assets
// import mePicture from '../public/img/me.jpg'

export default function Home() {
  return (
    <BaseLayoutWeb title="Joselpadronc | Web">
      <main className="w-full pt-10 pb-16 md:pt-5 bg-secondary">
        <div className="container mx-auto mt-10 flex flex-col items-center justify-center md:mt-20">
          <figure className="rounded-full flex flex-col items-center justify-center mb-10 border-4 border-primary transition duration-500 ease-in-out hover:border-green-500">
            <img src="/img/me.jpg" alt="Me Picture" width={200} height={200} className="rounded-full"/>
          </figure>
          <h1 className="text-2xl font-semibold text-white">!Hola¡ Soy José Padron</h1>
          <h4 className="text-lg text-center mt-5 max-w-2xl text-white">Desarrollador Frontend constantemente aprendiendo y conociendo nuevas tecnologías</h4>
          <Link href="#">
            <a className="mt-6 px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow-lg transition duration-200 ease-in-out focus:ring-4 focus:ring-green-400 focus:ring-opacity-30 hover:bg-opacity-95">Descargar CV</a>
          </Link>
        </div>
      </main>
      <section className="pt-20">
        hola
      </section>
    </BaseLayoutWeb>
  )
}
