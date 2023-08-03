import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface Trail {
  x: number;
  y: number;
}

interface PortfolioContextType {
  setGameStart: Dispatch<SetStateAction<boolean>>
  gameStart: boolean
  setGameOver: Dispatch<SetStateAction<boolean>>
  gameOver: boolean
  setWinner: Dispatch<SetStateAction<boolean>>
  winner: boolean
  setDirection: Dispatch<SetStateAction<"up" | "down" | "left" | "right" | undefined>>
  direction: "up" | "down" | "left" | "right" | undefined
  setScore: Dispatch<SetStateAction<number>>
  score: number
  setPositionFood: Dispatch<SetStateAction<Trail>>
  positionFood: Trail
  setSpeedDirection: Dispatch<SetStateAction<Trail>>
  speedDirection: Trail
  setInitial: Dispatch<SetStateAction<Trail>>
  setTail: Dispatch<SetStateAction<number>>
  setSnake: Dispatch<SetStateAction<Trail[]>>
  snake: Trail[]
}
export const PortfolioContext = createContext({} as PortfolioContextType)

interface PortfolioProviderProps {
  children: ReactNode
}
export function PortfolioProvider({children}: PortfolioProviderProps) {
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(false)
  const [direction, setDirection] = useState<'up'|'down'|'left'| 'right' | undefined>('up');
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
  const [score, setScore] = useState(0)
  const [positionFood, setPositionFood] = useState({x:10, y: 8})
  const [speedDirection, setSpeedDirection] = useState({x: 0, y: -1})
  const [initial, setInitial] = useState({x:10, y: 12})
  const [tail, setTail] = useState(18)
  const [snake, setSnake] = useState<Trail[]>(initialSnake);
  const amountSquaresOnStage = {x:24, y:40}
  const speed = 1

  useEffect(() => {
    if(gameStart) {
      document.addEventListener('keydown', handleKeyPress);
      const gameLoop = setInterval(game, 60);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
        clearInterval(gameLoop);
      };
    }
    
  }, [snake, gameStart]);

  // when direction change callback function that change direction of the snake
  useEffect(()=> {
    if(direction) {
      moveSnake(direction)
    }
  },[direction])

  function game () {
    initial.x += speedDirection.x
    initial.y += speedDirection.y
    // check whether snake is out of table-game
    if (initial.x < 0) {
      initial.x = amountSquaresOnStage.x-1;
    }
    if (initial.x > amountSquaresOnStage.x-1) {
      initial.x = 0;
    }
    if (initial.y < 0) {
      initial.y = amountSquaresOnStage.y-1;
    }
    if (initial.y > amountSquaresOnStage.y-1) {
      initial.y = 0;
    }

    // check whether the snake's head collided with its body
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x == initial.x && snake[i].y == initial.y){
        setGameStart(false)
        setGameOver(true)
        return 
      }
    }

    setSnake([{x:initial.x, y:initial.y}, ...snake.splice(0, tail)])
    
    // check whether the snake's head is in the same position of the food
    if (positionFood.x==initial.x && positionFood.y==initial.y){
      // increment +1 on score and snake's body
      setScore(state => state + 1)
      setTail((state)=> state + 1)

      // check if player won the game
      if(score + 1 === 10) {
        setGameStart(false)
        setWinner(true)

        return
      }
      // give a new random position to food
      setPositionFood({
        x: Math.floor(Math.random()* amountSquaresOnStage.x),
        y: Math.floor(Math.random()*amountSquaresOnStage.y)
      })
    }
  }

  // change snake direction
  function moveSnake (snakeDirection: "up" | "down" | "left" | "right") {
    switch (snakeDirection) {
      case 'left':
        setSpeedDirection({x: -speed, y: 0})
        break;
      case 'up': 
        setSpeedDirection({x: 0, y: -speed})
        break;
      case 'right':
          setSpeedDirection({x: speed, y: 0})
        break;
      case 'down':
        setSpeedDirection({x: 0, y: speed})
        break;          
      default:
        break;
    }
  }

  //change useState direction when press arrow keys
  function handleKeyPress (event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        if(direction !== 'right'){
          setDirection('left')
        }
        break;
      case 'ArrowUp': 
        if(direction !== 'down') {
          setDirection('up')
        }
        
        break;
      case 'ArrowRight':
        if(direction !== 'left') {
          setDirection('right')
        }
        
        break;
      case 'ArrowDown':
        if(direction !== 'up') {
          setDirection('down')
        }
        
        break;          
      default:
        break;
    }
  }


  return (
    <PortfolioContext.Provider
      value={{
        gameStart,
        gameOver,
        winner,
        setDirection,
        direction,
        positionFood,
        score,
        snake,
        setGameStart,
        setGameOver,
        setWinner,
        speedDirection,
        setInitial,
        setPositionFood,
        setScore,
        setSnake,
        setSpeedDirection,
        setTail,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}