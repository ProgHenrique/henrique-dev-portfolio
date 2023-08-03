import Layout from "@/components/layout"
import { PortfolioProvider } from "@/context/portfolio-context"
import { globalStyles } from "@/styles/global"
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioProvider>
  ) 
}
