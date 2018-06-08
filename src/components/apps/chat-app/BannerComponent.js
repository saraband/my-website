import React from 'react'
import s from './BannerComponent.module.scss'

export default class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <h1>Chit chat</h1>
        <p>2 Unread messages</p>
      </div>
    )
  }
}