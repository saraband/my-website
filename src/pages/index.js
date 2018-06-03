import React from 'react'
import { connect } from 'react-redux'
import './index.scss'
import PresentationComponent from 'Components/PresentationComponent'
import ProjectComponent from 'Components/ProjectComponent'
import BannerComponent from 'Components/BannerComponent'
import AboutComponent from 'Components/AboutComponent'
import ContactComponent from 'Components/ContactComponent'
import {
  setLang
} from 'Actions/index'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {
      lang,
      setLang
    } = this.props

    if(lang !== undefined
    && (lang === 'fr' || lang === 'es'))
      setLang(lang)
  }

  render() {
    return (
      <div id='app-container'>
        <BannerComponent />
        <PresentationComponent />
        <AboutComponent />
        <ProjectComponent />
        <ContactComponent />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (lang) => dispatch({type: 'SET_LANG', lang})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App)