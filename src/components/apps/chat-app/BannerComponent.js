import React from 'react'
import s from './BannerComponent.module.scss'
import Logo from './logo.svg'

export default class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <Logo id={s.logo} />
        <p>2 Unread messages</p>
      </div>
    )
  }
}