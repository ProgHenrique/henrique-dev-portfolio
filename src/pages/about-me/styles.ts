import { styled } from "@/styles/stitches.config";
import * as Accordion from "@radix-ui/react-accordion";
import { keyframes } from "@stitches/react";

export const Section = styled('section', {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
})

export const AccordionContainer = styled('div', {
  width: 323,
  height: '100%',
  paddingLeft: 8,
  paddingTop: '1.125rem',
  borderRight: '1px solid $gray200',
})

export const AccordionRoot = styled(Accordion.Root, {
  width: '100%',
});

export const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,
  cursor: 'pointer',

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },

})

export const AccordionHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
});

export const AccordionTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  height: 30,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  lineHeight: 1,
  
  
  '& > i': {
    transition: 'transform 200ms cubic-bezier(0.87, 0, 0.13, 1)',
    '[data-state=open] &': { transform: 'rotate(90deg)' },    
  },

  variants: {
    color: {
      red: {
        div: {
          i: {
            color: '$red100',
          }
        }
      },
      green: {
        div: {
          i: {
            color: '$green100',
          }
        }
      },

      blue: {
        div: {
          i: {
            color: '#3A49A4',
          }
        }
      },
    }
  },

  div: {
    display: 'flex',
    gap: 2,
    span: {
      position: 'absolute',
      visibility: 'hidden',
      opacity: 0
    }
  },
  '[data-state=open] &' : {
    div: {
      '& > i': {
        position: 'absolute',
        visibility: 'hidden',
        opacity: 0
      },

      span: {
        position: 'static',
        visibility: 'visible',
        opacity: 1
      }
    }
  }
  
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});



export const AccordionContent = styled(Accordion.Content, {
  overflow: 'hidden',
  backgroundColor: '$gray400',

  '& > div:last-child': {
    p: {
      marginBottom: '0.5rem',
    },

    i: {
      marginBottom: '0.5rem',
    }
  },

  '&[data-state="open"]': {
    animation: `${slideDown} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

})

export const AccordionContentText = styled('div', {
  display: 'flex',
  gap: 4,
  alignItems: 'center',
  lineHeight: '$short',
  marginBottom: '0.5rem',
  '&:last-child': {
    marginBottom: 0,
  },
  p: {
    paddingLeft: 4,
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  i: {
    marginLeft: '2rem',
  }
})

export const ColumnContent = styled('div', {
  maxWidth: 700,
  width: '100%',
  height: '100%',
  borderRight: '1px solid $gray200',

  '& > div:first-child': {
    display: 'flex',
    width: '100%',
    height: 40,
    borderBottom: '1px solid $gray200',
  }
})

export const ColumnContentTitle = styled('div', {
  position: 'relative',
  display: 'flex',
  maxWidth: 218,
  gap: '1rem',
  height: '100%',
  padding: '0.625rem 0.75rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRight: '1px solid $gray200',
  cursor: 'pointer',

  variants: {
    selected: {
      true: {
        '&::after': {
          content: '',
          position: 'absolute',
          left:0,
          bottom: -1,
          width: '100%',
          height: 1,
          background: '$gray400',
        },
      }
    }
  },
  
  p: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  i: {
    color: '$text',
    cursor: 'pointer',
    width: 18,
    height: 18,
    fontSize: '$lg',
  }
})

export const ContentText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '1.125rem 0 0 2.375rem',
  span: {
    marginRight: '2.5rem'
  },

  'p:last-child': {
    display: 'none',
  }
})
