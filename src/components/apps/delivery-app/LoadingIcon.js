import React from 'react'
import s from './LoadingIcon.module.scss'

export default (props) => (
  <div className={s.container} {...props}>
    <div className={s.topBar}></div>
    <div className={s.middleBar}></div>
    <div className={s.bottomBar}></div>
  </div>
)