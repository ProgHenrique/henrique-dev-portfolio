import Layout from "@/components/layout"
import { PortfolioProvider } from "@/context/portfolio-context"
import { globalStyles } from "@/styles/global"
import type { AppProps } from 'next/app'
import { Fira_Code } from "next/font/google"

const firaCode = Fira_Code({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={firaCode.className}>
      <PortfolioProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PortfolioProvider>
    </div>
  ) 
}
