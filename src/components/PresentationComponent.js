import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './PresentationComponent.module.scss'
import BannerComponent from 'Components/BannerComponent'
import Graph from './graph-3.svg'

const animateLetters = (string) => string.split('').map((char, i) => {
  return <span style={{display: 'inline-block', position: 'relative'}} key={i} data-aos='fade-down-bubbly' data-aos-duration={300} data-aos-delay={i*50}>{char}</span>
})

const Test = () => <h1 data-aos='fade-up'>test</h1>

class PresentationComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { tr } = this.props

    return(
      <div id={s.container}>
        <BannerComponent />
        <div id={s.title}>
          <h1 data-aos='fade-left'>{tr('presentation-title')}</h1>
          <h2 data-aos='fade-right'>{tr('presentation-subtitle')}</h2>
        </div>
        {/*TEST BG ANIMATED {new Array(5).fill(1).map((e, i) => (
          <div className={s.bgAnimation}
            style={{
              animationDelay: i * 2 + 's',
              height: i * 20 + '%'
            }}></div>
        ))}*/}
        <Graph id={s.graph} data-aos='flip-up' data-aos-delay={300} />
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