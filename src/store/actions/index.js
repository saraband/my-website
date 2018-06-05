import { sleep } from 'Utils/index'

export const SET_LANG = 'SET_LANG'
export const SET_PROJECT = 'SET_PROJECT'
export const SET_PROJECT_FADE = 'SET_PROJECT_FADE'
export const SHOW_PROJECT = 'SHOW_PROJECT'
export const HIDE_PROJECT = 'HIDE_PROJECT'

export const ProjectFadeTypes = {
  FADE_IN: 'fadeIn',
  FADE_OUT: 'fadeOut'
}

export const setProjectFade = (fadeType) => ({
  type: SET_PROJECT_FADE,
  fadeType
})

export const setProject = (project) => {
  return /*async*/ (dispatch) => {
    dispatch(setProjectFade(ProjectFadeTypes.FADE_OUT))
    
    //await sleep(500)
    // await and gatsby dont marry well
    sleep(150)
    .then(() => {
      console.log('ok')
      dispatch({type: SET_PROJECT, project})
      dispatch(setProjectFade(ProjectFadeTypes.FADE_IN))
    })
  }
}

export const showProject = (id) => {
  return {
    type: SHOW_PROJECT,
    id
  }
}

export const hideProject = () => {
  return {
    type: HIDE_PROJECT
  }
}

export const setLang = (lang) => {
  return (dispatch) => {
    if(lang === 'en')
      window.history.pushState('', '', `/`)

    if(lang === 'fr'
    || lang === 'es') {
      if(window !== undefined) {
        window.history.pushState('', '', `/${lang}`)
      }
    }
    
    dispatch({
      type: SET_LANG,
      lang
    })
  }
}