import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledPlayer = styled.div`
  background-color: #3a3a3a;
  position: fixed;
  bottom: 10px;
  height: 50px;
  border-radius:2px;
  width: 1050px;
  color: white;
  margin: auto;
`

export default class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <StyledPlayer>
        Hello
      </StyledPlayer>
    )
  }
}