import React from 'react'
import { connect } from 'react-redux'
import ListComponent from 'AppsComponents/immo-app/ListComponent'
import InputComponent from 'AppsComponents/immo-app/InputComponent'
import ShowPropertyComponent from 'AppsComponents/immo-app/ShowPropertyComponent'
import BannerComponent from 'AppsComponents/immo-app/BannerComponent'
import Footer from 'AppsComponents/immo-app/Footer'
import './index.scss'
import s from './index.module.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isPropertyPanelOpen } = this.props
    return(
      <div id={s.container}>
        {isPropertyPanelOpen ? <ShowPropertyComponent /> : null}
        <BannerComponent />
        <div id={s.body}>
          <div id={s.left}>
            <ListComponent />
          </div>
          <div id={s.right}>
            <InputComponent />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isPropertyPanelOpen: state.immoApp.isPropertyPanelOpen
  }
}

export default connect(mapStateToProps)(App);