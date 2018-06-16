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
          <h1 data-aos='fade-left'>{tr('presentation-title')}</h1>
          <h2 data-aos='fade-right'>{tr('presentation-subtitle')}</h2>
        </div>
        <Graph id={s.graph} data-aos='fade-up' data-aos-delay={300} />
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