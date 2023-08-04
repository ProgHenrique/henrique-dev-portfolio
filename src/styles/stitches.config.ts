import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      default: "'Fira Code', monospace",
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '2rem',
      '2xl': '3.875rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      green100: '#43D9AD',
      green300: '#3C9D93',
      purple100: '#4D5BCE',
      blue100: '#5565E8',
      orange100: '#FEA55F',
      red100: '#E99287',
      violet100: '#C98BDF',

      gray100: '#607B96',
      gray200: '#1E2D3D',
      gray400: '#011627',
      gray600: '#011221',
      gray800: '#01080E',

      text: '#E5E9F0',
      inputText: '#465E77',
    },
  },

  media: {
    max1920: '(max-width: 1919px)',
  }
})