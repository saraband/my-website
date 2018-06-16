import React from 'react'
import s from './PropertyItemPlaceHolder.module.scss'

export default () => (
  <div className={s.container}>
    <div className={s.placeholder} style={{width: '400px', height: '250px'}}></div>
    <div className={s.description}>
      <div className={s.placeholder} style={{width: '80%', height: '15px'}}></div>
      <div className={s.placeholder} style={{width: '60%', height: '15px'}}></div>
      <div className={s.placeholder} style={{width: '70%', height: '15px'}}></div>
    </div>
  </div>
)