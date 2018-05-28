export const SET_LANG = 'SET_LANG'
export const NEXT_PROJECT = 'NEXT_PROJECT'
export const PREVIOUS_PROJECT = 'PREVIOUS_PROJECT'

export const nextProject = () => ({
  type: NEXT_PROJECT
})

export const previousProject = () => ({
  type: PREVIOUS_PROJECT
})

export const setLang = (lang) => ({
  type: SET_LANG,
  lang
})