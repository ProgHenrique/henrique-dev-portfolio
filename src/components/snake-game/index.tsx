import { useContext, useState } from "react";
import { Food, GameMessageFinished, GameState, Snake, TableGame } from "./styles"
import Button from "../button";
import { PortfolioContext } from "@/context/portfolio-context";
import Image from "next/image";
import { useWindowSize } from "@/hooks/use-window-size";

export default function SnakeGame (){
  const {
    setGameStart, gameStart,
    setGameOver, gameOver,
    setWinner, winner,
    setDirection, direction,
    setInitial,
    setPositionFood, positionFood,
    setScore,
    setSnake, snake,
    setSpeedDirection,
    setTail
  } = useContext(PortfolioContext)
  const initialSnake = [
    { x: 10, y: 12 },
    { x: 10, y: 13 },
    { x: 10, y: 14 },
    { x: 10, y: 15 },
    { x: 10, y: 16 },
    { x: 10, y: 17 },
    { x: 10, y: 18 },
    { x: 11, y: 18 },
    { x: 12, y: 18 },
    { x: 13, y: 18 },
    { x: 14, y: 18 },
    { x: 15, y: 18 },
    { x: 15, y: 19 },
    { x: 15, y: 20 },
    { x: 15, y: 21 },
    { x: 15, y: 22 },
    { x: 15, y: 23 },
    { x: 15, y: 24 },
  ]
  const [prize, setPrize] = useState(false)

  const isWindow1920 = useWindowSize() >= 1920
  
  return (
    <TableGame >

      {/* render fod */}
      {!prize && (
        <Food css={{left: positionFood.x * 10, top: positionFood.y * 10}}/>
      )}
     

      {/* render snake */}
      {!prize && snake.map((item, index) => {
        return (
          <Snake key={index} directionHead={index === 0 ? direction : undefined} 
            css={{left: item.x * 10, top: item.y * 10, opacity: 1 - (index / snake.length)}}
          />
        )
      })}

      {!prize && (
        // render buttons to start game
        <GameState css={{display: gameStart ? 'none': 'flex',}}>
          {gameOver || winner ? (
            <GameMessageFinished>
              <h2>{winner ? 'WELL DONE!': 'GAME OVER!'}</h2>
            </GameMessageFinished>
          ): ''}

          {winner ? (
            <Button color="orange" onClick={()=> setPrize(true)}>
              REDEEM PRIZE
            </Button>
          ): <Button  onClick={()=> {
            setInitial({x:10, y: 12})
            setDirection('up')
            setPositionFood({x:10, y: 8})
            setSnake(initialSnake)
            setTail(18)
            setSpeedDirection({x:0, y: -1})
            setGameOver(false)
            setWinner(false)
            setScore(0)
            setGameStart(true)
          }} color={ gameOver ? 'uncolor': 'orange'}>{gameOver ? 'start-again': 'start-game'}</Button>}
        </GameState>
      )}

      {prize && (
        <div 
          style={
            {width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '2rem'}}
          >
          <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image 
              src='/patinho.gif' 
              width={isWindow1920? 150 : 100} 
              height={isWindow1920 ? 200 : 150} alt=""
            />
            <strong style={{color: '#FFFFFF'}}>HAVE A NICE DAY!!!</strong>
          </div>
          <Button  onClick={()=> {
            setPrize(false);
            setInitial({x:10, y: 12})
            setDirection('up')
            setPositionFood({x:10, y: 8})
            setSnake(initialSnake)
            setTail(18)
            setSpeedDirection({x:0, y: -1})
            setGameOver(false)
            setWinner(false)
            setScore(0)
            setGameStart(true)
          }} color='orange'>start-game</Button>
        </div>
      )}
    </TableGame>
  )
}