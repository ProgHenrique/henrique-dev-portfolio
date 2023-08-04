import { styled } from "@/styles/stitches.config";
import { keyframes } from "@stitches/react";
import Link from "next/link";

const rotation = keyframes({
  '0%' : {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'}
})

export const ButtonComponent = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.625rem 0.875rem',
  fontSize: '$sm',
  width: 'max-content',
  borderRadius: 8,
  cursor: 'pointer',

  variants: {
    color: {
      gray: {
        backgroundColor: '#1C2B3A',
        color: '$white',
      },
      orange: {
        backgroundColor: '$orange100',
        color: '$gray800',
      },
      uncolor: {
        backgroundColor: 'transparent',
        color: '$gray100',
        '&:hover': {
          color: '$white',
        }
      }
    }
  },

  '&:disabled': {
    position: 'relative',
    cursor: 'not-allowed',
    opacity: 0.7,
  },

  '&:disabled::after' : {
    position: 'absolute',
    right: -34,
    content: '',
    width: '1.5rem',
    height: '1.5rem',
    border: '5px solid $white',
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: `${rotation} 1s linear infinite`,
  },
})

export const ButtonComponentLink = styled(Link, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.625rem 0.875rem',
  fontSize: '$sm',
  width: 'max-content',
  borderRadius: 8,
  cursor: 'pointer',

  variants: {
    color: {
      gray: {
        backgroundColor: '#1C2B3A',
        color: '$white',
      },
      orange: {
        backgroundColor: '$orange100',
        color: '$gray800',
      },
      uncolor: {
        backgroundColor: 'transparent',
        color: '$gray100',

      }
    }
  },
})