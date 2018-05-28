const translations = {
  'en': {
    'test': 'yeaaah'
  },
  'fr': {},
  'es': {}
}

export default (lang) => (key) => {
  return translations[lang][key] === undefined ?
    `No translation available for lang=${lang}, key=${key}` :
    translations[lang][key]
}