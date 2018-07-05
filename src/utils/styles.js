import styled, { keyframes } from 'styled-components'

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const FadeRightKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  } to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`