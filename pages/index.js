import Link from 'next/link'

// Components and Layouts
import BaseLayoutWeb from '../layouts/BaseLayoutWeb'
import PrimaryBtn from '../components/PrimaryBtn'
import ProjectCard from '../components/ProjectCard'


export default function Home() {
  return (
    <BaseLayoutWeb title="Joselpadronc | Web">
      {/* Hero */}
      <main className="w-full pt-10 pb-16 md:pt-5 bg-secondary">
        <div className="container mx-auto mt-10 flex flex-col items-center justify-center md:mt-20">
          <figure className="rounded-full flex flex-col items-center justify-center mb-10 border-4 border-primary transition duration-500 ease-in-out hover:border-green-500">
            <img src="/img/me.jpg" alt="Me Picture" width={200} height={200} className="rounded-full"/>
          </figure>
          <h1 className="text-2xl font-semibold text-white">!Hola¡ Soy José Padron</h1>
          <h4 className="text-lg text-center mt-5 max-w-2xl text-white">Desarrollador Frontend constantemente aprendiendo y conociendo nuevas tecnologías</h4>
          <PrimaryBtn textBtn="Descargar CV" routeBtn="/CV.pdf" targetBtn="_blank" />
        </div>
      </main>
      {/* Habilidades */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-light-white to-light-gray w-full">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Habilidades y Aptitudes</h2>
          <div className="flex flex-col items-center md:items-start justify-center gap-10 md:flex-row px-4 md:px-0">
            <article className="py-4 px-6 bg-white shadow-md overflow-x-auto rounded-lg carrousel">
              <div className="w-full flex flex-row gap-4">
                <img src="/img/icons8-html-5-100.png" alt="..."/>
                <img src="/img/icons8-css3-100.png" alt="..."/>
                <img src="/img/icons8-javascript-100.png" alt="..."/>
                <img src="/img/icons8-bootstrap-100.png" alt="..."/>
                <img src="/img/icons8-sass-100.png" alt="..."/>
                <img src="/img/icons8-react-native-100.png" alt="..."/>
              </div>
              <div className="w-full flex flex-row gap-4">
                <img src="/img/icons8-python-100.png" alt="..."/>
                <img src="/img/icons8-django-100.png" alt="..."/>
                <img src="/img/icons8-flask-100.png" alt="..."/>
                <img src="/img/icons8-laravel-100.png" alt="..."/>
                <img src="/img/icons8-mysql-logo-100.png" alt="..."/>
                <img src="/img/icons8-git-100.png" alt="..."/>
              </div>
            </article>
            <article className="w-full md:w-80 p-6 bg-white shadow-md rounded-lg">
              <ul className="flex flex-col gap-2">
                <li>Autodidacta</li>
                <li>Creativo</li>
                <li>Responsable</li>
                <li>Curiosidad</li>
                <li>Abierto a cambios</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      {/* Proyectos */}
      <section className="bg-light-gray to-bg-light-gray w-full pb-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Ultimos Proyectos</h2>
        <div className="container mx-auto pt-5 pb-10 flex flex-col items-center justify-center md:flex-row gap-8">
          <ProjectCard
            cardImg='https://via.placeholder.com/600/771796'
            cardTitle="Trippy App"
            cardTecnologies="Flutter"
            cardUrlCode="https://github.com/joselpadronc/trippy_app"
            cardUrlProject="https://github.com/joselpadronc/trippy_app/blob/main/README.md"
          />
          <ProjectCard
            cardImg='https://via.placeholder.com/600/771796'
            cardTitle="Mi sitio web"
            cardTecnologies="JavaScript, Next.js, Tailwind css"
            cardUrlCode="https://github.com/joselpadronc/joselpadronc"
            cardUrlProject="https://joselpadronc.vercel.app/"
          />
          <ProjectCard
            cardImg='https://via.placeholder.com/600/771796'
            cardTitle="Corn Flix"
            cardTecnologies="HTML, CSS, JavaScript, React.js"
            cardUrlCode="https://github.com/joselpadronc/corn-flix"
            cardUrlProject="https://cornflix-joselpadronc.vercel.app/"
          />
        </div>
        <PrimaryBtn textBtn="Ver Todos" routeBtn="/portafolio" targetBtn="" />
      </section>
    </BaseLayoutWeb>
  )
}
