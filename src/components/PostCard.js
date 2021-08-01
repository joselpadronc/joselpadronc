export default function ProjectCard({ cardTitle, cardDescription, cardUrlPost }) {
  return(
    <article className="p-3 flex flex-col items-start justify-between bg-white rounded-lg shadow-lg w-72 md:w-96">
      <h4 className="text-xl font-semibold text-gray-700 mb-4 w-full truncate">{!cardTitle ? '#' : cardTitle}</h4>
      <p className="text-sm text-gray-800 mb-4">{!cardDescription ? '#' : cardDescription}...</p>
      <a
        href={!cardUrlPost ? '#' : cardUrlPost}
        className="py-2 px-4 bg-primary w-full text-center rounded-lg text-white font-semibold text-sm"
        target="_blank"
      >Leer más</a>
    </article>
  )
}