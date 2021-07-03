import Head from 'next/head'

// Components
import Navbar from '../components/Navbar'
import NetworksNav from '../components/NetworksNav'

// Assets

export default function BaseLayoutWeb({ title, children }) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <NetworksNav />
    </div>
  )
}
