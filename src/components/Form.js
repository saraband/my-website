import React from 'react'
import s from './Form.module.scss'

export const Input = ({value, onChange, name, ...props}) => (
  <div className={s.container}>
    <input type='text' value={value} onChange={onChange} name={name} {...props} />
    <div className={s.border}></div>
  </div>
)

export const Textarea = ({value, onChange, name, ...props}) => (
  <div className={s.container}>
    <textarea value={value} onChange={onChange} name={name} {...props} />
    <div className={s.border}></div>
  </div>
)

export const Button = ({children, ...props}) => (
  <div className={s.container} {...props} >
    <button>{children}</button>
    <div className={s.border}></div>
  </div>
)