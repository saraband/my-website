import React from 'react'
import { connect } from 'react-redux'
import ListComponent from './ListComponent'
import InputComponent from './InputComponent'
import reactIcon from './reactIcon.png'
import ShowPropertyComponent from './ShowPropertyComponent'
import Logo from './logo.svg'
import style from './App.module.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isPropertyPanelOpen } = this.props
    return(
      <div id={style.appContainer}>
        {isPropertyPanelOpen ? <ShowPropertyComponent /> : null}
        <div id={style.banner}>
          <Logo id={style.logo} />
        </div>
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