import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import 'tailwindcss/tailwind.css'

import ProgressBar from '@/components/ProgressBar'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setProgress(true))
    router.events.on('routeChangeComplete', () => setProgress(false))
  }, [router])

  return (
    <>
      {progress && <ProgressBar />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
