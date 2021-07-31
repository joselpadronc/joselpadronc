import Head from 'next/head'

// Components
import Navbar from '@/components/Navbar'
import NetworksNav from '@/components/NetworksNav'
import Footer from '@/components/Footer'

// Assets

export default function BaseLayoutWeb({ title, children }) {
  return (
    <main>
      <Head>
        <title>Joselpadronc | {title}</title>
      </Head>
      <Navbar />
      <div className="h-full flex flex-col justify-center	items-center transition duration-500 ease-in-out">
        {children}
      </div>
      <NetworksNav />
      <Footer />
    </main>
  )
}
