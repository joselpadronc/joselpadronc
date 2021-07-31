import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="title" content="Joselpadronc" />
          <meta name="description" content="Desarrollador Web constantemente aprendiendo y conociendo nuevas tecnologías." />

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://joselpadronc.vercel.app/"/>
          <meta property="og:title" content="Joselpadronc"/>
          <meta property="og:description" content="Desarrollador Web constantemente aprendiendo y conociendo nuevas tecnologías."/>
          {/* <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/> */}

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://joselpadronc.vercel.app/"/>
          <meta property="twitter:title" content="Joselpadronc"/>
          <meta property="twitter:description" content="Desarrollador Web constantemente aprendiendo y conociendo nuevas tecnologías."/>
          {/* <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/> */}

          <link rel="icon" type="image/png" href="/img/meFavicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument