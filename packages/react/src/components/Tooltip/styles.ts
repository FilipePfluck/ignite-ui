import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipProvider = styled(Tooltip.Provider)

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$2',

  "&[data-state='delayed-open']": {
    animation: `${slideDownAndFade} 400ms ease-out`,
    /* "&[data-side='top']": {
      animation: `${slideDownAndFade} 400ms ease-out`,
    },

    "&[data-side='right']": {
      animation: `${slideLeftAndFade} 400ms ease-out`,
    },

    "&[data-side='down']": {
      animation: `${slideUpAndFade} 400ms ease-out`,
    },

    "&[data-side='left']": {
      animation: `${slideRightAndFade} 400ms ease-out`,
    }, */
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
