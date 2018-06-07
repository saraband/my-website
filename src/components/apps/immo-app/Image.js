import React from 'react'
import loading from './loading.png'
import s from './Image.module.scss'

export default class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  render() {
    const { isLoading } = this.state;
    const {
      alt,
      src
    } = this.props

    return (
      <div id={s.container}>
        <img
          src={loading}
          style={{visibility: (isLoading ? 'visible' : 'hidden')}}
          />
        <img
          src={src}
          alt={alt} 
          style={{visibility: (!isLoading ? 'visible' : 'hidden')}}
          onLoad={() => this.setState({isLoading: false})}
        />
      </div>
    )
  }
}