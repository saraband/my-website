import React from 'react'
import s from './LoadingIcon.module.scss'

export default (props) => (
  <div className={s.container} {...props}>
    {new Array(8).fill(1).map((e, i) => <div key={i} style={{animationDelay: i * 0.2 + 's'}}></div>)}
  </div>
)