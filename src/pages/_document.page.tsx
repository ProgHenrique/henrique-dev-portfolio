import { getCssText } from '@/styles/stitches.config'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}  
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}