import React from 'react'
import { connect } from 'react-redux'

class ProjectAppComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentProject } = this.props

    return <p>ProjectAppComponent {currentProject} </p>
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    currentProject: state.currentProject
  }
}

export default connect(mapStateToProps)(ProjectAppComponent)