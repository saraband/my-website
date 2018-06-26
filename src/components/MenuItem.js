import React from 'react'
import s from './MenuItem.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default ({children, selected, onClick, href}) => (
  <div className={s.container} onClick={onClick}>
   {href ?
      <AnchorLink href={href}>{children}</AnchorLink> :
      <a className={selected ? s.linkSelected : null}>{children}</a>}
    <div className={selected ? s.borderSelected: s.border}></div>
  </div>
)