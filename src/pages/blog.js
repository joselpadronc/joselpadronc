import fetch from 'isomorphic-fetch'

// Layouts
import BaseLayoutWeb from '@/layouts/BaseLayoutWeb'

// Components
import PostCard from '@/components/PostCard'

const BASE_URL = 'https://myapi-joselpadronc.herokuapp.com/posts?_sort=published_at:DESC'

export async function getServerSideProps() {

  const response = await fetch(BASE_URL)
  const data = await response.json()

  return {
    props: {
      postsList: data
    }
  }

}

export default function Blog({ postsList }) {
  return (
    <BaseLayoutWeb title="Blog">
      <section className="bg-light-white pt-24 mb-12 h-section">
        <div className="containar mx-auto flex flex-col items-center mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Mis Articulos</h2>
          <div className="px-4 w-full flex flex-wrap items-center justify-center gap-10 mt-10">
            {
              postsList.map((post) => (
                <PostCard
                  key={post.id}
                  cardTitle={post.name}
                  cardDescription={post.description}
                  cardUrlPost={post.link}
                />
              ))
            }
          </div>
        </div>
      </section>
    </BaseLayoutWeb>
  )
}
