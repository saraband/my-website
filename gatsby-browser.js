import { Provider } from 'react-redux'
import React from 'react'
import { Router } from 'react-router-dom'
import createStore from './src/store/index'

exports.replaceRouterComponent = ({ history }) => {

  const store = createStore()

  const ConnectedRouterWrapper = ({ children }) => (
      <Provider store={store}>
          <Router history={history}>{children}</Router>
      </Provider>
  )

  return ConnectedRouterWrapper
}