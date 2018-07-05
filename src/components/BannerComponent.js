import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import styled from 'styled-components'

import LogoSvg from './logo.svg'
import MenuItem from './MenuItem'
import { setLang } from 'Actions/index'
import { FlexRow } from 'Utils/styles'

const StyledBanner = FlexRow.extend`
  justify-content: space-between;
  height: 200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: unset;
    align-items: center;
    margin-bottom: 70px;
  }
`

const NavMenu = FlexRow.extend`
  margin-left: 50px;
  align-items: center;
`

const LangMenu = FlexRow.extend`
  margin-right: 50px;
  align-items: center;
  justify-content: center;
`

const Logo = styled(({className}) => <LogoSvg className={className} />)`
  transition: all 0.1s linear;
  width: 70px;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`

class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(LogoSvg.defaultProps)
    const {
      lang,
      setLang,
      tr
    } = this.props

    return(
      <StyledBanner>
        <NavMenu data-aos='fade-in'>
          <Logo />
          <MenuItem href='#works'>{tr('presentation-work-link')}</MenuItem>
          <MenuItem href='#about'>{tr('presentation-about-link')}</MenuItem>
          <MenuItem href='#contact'>{tr('presentation-contact-link')}</MenuItem>
        </NavMenu>
        <LangMenu data-aos='fade-in'>
          <MenuItem selected={lang === 'en'}
            onClick={() => setLang('en')} >EN</MenuItem>
          <MenuItem selected={lang === 'fr'}
            onClick={() => setLang('fr')} >FR</MenuItem>
          <MenuItem selected={lang === 'es'}
            onClick={() => setLang('es')} >ES</MenuItem>
        </LangMenu>
      </StyledBanner>
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