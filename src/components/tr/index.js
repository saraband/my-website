import presentation from './presentation.tr'
import about from './about.tr'
import contact from './contact.tr'
import projects from './projects.tr'

export default {
  en: {
    ...presentation.en,
    ...about.en,
    ...contact.en,
    ...projects.en,
  },
  fr: {
    ...presentation.fr,
    ...about.fr,
    ...contact.fr,
    ...projects.fr,
  },
  es: {
    ...presentation.es,
    ...about.es,
    ...contact.es,
    ...projects.es,
  }
}