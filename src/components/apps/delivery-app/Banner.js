import React from 'react'
import s from './Banner.module.scss'
import leavesPattern from './leaves-pattern.png'
import LogoSvg from './logo.svg'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container} style={{backgroundImage: `url(${leavesPattern})`}}>
        <div id={s.loginBar}>
          <a>Login</a>
          <a>Sign up</a>
        </div>
        <LogoSvg id={s.logoSvg} />
      </div>
    )
  }
}