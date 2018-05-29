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

const lang = window.location.pathname.slice(1)

if(lang.length > 0
&& (lang === 'es'
|| lang === 'fr'))
  store.dispatch({
    type: 'SET_LANG',
    lang
  })

const renderApp = (App) => {
  ReactDOM.render(
    <Provider store={store} >
      <App />
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