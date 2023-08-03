import { styled } from "@/styles/stitches.config"
import Link from "next/link"

export const Section = styled('section', {
  display: 'flex',
  height: '100%',
  paddingLeft: '20.1875rem',
  alignItems: 'center',
})

export const Hero = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 130,
})

export const HeroText = styled('div',{
  color: '$text',
  p: {
    fontSize: '$lg',
    fontStyle: 'normal',
    fontWeight: '450',
    lineHeight: 'normal',
  },

  h1: {
    fontSize: '$2xl',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },

  h2: {
    color: '$purple100',
    fontSize: '$xl',
    fontStyle: 'normal',
    fontWeight: '450',
    lineHeight: 'normal',
  }
})

export const HeroTextFooter = styled('div', {
  marginTop: '5rem',

  p: {
    marginBottom: '10px',
    color: '$gray100',
    fontStyle: 'normal',
    fontWeight: '450',
    lineHeight: 'normal',
  },

  'p:last-child': {
    marginBottom: 0,
    color: '$white',
    fontWeight: '500',
    lineHeight: 'normal',
    fontStyle: 'normal',

    'span:first-child': {
      color: '$purple100',
    },

    'span:nth-child(2)': {
      color: '$green100',
    },

    span: {
      color: '$orange100',
    },

    a: {
      color: '$orange100',
      textDecorationLine: 'underline',
    }
  }
})

export const HeroGame = styled('div', {
  width: 530,
  height: 475,
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(to bottom, rgba(35, 123, 109, 1), rgba(67, 217, 173, 0.13))',
  borderRadius: 10,
  padding: 30,
  position: 'relative',
})

export const ConsoleMenu = styled('div', {
  position: 'relative',
  height: 400,
})

export const Controller = styled('div', {
  padding: '0.875rem 0.75rem',
  borderRadius: 8,
  background: 'rgba(1, 20, 35, 0.19)',

  p: {
    fontSize: '$sm',
    color: '$white',
    fontWeight: 450,
  }
})

export const ArrowsBoard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  textAlign: 'center',
  gap: 5,
})

export const Arrow = styled('button', {
  all: 'unset',
  backgroundColor: '#010C15',
  borderRadius: 10,
  textAlign: 'center',
  lineHeight: 0,
  width: 50,
  height: 30,
  cursor: 'pointer',
  fontSize: 10,
  color: '$white',

  variants: {
    transform: {
      true: {
        transform: 'rotate(180deg)',
      }
    }
  },

  '&:hover': {
    boxShadow: '#43D9AD 0 0 10px',
  }
})

export const FoodScore = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  marginTop: '1.25rem',
  padding: '0 0.75rem',
  p: {
    fontSize: '$sm',
    fontWeight: 450,
    color: '$white',
  }
})

export const FoodScoreBoard = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,10px)',
  gap: 20,
  justifyItems: 'center',
  width: 'fit-content',
})

export const Food = styled('div', {
  background: '$green100',
  borderRadius: '9999px',
  boxShadow: '0 0 10px #43D9AD',
  width: 8,
  height: 8,
})

export const ButtonSkip = styled(Link, {
  all: 'unset',
  position: 'absolute',
  bottom: 0, right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.625rem 0.875rem',
  border: '1px solid $white',
  color: '$white',
  fontSize: '$sm',
  width: 'max-content',
  borderRadius: 8,
  cursor: 'pointer',
})


