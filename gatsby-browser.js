import { Provider } from 'react-redux'
import React from 'react'
import { Router } from 'react-router-dom'
import createStore from './src/store/index'

exports.replaceRouterComponent = ({ history }) => {

  const lang = window.location.pathname.slice(1)
  const store = createStore()

  if(lang.length > 0
  && (lang === 'es'
  || lang === 'fr'))
    store.dispatch({
      type: 'SET_LANG',
      lang
    })

  const ConnectedRouterWrapper = ({ children }) => (
      <Provider store={store}>
          <Router history={history}>{children}</Router>
      </Provider>
  )

  return ConnectedRouterWrapper
}