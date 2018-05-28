import React from 'react'
import { connect } from 'react-redux'
import './App.scss'
import PresentationComponent from './PresentationComponent'
import ProjectComponent from './ProjectComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
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
  
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App)