import Head from 'next/head'

// Components
import Navbar from '@/components/Navbar'
import NetworksNav from '@/components/NetworksNav'
import Footer from '@/components/Footer'

// Assets

export default function BaseLayoutWeb({ title, children }) {
  return (
    <main className="flex flex-col justify-center	items-center">
      <Head>
        <title>Joselpadronc | {title}</title>
      </Head>
      <Navbar />
      {children}
      <NetworksNav />
      <Footer />
    </main>
  )
}
