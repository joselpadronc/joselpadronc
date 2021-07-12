import Head from 'next/head'

// Components
import Navbar from '../components/Navbar'
import NetworksNav from '../components/NetworksNav'
import Footer from '../components/Footer'

// Assets

export default function BaseLayoutWeb({ title, children }) {
  return (
    <div className="flex flex-col items-center transition duration-500 ease-in-out">
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href="/img/meFavicon.png" />
      </Head>
      <Navbar />
      {children}
      <NetworksNav />
      <Footer />
    </div>
  )
}
