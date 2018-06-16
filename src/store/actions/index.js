import { sleep } from 'Utils/index'

export const SET_LANG = 'SET_LANG'

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