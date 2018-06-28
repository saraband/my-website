import React from 'react'
import { connect } from 'react-redux'
import s from './BodyComponent.module.scss'
import GenresComponent from './GenresComponent'
import PlayPng from './play.png'
import ThumbnailJpg from './thumbnail.jpg'

const Loading = () => (
  <div className={s.loading}>
    <div className={s.ball} style={{animationDelay: '0.2s'}}></div>
    <div className={s.ball} style={{animationDelay: '0.4s'}}></div>
    <div className={s.ball} style={{animationDelay: '0.6s'}}></div>
  </div>
)

const RadioItem = () => (
  <div className={s.radioItem}>
    <div className={s.thumbnail} style={{backgroundImage: `url(${ThumbnailJpg})`}}></div>
    <div className={s.description}>
      <h3>The Boat That Rocked</h3>
      <h5>Radio England</h5>
    </div>
    <div className={s.playButton} style={{backgroundImage: `url(${PlayPng})`}}></div>
  </div>
)

class BodyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      isLoaded: false
    }
  }

  handleLoadGenre = () => {
    this.setState({isLoading: true})
    setTimeout(() => this.setState({isLoaded: true, isLoading: false}), 1000)
  }

  render() {
    const { 
      isLoading,
      isLoaded
    } = this.state

    return(
      <div id={s.container}>
        <div id={s.fullBody}>
          <GenresComponent onClick={this.handleLoadGenre} />
          <div id={s.body}>
            {isLoading && <Loading />}
            {!isLoading && isLoaded && (
              <div id={s.radios}>
                {new Array(20).fill(1).map(() => <RadioItem />)}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(BodyComponent);