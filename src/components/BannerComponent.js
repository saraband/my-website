import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './BannerComponent.module.scss'
import Logo from './logo.svg'
import MenuItem from './MenuItem'
import { setLang } from 'Actions/index'

class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      lang,
      setLang,
      tr
    } = this.props

    return(
      <div id={s.container}>
        <div id={s.navMenu} data-aos='fade-in'>
          <Logo id={s.logo}/>
          <MenuItem href='#works'>{tr('presentation-work-link')}</MenuItem>
          <MenuItem href='#about'>{tr('presentation-about-link')}</MenuItem>
          <MenuItem href='#contact'>{tr('presentation-contact-link')}</MenuItem>
        </div>
        <div id={s.langMenu} data-aos='fade-in'>
          <MenuItem selected={lang === 'en'}
            onClick={() => setLang('en')} >EN</MenuItem>
          <MenuItem selected={lang === 'fr'}
            onClick={() => setLang('fr')} >FR</MenuItem>
          <MenuItem selected={lang === 'es'}
            onClick={() => setLang('es')} >ES</MenuItem>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang),
    lang: state.lang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (lang) => dispatch(setLang(lang))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (BannerComponent)