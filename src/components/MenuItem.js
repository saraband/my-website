import React from 'react'
import s from './MenuItem.module.scss'

export default ({children, selected, onClick}) => (
  <div className={s.container} onClick={onClick}>
    <a className={selected ? s.linkSelected : null}>{children}</a>
    <div className={selected ? s.borderSelected: s.border}></div>
  </div>
)