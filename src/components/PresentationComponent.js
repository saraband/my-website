import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './PresentationComponent.module.scss'
import Graph from './graph.svg'
import {
  setLang
} from 'Actions/index'

class PresentationComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      tr,
      setLang,
      lang
    } = this.props

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
    tr: getTrFn(state.lang),
    lang: state.lang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (lang) => dispatch(setLang(lang))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PresentationComponent)