import { sleep } from 'Utils/index'

export const SET_LANG = 'SET_LANG'
export const SET_PROJECT = 'SET_PROJECT'
export const SET_PROJECT_FADE = 'SET_PROJECT_FADE'

export const ProjectFadeTypes = {
  FADE_IN: 'fadeIn',
  FADE_OUT: 'fadeOut'
}

export const setProjectFade = (fadeType) => ({
  type: SET_PROJECT_FADE,
  fadeType
})

export const setProject = (project) => {
  return async (dispatch) => {
    dispatch(setProjectFade(ProjectFadeTypes.FADE_OUT))
    await sleep(500)
    dispatch({type: SET_PROJECT, project})
    dispatch(setProjectFade(ProjectFadeTypes.FADE_IN))
  }
}

export const setLang = (lang) => {
  return (dispatch) => {
    if(lang === 'fr'
    || lang === 'es')
      window.history.pushState('test', 'yoo', `/${lang}`)
    
    dispatch({
      type: SET_LANG,
      lang
    })
  }
}