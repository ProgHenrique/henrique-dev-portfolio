import { FaCheck } from 'react-icons/fa'
import { PiXBold } from "react-icons/pi";
import { AccordionContainer, AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger, Card, CardContent, CardText, CheckboxContainer, CheckboxIndicator, DivFlex, Flex, Img, Label, ProjectCards, ProjectsColumn, Section, Titles } from "./styles";
import { useContext, useEffect, useState } from "react";
import TecIcon from "./components/icon";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Button from "@/components/button";
import Head from "next/head";
import { PortfolioContext } from "@/context/portfolio-context";

interface CheckTec {
  tec: string;
  isChecked: boolean;
  color: string;
}

interface Projects {
  name: string;
  description: string;
  image: string;
  repository: string;
  site: string;
  techs: string[]
}

export default function Projects() {
  const {gameOver} = useContext(PortfolioContext)
  // array of my projects
  const [projects] = useState<Projects[]>([
    {
      name: '_coffee-delivery',
      description: 'Coffee delivery o melhor lugar pra pedir o seu café',
      image: 'coffee.png',
      repository: 'https://github.com/ProgHenrique/coffee-delivery',
      techs: ['React'],
      site: 'https://coffee-delivery-proghenrique.vercel.app/',
    },

    {
      name: '_ignite-shop',
      description: 'Loja de venda de camisas com integração ao Stripe.',
      image: 'ignite-shop.png',
      repository: 'https://github.com/ProgHenrique/ignite-shop',
      techs: ['Next'],
      site: 'https://ignite-shop-proghenrique.vercel.app/',
    },

    {
      name: '_form-to-sossego',
      description: 'Formulário de criação de usuário e endereço',
      image: 'form.png',
      repository: 'https://github.com/ProgHenrique/FormToSossego',
      techs: ['React'],
      site: 'https://form-to-sossego.vercel.app/',
    },

    {
      name: '_portfolio-gilmara',
      description: 'Portfolio feito para uma jornalista e fotógrafa',
      image: 'portfolio.png',
      repository: 'https://github.com/ProgHenrique/portfolio-gilmara',
      techs: ['React'],
      site: 'https://portfolio-gilmara.vercel.app/',
    },

    {
      name: '_ignite-toDo',
      description: 'Ignite todo quer te ajudar a aproveitar melhor o seu tempo',
      image: 'todo.png',
      repository: 'https://github.com/ProgHenrique/ignite-toDo',
      techs: ['React'],
      site: 'https://ignite-todo-proghenrique.vercel.app/',
    },

    {
      name: '_book-wise',
      description: 'Book Wise é um lugar dedicado aos leitores e fans de livros',
      image:'book-wise.png',
      repository: 'https://github.com/ProgHenrique/BookWise',
      techs: ['Next'],
      site: '',
    },

    {
      name: '_delivery-api',
      description: 'Api que conecta entregadores aos pedidos de entrega',
      image: '',
      repository: 'https://github.com/ProgHenrique/DeliveryAPI',
      techs: ['Node'],
      site: '',
    },

    {
      name: '_feed-get',
      description: 'Unir o usuário ao desenvolvedor é com Feed-get',
      image: '',
      repository: 'https://github.com/ProgHenrique/FeedGet-nlw',
      techs: ['React', 'Node'],
      site: '',
    },

    {
      name: '_dt-transfer-money',
      description: 'A melhor forma de transferir e receber o seu dinheiro',
      image: '',
      repository: 'https://github.com/ProgHenrique/dt-transfer-money',
      techs: ['React', 'Node'],
      site: '',
    },

    {
      name: '_github-blog',
      description: 'Um blog pessoal que consome a api do Github',
      image: 'github-blog.png',
      repository: 'https://github.com/ProgHenrique/github-blog',
      techs: ['React', 'Node'],
      site: '',
    },
  ])

  // filter projects visible on screen
  const [projectsData, setProjectsData] = useState<Projects[]>([])

  // keep techs available to filter projects
  const [techs, setTechs] = useState<CheckTec[]>([
    {
    tec: "React",
    isChecked: false,
    color: '#61dbfb',
    },
    {
      tec: "Node",
      isChecked: false,
      color: '#68a063',
    },
    {
      tec: "Next",
      isChecked: false,
      color: '#5e72e4',
    }
  ])
  
  // keep techs are checked 
  const [checks, setChecks] = useState<string[]>([])

  // reset project in screen to default state( all available no filter)
  function resetCheckBox () {
    const reset = techs.map( item => {
      item.isChecked = false
      return item
    })

    setTechs([...reset])
  }

  // filter projects to only checked techs
  useEffect(()=> {
    const techsChecked: string[] = []
    const projectsFilter:Projects[] = []
    techs.map(item => {
      if(item.isChecked) {
        techsChecked.push(item.tec)
        projects.map(project => {
          if(project.techs.includes(item.tec)){
            projectsFilter.push(project)
          }
        })
      }
    })

    setProjectsData(state => {
      if(projectsFilter.length < 1) {
        return [...projects]
      }

      return [... new Set(projectsFilter)]
    })
    setChecks([...techsChecked])
  },[projects, techs])

  return (
    <>
      <Head>
          <title>Projetos | Developer Henrique</title>
      </Head>
      <Section>
        <AccordionContainer>
          <AccordionRoot type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionHeader>
                <AccordionTrigger>
                  <i className="ri-arrow-right-s-fill"></i>
                  <p>projetos</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent style={{cursor: 'default'}}>
                {/* mapping techs available to check */}
                {techs.map((item, index) => {
                  const handleCheck = () => {
                    setTechs(state => {
                      state[index].isChecked = !state[index].isChecked

                      return [...state]
                    })
                  }
                  const isChecked = techs[index].isChecked
                  const IconColor = techs[index].isChecked ? techs[index].color : ''
                  const TextColor = techs[index].isChecked ? '$white': '$gray100'
                  return (
                    <Flex key={item.tec}>
                      <CheckboxContainer onCheckedChange={handleCheck} checked={isChecked}>
                        <CheckboxIndicator>
                          <FaCheck />
                        </CheckboxIndicator>
                      </CheckboxContainer>
                      <Label css={{color: TextColor }}>
                        <TecIcon tecTitle={item.tec} tecColor={IconColor} />
                        {item.tec}
                      </Label>
                    </Flex> 
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </AccordionContainer>

        <ProjectsColumn gameOver={gameOver}>
          {/* show techs marked as checked */}
          {checks.length > 0 && (
            <div className="title-container">
              <Titles>
                <p>{checks.join('; ')}</p>
                <PiXBold width={18} height={18} style={{color: '#FFFFFF', cursor: 'pointer'}} onClick={resetCheckBox}/>
              </Titles>
            </div>
          )}

          <ProjectCards>
            {/* show filtered on screen */}
            {projectsData.map((project, index) => {
              return (
                <Card key={index}>
                  <p><strong>Projeto {index + 1}</strong> {'//'} {project.name}</p>
                  <CardContent>
                    <Img 
                      src={`/images/${project.image}`}
                      alt=""
                    />

                    <CardText>
                      <p>{project.description}</p>
                      {project.site ? (
                        <AlertDialog.Root>
                          <AlertDialogTrigger asChild>
                            <Button color="gray">ver-projeto</Button>
                          </AlertDialogTrigger>
                          <AlertDialog.Portal>
                            <AlertDialogOverlay />
                            <AlertDialogContent>
                              <AlertDialogCancel>
                                <PiXBold />
                              </AlertDialogCancel>
                              <AlertDialogTitle>O que ver primeiro?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Escolha entre acessar o repositório desse projeto no Github ou acessar o site na Vercel
                              </AlertDialogDescription>

                              <DivFlex css={{ justifyContent: 'center', gap: '1.5rem'}}>
                                <AlertDialog.Action asChild>
                                  <Button isLink link={project.repository} color="gray">ver-repositório</Button>
                                </AlertDialog.Action>
                                <AlertDialog.Action asChild>
                                  <Button isLink link={project.site} color="gray">ver-site</Button>
                                </AlertDialog.Action>
                              </DivFlex>
                            </AlertDialogContent>
                          </AlertDialog.Portal>
                        </AlertDialog.Root>
                      ): (
                        <Button isLink  color="gray" link={project.repository}>ver-projeto</Button>
                      )}
                      
                      
                    </CardText>
                  </CardContent>
                </Card>
              )
            })
            }
          </ProjectCards>
          
          
        </ProjectsColumn>
      </Section>
    </>
  )
}