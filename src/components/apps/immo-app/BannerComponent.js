import React from 'react'
import s from './BannerComponent.module.scss'
import Logo from './logo-new.svg'

export default () => (
  <div id={s.container}>
    <Logo id={s.logo} />
  </div>
)