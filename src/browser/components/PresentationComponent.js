import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import './PresentationComponent.scss'

const PresentationComponent = ({tr}) => (
  <div id='presentation-container'>Presentation...</div>
)

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang)
  }
}

export default connect(mapStateToProps)(PresentationComponent)