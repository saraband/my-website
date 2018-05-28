import React from 'react'
import ReactDOM from 'react-dom'
import App from 'Components/App'
import rootReducer from 'Reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware
} from 'redux'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const renderApp = (App) => {
  ReactDOM.render(
    <Provider store={store} >
      <App date={Date.now()} />
    </Provider>,
    document.getElementById('root')
  )
}

renderApp(App)

if(module.hot) {
  module.hot.accept('Components/App', () => {
    renderApp(require('Components/App'))
  })
}