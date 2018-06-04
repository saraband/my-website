import React from 'react'
import { connect } from 'react-redux'
import ListComponent from 'AppsComponents/immo-app/ListComponent'
import InputComponent from 'AppsComponents/immo-app/InputComponent'
import ShowPropertyComponent from 'AppsComponents/immo-app/ShowPropertyComponent'
import BannerComponent from 'AppsComponents/immo-app/BannerComponent'
import s from './index.scss' 

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
        <InputComponent />
        <ListComponent />
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