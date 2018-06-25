import React from 'react'
import s from './Form.module.scss'

export const Input = ({value, onChange, name, error, ...props}) => (
  <div className={s.container} data-aos='fade-right'>
    <input type='text' value={value} autoComplete='off' className={error ? s.error : null} onChange={onChange} name={name} {...props} />
    <div className={s.border}></div>
  </div>
)

export const Textarea = ({value, onChange, name, error, ...props}) => (
  <div className={s.container} data-aos='fade-right'>
    <textarea value={value} onChange={onChange} name={name} className={error ? s.error : null} {...props} />
    <div className={s.border}></div>
  </div>
)

export const Button = ({children, disabled, ...props}) => (
  <div className={s.container} {...props} data-aos='fade-left'>
    <button disabled={disabled} >{children}</button>
    <div className={s.border}></div>
  </div>
)