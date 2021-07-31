const API_URL = 'https://myapi-joselpadronc.herokuapp.com/'
const lastProjectsUrl = `${API_URL}projects?_limit=3&_sort=published_at:DESC`
const projectsUrl = `${API_URL}projects?_sort=published_at:DESC`
const postsUrl = `${API_URL}posts?_sort=published_at:DESC`

export {
  API_URL,
  lastProjectsUrl,
  projectsUrl,
  postsUrl
}