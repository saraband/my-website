import React from 'react'
import { connect } from 'react-redux'
import './index.scss'
import '../../node_modules/aos/dist/aos.css'

import PresentationComponent from 'Components/PresentationComponent'
import ProjectComponent from 'Components/ProjectComponent'
import AboutComponent from 'Components/AboutComponent'
import ContactComponent from 'Components/ContactComponent'

import {
  setLang
} from 'Actions/index'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.AOS = require('aos')
    this.AOS.init({once: true})
    window.addEventListener('load', this.AOS.refresh)
  }

  componentDidUpdate() {
    this.AOS.refresh()
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