import React from 'react'
import s from './Carousel.module.scss'
import ArrowRight from './arrow-right.svg'
import ArrowLeft from './arrow-left.svg'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlide: 0
    }

    this.slides = props.children
  }

  nextSlide = () => {
    const ns = this.slides.length

    this.setState(prevState => {
      const cs = prevState.currentSlide

      return {currentSlide: cs + 1 >= ns ? 0 : cs + 1}
    })
  }

  previousSlide = () => {
    const ns = this.slides.length

    this.setState(prevState => {
      const cs = prevState.currentSlide

      return {currentSlide: cs - 1 < 0 ? ns - 1 : cs - 1}
    })
  }

  renderBalls = () => {
    const cs = this.state.currentSlide
    let balls = []

    for(let i = 0; i < this.slides.length; ++i) {
      balls.push(<div key={i} className={`${s.ball} ${cs === i ? s.currentBall : null}`}></div>)
    }

    return balls
  }

  render() {
    const { slides } = this
    const { currentSlide } = this.state

    return(
      <div id={s.container}>
        <div id={s.controls}>
          <div className={s.arrow} onClick={this.previousSlide} ><ArrowLeft className={s.arrowSvg} /></div>
          <div className={s.arrow} onClick={this.nextSlide} ><ArrowRight className={s.arrowSvg} /></div>
        </div>
        <div id={s.slidesInfo}>
          <div id={s.balls}>
            {this.renderBalls()}
          </div>
        </div>
        <div id={s.slides}
          style={{
            width: (100 * slides.length) + '%',
            marginLeft: currentSlide * (-100) + '%'
          }} >
          {slides.map((c, i) => <div className={s.slide} key={i} >{c}</div>)}
        </div>
      </div>
    )
  }
}