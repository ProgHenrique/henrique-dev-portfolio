import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    '@max1920': {
      fontSize: '0.875rem',
    },
  },

  body: {
    fontFamily: "'Fira Code', monospace",
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '$regular',
  },

  'input, select, textarea': {
    color: '$inputText',
  }
})