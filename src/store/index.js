import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware
} from 'redux'

export default () => createStore(
  rootReducer,
  applyMiddleware(thunk))