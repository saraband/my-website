const translations = {
  'en': {
    'presentation-title': 'Front-end developper',
    'presentation-subtitle': 'I design, implement and connect user interfaces.'
  },
  'fr': {
    'presentation-title': 'Développeur front-end',
    'presentation-subtitle': 'Je conçois, implémente et connecte des interfaces utilisateur.'
  },
  'es': {
    'presentation-title': 'Front-end developper',
    'presentation-subtitle': 'I design, implement and connect user interfaces.'
  }
}

export default (lang) => (key) => {
  return translations[lang][key] === undefined ?
    `No translation available for lang=${lang}, key=${key}` :
    translations[lang][key]
}