import React from 'react'
import s from './MenuItem.module.scss'

export default ({children, selected}) => (
  <div className={s.container}>
    <a href='#' className={selected ? s.linkSelected : null}>{children}</a>
    <div className={selected ? s.borderSelected: s.border}></div>
  </div>
)