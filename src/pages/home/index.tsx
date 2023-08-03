import Head from "next/head";
import { Arrow, ArrowsBoard, ButtonSkip, ConsoleMenu, Controller, Food, FoodScore, FoodScoreBoard, Hero, HeroGame, HeroText, HeroTextFooter, Section } from "./styles";
import { BiSolidLeftArrow, BiSolidUpArrow } from "react-icons/bi";
import SnakeGame from "@/components/snake-game";
import Image from "next/image";
import { useContext } from "react";
import { PortfolioContext } from "@/context/portfolio-context";

export default function Home(){
    const {setDirection, direction, score} = useContext(PortfolioContext)
    const arrayFood = Array.from(Array(10).keys())
  return (
    <>
        <Head>
            <title>Inicial | Developer Henrique</title>
        </Head>
        <Section>
            <Hero>
                <HeroText>
                    <p>Bem vindo. Eu sou</p>
                    <h1>Henrique Ramos</h1>
                    <h2>&gt; Full-stack developer</h2>
                    <HeroTextFooter>
                        <p>// complete o jogo para continuar</p>
                        <p>// veja isso no meu Github</p>
                        <p>
                            <span>const</span> <span>githubLink</span> = <span>“</span><a href="https://github.com/ProgHenrique" target="_blank">https://github.com/ProgHenrique</a><span>"</span>
                        </p>
                    </HeroTextFooter>
                </HeroText>
                <HeroGame>
                    <Image alt="" src='/screw.svg' width={24} height={24} style={{position: 'absolute', left: 8, top: 8, opacity: 0.7}}/>
                    <Image alt="" src='/screw.svg' width={24} height={24} style={{position: 'absolute', right: 8, top: 8, opacity: 0.7}}/>
                    <Image alt="" src='/screw.svg' width={24} height={24} style={{position: 'absolute', left: 8, bottom: 8, opacity: 0.7}}/>
                    <Image alt="" src='/screw.svg' width={24} height={24} style={{position: 'absolute', right: 8, bottom: 8, opacity: 0.7}}/>
                    
                    <SnakeGame />
                    
                    
                    <ConsoleMenu>
                        <Controller>
                            <p>
                            // use keyboard <br/>
                            // arrows to play
                            </p>

                            <ArrowsBoard>
                                <Arrow onClick={()=> {
                                    if(direction !== 'down')setDirection('up')
                                }}><BiSolidUpArrow /></Arrow>

                                <div style={{display: 'flex', gap: 5}}>
                                    <Arrow onClick={()=>{if(direction !== 'right')setDirection('left')}}><BiSolidLeftArrow /></Arrow>
                                    <Arrow transform={true} onClick={()=>{if(direction !== 'up')setDirection('down')} }><BiSolidUpArrow /></Arrow>
                                    <Arrow transform={true} onClick={()=>{if(direction !== 'left')setDirection('right')}}><BiSolidLeftArrow /></Arrow>  
                                </div>
                                
                            </ArrowsBoard>
                        </Controller>
                        <FoodScore>
                            <p>// food left</p>
                            <FoodScoreBoard>
                                {arrayFood.map((item, index) => {
                                    const setOpacity = index < score ? 1: 0.3
                                    return (
                                     <Food css={{opacity: setOpacity}} />
                                    )
                                })}
                            </FoodScoreBoard>
                        </FoodScore>
                        <ButtonSkip href={'about-me'}>skip</ButtonSkip>
                    </ConsoleMenu>
                </HeroGame>
            </Hero>
        </Section>
    </>
    
  )
}