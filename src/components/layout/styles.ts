import { styled } from "@/styles/stitches.config";
import Link from "next/link";


export const Screen = styled('div', {
  width: '100vw',
  height: '100vh',
  padding: '4rem',
})

export const Container = styled('div', {
  display: 'grid',
  gridTemplateRows: '3.625rem 1fr 3.625rem',
  backgroundColor: '$gray400',
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  border: '1px solid $gray200',

  variants: {
    gameOver: {
      true: {
        backgroundColor: 'transparent',
        border: 'none',
      }
    }
  }
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid $gray200',
})

export const ContactPage = styled('span', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderLeft: '1px solid $gray200',
  variants: {
    selected: {
      true: {
        '&::after': {
          content: '',
          position: 'absolute',
          left:0,
          bottom: 0,
          width: '100%',
          height: 3,
          background: '$orange100',
        },
      }
    }
  },
})

export const MenuBar = styled('ul', {
  display: 'flex',
  listStyle: 'none',
})

export const Li = styled('li', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRight: '1px solid $gray200',
  '&:first-child': {
    padding: '1.125rem 9.625rem 1.125rem 1.5rem',
    cursor: 'default',
  },
  variants: {
    selected: {
      true: {
        '&::after': {
          content: '',
          position: 'absolute',
          left:0,
          bottom: 0,
          width: '100%',
          height: 3,
          background: '$orange100',
        },
      }
    }
  },
})

export const LinkPage = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  padding: '1.125rem 2rem',
})

export const Main = styled('main', {
  overflow: 'hidden',
})

export const Footer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: '1px solid $gray200',

  a: {
    all: 'unset',
    cursor: 'pointer',
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '450',
    cursor: 'pointer',
    padding: '0.9375rem 1.5rem',
    borderLeft: '1px solid $gray200',

    i: {
      marginLeft: '5px',
      fontSize: '1.5rem',
    },
  },
})

export const FooterBar = styled('ul', {
  maxHeight: '3.625rem',
  height: '100%',
  display: 'flex',
  listStyle: 'none',
  'li:first-child': {
    padding: '1.125rem 1.5rem',
    cursor: 'default',
  },

  li: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    cursor: 'pointer',
    borderRight: '1px solid $gray200',
    padding: '0 0.875rem',

    i: {
      color: '$gray200',
    },

    '&:hover': {
      i: {
        color: '$gray100',
        transition: 'color 0.2s ease-out',
      },
    }
  }
})