import Image from 'next/image'


export default function ProjectCard({ cardImg, cardTitle, cardTecnologies, cardUrlCode, cardUrlProject }) {
  return(
    <article className="p-3 flex flex-col items-start justify-between bg-white rounded-lg shadow-lg w-64">
      <Image
        alt={cardTitle}
        className={!cardImg ? 'rounded-lg h-48 w-full animate-pulse': 'rounded-lg h-48 w-full'}
        width={300}
        height={250}
        objectFit="cover"
        objectPosition="center"
        blurDataURL='/img/sin_imagen.jpg'
        placeholder="blur"
        src={!cardImg ? '/img/sin_imagen.jpg': cardImg}/>
      <div className="mb-5 mt-2 w-full">
        <h4 className="text-xl font-semibold text-gray-700 mb-2 truncate">{!cardTitle ? 'Titulo': cardTitle}</h4>
        <p className="text-sm text-gray-800 truncate">
          {
            cardTecnologies
              ? cardTecnologies.map((technology, index) => (
                index === cardTecnologies.length - 1
                  ?`${technology.name}`
                  :`${technology.name}, `
              ))
              : 'No tiene'
          }
        </p>
      </div>
      <div className="flex items-center gap-2 justify-between w-full">
        <a
          href={!cardUrlCode ? '#' : cardUrlCode}
          className="py-1 px-4 bg-white w-28 text-center border-4 border-primary-blue rounded-lg font-semibold text-sm text-gray-700"
          target="_blank"
        >Codigo</a>
        <a
          href={!cardUrlProject ? '#' : cardUrlProject}
          className="py-2 px-4 bg-primary-blue w-28 text-center rounded-lg text-white font-semibold text-sm"
          target="_blank"
        >Ver</a>
      </div>
    </article>
  )
}