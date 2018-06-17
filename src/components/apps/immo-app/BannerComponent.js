import React from 'react'
import s from './BannerComponent.module.scss'
import Logo from './logo-new.svg'

export default () => (
  <div id={s.container}>
    <Logo id={s.logo} />
    <div id={s.login}>
      <form onSubmit={e => e.preventDefault()}>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Login</button>
      </form>
      <p>Not registered ? <a>Sign in</a>.</p>
    </div>
  </div>
)