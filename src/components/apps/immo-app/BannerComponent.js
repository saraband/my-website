import React from 'react'
import styled from 'styled-components'
import s from './BannerComponent.module.scss'
import Logo from './logo-new.svg'

export default () => (
  <div id={s.container}>
    <div id={s.left}>
      <Logo id={s.logo} />
      <a className={s.selected} >Buy & Rent</a>
      <a>Invest</a>
      <a>About us</a>
    </div>
    <div id={s.login}>
      <p>Not registered ? <a>Sign up</a>.</p>
      <form onSubmit={e => e.preventDefault()}>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  </div>
)