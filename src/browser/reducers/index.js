import { combineReducers } from 'redux'
import projectsData from 'Components/ProjectsData'
import {
  SET_LANG,
  SET_PROJECT,
  SET_PROJECT_FADE,
  ProjectFadeTypes
} from 'Actions/index'

const lang = (state = 'en', action) => {
  switch(action.type) {
    case SET_LANG:
      return action.lang
    default:
      return state
  }
}

const currentProject = (state = projectsData[0], action) => {
  switch(action.type) {
    case SET_PROJECT:
      return action.project
    default:
      return state
  }
}

const currentProjectFade = (state = ProjectFadeTypes.FADE_IN, action) => {
  switch(action.type) {
    case SET_PROJECT_FADE:
      return action.fadeType
    default:
      return state
  }
}

export default combineReducers({
  lang,
  currentProject,
  currentProjectFade
})