
// Layouts
import BaseLayoutWeb from '../layouts/BaseLayoutWeb'

// Components
import ProjectCard from '../components/ProjectCard'

export default function Portafolio() {
  return (
    <BaseLayoutWeb title="Joselpadronc | Portafolio">
      <section className="bg-light-white pt-24 pb-16">
        <div className="contienar px-16 mx-auto flex flex-col items-center mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Mis Proyectos</h2>
          <div className="grid grid-cols-3 gap-10 mt-10">
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
            <ProjectCard
              cardImg='https://via.placeholder.com/600/771796'
              cardTitle="Clipboard landing page"
              cardTecnologies="HTML, CSS, JavaScript, Web Components"
              cardUrlCode="https://github.com/joselpadronc/clipboardWithWebComponents"
              cardUrlProject="https://clipboard-page.joselpadronc.vercel.app/"
            />
            <ProjectCard
              cardImg='https://via.placeholder.com/600/771796'
              cardTitle="Contacts API"
              cardTecnologies="Node.js, MySql, Express"
              cardUrlCode="https://github.com/joselpadronc/contactAPI"
              cardUrlProject="https://github.com/joselpadronc/contactAPI/blob/main/README.md"
            />
            <ProjectCard
              cardImg='https://via.placeholder.com/600/771796'
              cardTitle="Platzi Users"
              cardTecnologies="HTML, CSS, JavaScript"
              cardUrlCode="https://github.com/joselpadronc/platziUsers"
              cardUrlProject="https://joselpadronc.github.io/platziUsers/src/index.html"
            />
            <ProjectCard
              cardImg='https://via.placeholder.com/600/771796'
              cardTitle="API Books"
              cardTecnologies="Python, Flask, SQLite"
              cardUrlCode="https://github.com/joselpadronc/api-books"
              cardUrlProject="https://github.com/joselpadronc/api-books/blob/master/README.md"
            />
            <ProjectCard
              cardImg='https://via.placeholder.com/600/771796'
              cardTitle="Platzi Video"
              cardTecnologies="HTML, CSS"
              cardUrlCode="https://github.com/joselpadronc/platzi-video"
              cardUrlProject="https://joselpadronc.github.io/platzi-video/index/index.html"
            />
          </div>
        </div>
      </section>
    </BaseLayoutWeb>
  )
}
