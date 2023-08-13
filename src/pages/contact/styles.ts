import { styled } from "@/styles/stitches.config";
import * as Accordion from "@radix-ui/react-accordion";
import { keyframes } from "@stitches/react";

export const Section = styled('section', {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
})

export const AccordionContainer = styled('div', {
  maxWidth: '20.196428571rem',
  width: '100%',
  height: '100%',
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
  height: '2.5rem',
  width: '100%',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  lineHeight: 1,
  borderTop: '1px solid $gray200',
  borderBottom: '1px solid $gray200',

  '&:first-child': {
    borderTop: 'none',
  },
  paddingLeft: '1.375rem',
  color: '$white',
  
  
  '& > i': {
    transition: 'transform 200ms cubic-bezier(0.87, 0, 0.13, 1)',
    '[data-state=open] &': { transform: 'rotate(90deg)' },  
  },
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
  backgroundColor: 'transparent',

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
  '&:first-child': {
    marginTop: '1.125rem',
  },

  '&:last-child': {
    marginBottom: '1.6875rem',
  },

  p: {
    paddingLeft: 4,
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  i: {
    marginLeft: '1.375rem',
  }
})

export const ColumnContent = styled('div', {
  display: 'grid',
  placeItems: 'center',
  maxWidth: '39.375rem',
  width: '100%',
  height: '100%',
  borderRight: '1px solid $gray200',
})

export const Form = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  maxWidth: '23.25rem',
  width: '100%',
})

export const Label = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  fontWeight: '28.125rem',
})

export const Input = styled('input', {
  all: 'unset',
  borderRadius: 8,
  border: '1px solid $gray200',
  background: '$gray600',
  padding: '0.625rem 0.9375rem',

  '&:focus':{
    border: '1px solid $gray100',
    boxShadow: '0px 0px 0px 2px #607b9669',
  }

})

export const TextArea = styled('textarea', {
  background: '$gray600',
  border: '1px solid $gray200',
  borderRadius: 8,
  resize: 'none',
  height: '9.375rem',
  padding: '0.625rem 0.9375rem',
  outline: 'none',

  '&:focus':{
    border: '1px solid $gray100',
    boxShadow: '0px 0px 0px 2px #607b9669',
  }
})

export const FormAnnotation = styled('span', {
  color: '#f75a68',
  fontSize: '$xs',
})

export const SuccessMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '23.875rem',
  width: '100%',

  h2: {
    fontSize: '1.625rem',
    color: '$white',
    textAlign: 'center',
    fontWeight: 450,
    marginBottom: 10,
  },

  p: {
    fontSize: '1.125rem',
    textAlign: 'center',
    fontWeight: 450,
    marginBottom: "2.25rem",
  },
})

export const CodeView = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '52.25rem',
  width: '100%',
  height: '100%',
  fontSize: '$lg',
  fontWeight: 450,
  lineHeight: '150%',
  paddingLeft: '4rem',
  paddingRight: '1.5rem',
  paddingTop: '7.1875rem',

  '@max1920': {
    paddingLeft: '2rem',
    paddingTop: '4rem',
  },

  p: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& > span:first-child': {
      marginRight: '2.5rem',
    },
  },
})

