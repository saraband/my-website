import React from 'react'
import { connect } from 'react-redux'
import './index.scss'
import PresentationComponent from './../components/PresentationComponent'
import ProjectComponent from './../components/ProjectComponent'

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