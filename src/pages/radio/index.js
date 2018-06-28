import React from 'react'
import { connect } from 'react-redux'
import s from './index.module.scss'
import BannerComponent from 'AppsComponents/radio-app/BannerComponent'
import BodyComponent from 'AppsComponents/radio-app/BodyComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <BannerComponent />
        <BodyComponent />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(App);