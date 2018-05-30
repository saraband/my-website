import React from 'react'
import { connect } from 'react-redux'
import './index.scss'
import PresentationComponent from './../components/PresentationComponent'
import ProjectComponent from './../components/ProjectComponent'
import {
  setLang
} from './../store/actions/index'

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
        <PresentationComponent />
        <ProjectComponent />
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