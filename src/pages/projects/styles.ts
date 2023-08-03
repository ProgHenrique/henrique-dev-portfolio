import { styled } from "@/styles/stitches.config";
import * as Accordion from "@radix-ui/react-accordion";
import * as Checkbox from '@radix-ui/react-checkbox'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { keyframes } from "@stitches/react";
import Link from "next/link";


export const Section = styled('section', {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
})

export const AccordionContainer = styled('div', {
  maxWidth: 323,
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
  height: 40,
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
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  gap: '1.125rem',

  '&[data-state="open"]': {
    animation: `${slideDown} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

})

export const Flex = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  lineHeight: '$short',
  marginBottom: '0.5rem',
  paddingLeft: '1.375rem',
  '&:first-child': {
    marginTop: '1.125rem',
  },

  '&:last-child': {
    marginBottom: '1.6875rem',
  },
});

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '1.25rem',
  height: '1.25rem',
  background: 'transparent',
  borderRadius: 4,
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '1px solid $gray100',

  '&[data-state="checked"]': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    border: '1px solid $gray100',
  },
})

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0%)' },
})

const slideOut = keyframes({
  from: { transform: 'translateY(0%)' },
  to: { transform: 'translateY(-100%)' },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '1rem',
  height: '1rem',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,

  i: {
    fontSize: '1.5rem',
    marginRight: 10,
  }
});


export const ProjectsColumn = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  'div.title-container': {
    position: 'absolute',
    background: '$gray400',
    display: 'flex',
    width: '100%',
    borderBottom: '1px solid $gray200',
  },

  variants: {
    gameOver: {
      true: {
        'div.title-container': {
          background: '$gray800',
        }
      }
    }
  }
});

export const Titles = styled('div', {
  display: 'flex',
  gap: '3rem',
  height: '100%',
  padding: '0.625rem 0.875rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRight: '1px solid $gray200',
})

export const ProjectCards = styled('div', {
  height: '100%',
  overflowY: 'auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '2.5rem',
  rowGap: '2.5rem',
  padding: '5rem 8.5rem 2.5rem 8.5rem',
})

export const Card = styled('div', {
  maxWidth: 370,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 15,

  p: {
    strong: {
      color: '$blue100'
    }
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid $gray200',
  boxShadow: `0 2px 10px #01080E`,
  borderRadius: 15,
  overflow: 'hidden',
})

export const Img = styled('img', {
  maxHeight: 145,
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

export const CardText = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '1.5rem',
  borderTop: '1px solid $gray200',
  backgroundColor: '$gray600',

  p: {
    fontSize: '$lg',
    lineHeight: '150%',
    fontWeight: 450,
    height: 54,
    overflow: 'hidden',
  }
})

export const AlertDialogTrigger = styled(AlertDialog.Trigger, {
  all: 'unset',
  borderRadius: 8,
  width: 'max-content',
  height: 'max-content',
})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});


export const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: 'rgba(0,0,0, 0.5)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: '$gray600',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
});

export const AlertDialogCancel = styled(AlertDialog.Cancel, {
  all: 'unset',
  position: 'absolute',
  right: 20,
  top: 12,
  cursor: 'pointer',


})

export const AlertDialogTitle = styled(AlertDialog.Title, {
  marginBottom: '1rem',
  color: '$gray100',
  fontSize: '$lg',
  fontWeight: 500,
});

export const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: '1.5rem',
  color: '$gray100',
  fontSize: '$md',
  lineHeight: 1.5,
});



export const DivFlex  = styled('div', { display: 'flex' });




