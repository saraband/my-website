import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './AboutComponent.module.scss'
import Graph from './graph-white.svg'

class AboutComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <h1 data-aos='fade-up'>About<div className={s.border} data-aos='fade-up'></div></h1>
        <p>
          <Graph id={s.graph} />
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang)
  }
}

export default connect(mapStateToProps)(AboutComponent)