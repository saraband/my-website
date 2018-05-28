import React from 'react'
import { connect } from 'react-redux'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>App</h1>
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