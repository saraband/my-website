import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'

const PresentationComponent = ({tr}) => (
  <p>Presentation...</p>
)

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang)
  }
}

export default connect(mapStateToProps)(PresentationComponent)