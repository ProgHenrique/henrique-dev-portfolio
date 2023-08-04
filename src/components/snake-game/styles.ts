import { styled } from "@/styles/stitches.config";


export const TableGame = styled('div', {
  position: 'relative',
  width: '15rem',
  height: '25rem',
  borderRadius: 10,
  backgroundColor: 'rgba(1, 22, 39, 0.84)',
  display: 'flex',
  flexWrap: 'wrap',
  boxShadow: 'inset 0 0 10px #00000071',
  
})

export const Food = styled('div', {
  display: 'flex',
  flexShrink: 0,
  position: 'absolute',
  width: 10,
  height: 10,
  background: '$green100',
  borderRadius: '9999px',
  boxShadow: '0 0 10px #43D9AD',
})

export const Snake = styled('span', {
  position: 'absolute',
  width: 10,
  height: 10,
  background: '$green100',

  variants: {
    directionHead: {
      up: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      },
      down: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      },
      left: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      right: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      }
    }
  }
})

export const GameState = styled('div', {
  flexDirection: 'column', 
  gap: '1.25rem', 
  width: '100%', 
  position: 'absolute',
  alignItems: 'center',
  bottom: 55, 
})

export const GameMessageFinished = styled('div', {
  width: '100%',
  textAlign: 'center',
  padding: '0.75rem 0',
  background: 'rgba(1, 22, 39, 0.84)',
  borderRadius: 8,
  boxShadow: '1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset',

  h2: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 450,
    lineHeight: 1,
    color: '$green100',
  }
})