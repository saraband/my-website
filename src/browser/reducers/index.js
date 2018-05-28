import { combineReducers } from 'redux'
import {
  SET_LANG,
  NEXT_PROJECT,
  PREVIOUS_PROJECT
} from 'Actions/index'

const lang = (state = 'en', action) => {
  switch(action.type) {
    case SET_LANG:
      return action.lang
    default:
      return state
  }
}

const currentProject = (state = 0, action) => {
  switch(action.type) {
    case NEXT_PROJECT:
      return ++state
    case PREVIOUS_PROJECT:
      return --state
    default:
      return state
  }
}

export default combineReducers({
  lang,
  currentProject
})