import React from 'react'
import { connect } from 'react-redux'

class ProjectDescriptionComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <p>ProjectDescriptionComponent</p>
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  }
}

export default connect(mapStateToProps)(ProjectDescriptionComponent)