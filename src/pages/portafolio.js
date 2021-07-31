import fetch from 'isomorphic-fetch'
import {projectsUrl} from '@/config'

// Layouts
import BaseLayoutWeb from '@/layouts/BaseLayoutWeb'

// Components
import ProjectCard from '@/components/ProjectCard'

export async function getServerSideProps() {

  const response = await fetch(projectsUrl)
  const data = await response.json()

  return {
    props: {
      projectsList: data
    }
  }

}

export default function Portafolio({ projectsList }) {
  return (
    <BaseLayoutWeb title="Portafolio">
      <section className="bg-light-white pt-24 pb-16">
        <div className="containar mx-auto flex flex-col items-center mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Mis Proyectos</h2>
          <div className="flex flex-col items-center justify-center md:grid grid-cols-12 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              projectsList.map((project) => (
                <ProjectCard
                  key={project.id}
                  cardImg={project.image.url}
                  cardTitle={project.name}
                  cardTecnologies={project.technologies}
                  cardUrlCode={project.link_code}
                  cardUrlProject={project.link}
                />
              ))
            }
          </div>
        </div>
      </section>
    </BaseLayoutWeb>
  )
}
