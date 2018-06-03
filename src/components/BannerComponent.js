import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './BannerComponent.module.scss'
import Logo from './logo.svg'
import MenuItem from './MenuItem'

class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <div id={s.navMenu}>
          <Logo id={s.logo} />
          <MenuItem>Work</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </div>
        <div id={s.langMenu}>
          <MenuItem selected={true} >FR</MenuItem>
          <MenuItem>EN</MenuItem>
          <MenuItem>ES</MenuItem>
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