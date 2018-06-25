import presentationEN from './presentation.tr.en'
import presentationFR from './presentation.tr.fr'
import presentationES from './presentation.tr.es'
import aboutEN from './about.tr.en'
import aboutFR from './about.tr.fr'
import aboutES from './about.tr.es'

export default {
  en: {
    ...presentationEN,
    ...aboutEN,
  },
  fr: {
    ...presentationFR,
    ...aboutFR,
  },
  es: {
    ...presentationES,
    ...aboutES,
  }
}