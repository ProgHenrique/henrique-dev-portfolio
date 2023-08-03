import { ReactNode, useContext} from "react"
import { Container, MenuBar, Footer, FooterBar, Screen, Main, Header, LinkPage, Li, ContactPage } from "./styles"
import 'remixicon/fonts/remixicon.css'
import { useRouter } from "next/router"
import { PortfolioContext } from "@/context/portfolio-context"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  const {gameOver} = useContext(PortfolioContext)
  const router = useRouter()
  const pathname = router.pathname
  
  return (
    <Screen>
        <Container gameOver={gameOver}>
            <Header>
                <nav>
                    <MenuBar>
                        <Li>_henrique-ramos</Li>
                        <Li selected={pathname === '/'}>
                            <LinkPage href={'/'}>_hello</LinkPage>
                        </Li>
                        <Li selected={pathname === '/about-me'}>
                            <LinkPage href={'about-me'}>_sobre-mim</LinkPage>
                        </Li>
                        <Li selected={pathname === '/projects'}>
                            <LinkPage href={'projects'} prefetch>_projetos</LinkPage>
                        </Li> 
                    </MenuBar>
                </nav>
                    <ContactPage selected={pathname === '/contact'}>
                        <LinkPage href={'contact'} prefetch> _contato</LinkPage>
                    </ContactPage>
                
            </Header>

            <Main>{children}</Main>

            <Footer>
                <FooterBar>
                    <li>find me in:</li>
                    <li><i className="ri-twitter-fill" style={{fontSize: '1.5rem'}}></i></li>
                    <li><i className="ri-linkedin-fill" style={{fontSize: '1.5rem'}}></i></li>
                    
                </FooterBar>
                <a href="https://github.com/ProgHenrique" target="_blank">
                    <span> @ProgHenrique < i className="ri-github-fill"></i></span>
                </a>
            </Footer>
        </Container>
    </Screen>
  )
}