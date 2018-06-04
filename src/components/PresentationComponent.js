import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './PresentationComponent.module.scss'
import ArrowRed from './arrow-red.svg'
import ArrowWhite from './arrow-white.svg'

class PresentationComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { tr } = this.props

    return(
      <div id={s.container}>
        <div id={s.connect}>
          <div id={s.title}>
            <h1>{tr('presentation-title')}</h1>
            <h2>{tr('presentation-subtitle')}</h2>
          </div>
          <div id={s.projects}>
            <button>
              See my projects
              <div id={s.arrowBox}>
                <ArrowRed className={s.arrow} id={s.redArrow} />
              </div>
            </button>
          </div>
        </div>
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