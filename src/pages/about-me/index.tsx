import { useState } from "react";
import { AccordionContainer, AccordionContent, AccordionContentText, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger, ColumnContent, ColumnContentTitle, ContentText, Section } from "./styles";
import FormattingText from "@/utils/formatting-content";
import Head from "next/head";

interface OpenTabs {
  name: string;
  isSelected: boolean;
}

interface AccordionContentText {
  name: string;
  content: string;
}
export default function AboutMe () {
  const [openTabs, setOpenTabs] = useState<OpenTabs[]>([])
  const [ accordionContentTexts] = useState<AccordionContentText[]>([
    {
      name: 'biografia',
      content: `
        /**
         * Sobre mim
         * ser programador sempre foi meu sonho, mesmo quando nem
         * sabia o que era isso. Sempre fui muito curioso em saber
         * o "por que?" das coisas e de onde elas vem.
         * Bem, ali por volta dos meus 10 anos descobri um joguinho
         * "Pokémon" assim que começa o "PROF. OAK" pergunta seu nome
         * aparecerem 3 espaços vazios aonde você escreve e logo apos
         * ele te chama pelo seu nome, isso me deixou encantado,
         * que bruxaria era aquela? como isso é possível?
         * então foi ali que descobri que também queria ser um bruxo.
         * Alguns anos se passaram e hoje eu já sei o que é um input 
         * e algumas coisinhas a mais. 
         * Me chamo Henrique Ramos FullStack Developer, 22 anos
         * e como a criança em mim disse uma vez:
         * "Eu quero construir o futuro". 
         * Vamos construir juntos?
         */
      `
    },
    {
      name: 'hobbies',
      content: `
        /**
         * Do que eu gosto?
         * meu melhor passa tempo hoje é programar
         * adoro fazer web scraping, joguinhos ou sites
         * da umas boas risadas, ficar orgulhoso de mim mesmo
         * e então descarta-los pelo puro prazer de programar e
         * aprender um pouquinho mais.
         * assim como fazia quando criança, ainda gosto de jogos
         * de computador, como CS:GO ou LOL, passar um tempo com
         * os amigos 
         * café para o programador já é considerado um hobbie né?
         * e gosto de caminhar sentindo o sol, o vento e os cheiros.
        */
      `
    },
    {
      name: 'educação',
      content: `
        /**
         * Com o ensino funtamental e medio completo 
         * optei por seguir a minha carreira na programação
         * então fiz todo o meu fundamento HTML, CSS 
         * e JavaScript estudando junto ao "Programador BR"
         * que possui um curso e um canal voltado a programação
         * com mais de 235 mil inscritos.
         * e então decidi me especializar nas tecnologias de
         * NodeJs voltado ao backend e ReactJs com foco 
         * em frontend, mais recentemente adicionei aos meus
         * estudos o NextJs um framework React.
         * Tudo relacionado a essas tecnologias fui muito bem
         * ensinado e instruído pelos profissionais
         * da "Rocketseat".
         * Sigo estudando focado nessas tecnologias,
         * hoje com maior conhecimento e mais maduro
         * estou preparado para buscar a minha primeira vaga
         * nessa área de atuação.
        */
      `
    },
    {
      name: 'experiências',
      content: `
        /**
         * Estudando desde de 2021 ainda não possuo uma
         * experiência profissional, porém durante a minha
         * curta jornada ja acúmulo diversas experiências pessoais
         * como projetos próprios que podem ser visto
         * na aba "_projetos" desde mesmo site ou na minha página
         * do Github, dos quais destaco:
         * Coffee-Delivery
         * Ignite-shop
         * Book-Wise
         * Api-rentx
         * Além disso possuo experiências interpessoais adquiridas
         * através de eventos de comunidade como os da "Rocketseat"
        */
      `
    }
  ])

  // open a new tab
  function handleOpenTab(event: React.MouseEvent<HTMLDivElement>){
    const eventTarget = event.target as Element

    if(eventTarget.localName === 'div') {
      return null
    }
    const textContent = eventTarget.parentNode?.children[1].textContent!
    const tabOpenIndex = openTabs.findIndex(tab => tab.name === textContent)

    if(tabOpenIndex !== -1) {
      openTabs.forEach(tab => {
        tab.isSelected = false
      });
      openTabs[tabOpenIndex].isSelected = true
      setOpenTabs([...openTabs])
      return null
    }

    openTabs.forEach(tab => {
      tab.isSelected = false
    });
    setOpenTabs([...openTabs, {name: textContent, isSelected: true}])
  }

  function handleCloseTab(event: React.MouseEvent<HTMLDivElement>){
    const tabToRemove = event.currentTarget.parentNode?.children[0].textContent!
    const openTabsFilter = openTabs.filter(tab => tab.name !== tabToRemove)
    const isTabSelectedLive = openTabsFilter.some(tab => tab.isSelected === true)

    if(isTabSelectedLive) {
      setOpenTabs(openTabsFilter)

      return null
    }

    const indexTab = openTabs.findIndex(tab => tab.name === tabToRemove)

    if(indexTab === 0 && openTabsFilter.length === 0) {
      setOpenTabs(openTabsFilter)

      return null
    }

    if(indexTab === 0 && openTabsFilter.length > 0) {
      openTabsFilter[0].isSelected = true
      setOpenTabs(openTabsFilter)

      return null
    }

    openTabsFilter[indexTab - 1].isSelected = true

    setOpenTabs(openTabsFilter)
  }

  function switchSelected (event: React.MouseEvent<HTMLDivElement>) {
    const eventTarget = event.target as Element
    if(eventTarget.localName === 'i') {
      return null
    }
    const textContent = event.currentTarget.children[0].textContent!

    setOpenTabs(state => {
      const newState = state.map((stateTab) => {
        if(stateTab.isSelected === true) stateTab.isSelected = false;
        if(stateTab.name === textContent) stateTab.isSelected = true;
        return stateTab;
      })
      return [...newState]
    })
  }

  return (
    <>
      <Head>
        <title>Sobre-mim | Developer Henrique</title>
      </Head>
      <Section>
      <AccordionContainer>
        <AccordionRoot type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionHeader>
              <AccordionTrigger color={"red"}>
                <i className="ri-arrow-right-s-line"></i>
                <div><i className="ri-folder-fill"></i> <span><i className="ri-folder-open-fill"></i></span> <p>pessoal-info</p></div>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent onClick={handleOpenTab}>
              <AccordionContentText><i className="ri-file-text-line"></i> <p>biografia</p></AccordionContentText>
              <AccordionContentText><i className="ri-file-text-line"></i> <p>hobbies</p></AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader>
              <AccordionTrigger color={"green"}>
                <i className="ri-arrow-right-s-line"></i>
                <div><i className="ri-folder-fill"></i> <span><i className="ri-folder-open-fill"></i></span>  <p>profissional-info</p></div>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent onClick={handleOpenTab}>
            <AccordionContentText><i className="ri-file-text-line"></i> <p>educação</p></AccordionContentText>
              <AccordionContentText><i className="ri-file-text-line"></i> <p>experiências</p></AccordionContentText>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionHeader>
              <AccordionTrigger color={"blue"}>
                <i className="ri-arrow-right-s-line"></i>
                <div><i className="ri-folder-fill"></i> <span><i className="ri-folder-open-fill"></i></span> <p>contatos</p></div>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent style={{cursor: 'default'}}>
              <AccordionContentText><i className="ri-mail-fill"></i> <p>devhenrique.ramos@gmail.com</p></AccordionContentText>
              <AccordionContentText><i className="ri-phone-fill"></i> <p>+5594991250380</p></AccordionContentText>      
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </AccordionContainer>
      <ColumnContent>
        {
          openTabs.length > 0 && (
            <>
              <div>
                {openTabs.map((tab)=> {
                  return (
                    <ColumnContentTitle key={tab.name} selected={tab.isSelected} onClick={switchSelected}>
                      <p>{tab.name}</p>
                      <i onClick={handleCloseTab} className="ri-close-fill"></i>
                    </ColumnContentTitle>
                  )
                })}
              </div>

              <ContentText>
                <div>
                  { 
                  FormattingText(accordionContentTexts[accordionContentTexts.findIndex(index => index.name === openTabs.find(tab => tab.isSelected === true)?.name)].content).map((line, index)=> {
                    if (index === 0) {
                      return null
                    }
                    return (
                      <p key={index}>
                        {index < 10 ? (<span>&nbsp;{index}</span>)
                          : <span>{index}</span>
                        }
                        {line}
                      </p>
                    )
                  })
                    
                  }
                </div>        
              </ContentText>
            </>
          )
        }
        
      </ColumnContent>
    </Section>
    </>
  )
}