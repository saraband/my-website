import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './PresentationComponent.module.scss'
import Graph from './graph-3.svg'

class PresentationComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { tr } = this.props

    return(
      <div id={s.container}>
        <div id={s.title}>
          <h1>{tr('presentation-title')}</h1>
          <h2>{tr('presentation-subtitle')}</h2>
        </div>
        <Graph id={s.graph} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang)
  }
}

export default connect(mapStateToProps)(PresentationComponent)