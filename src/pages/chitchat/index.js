import React from 'react'
import { connect } from 'react-redux'
import RoomsListComponent from 'AppsComponents/chat-app/RoomsListComponent'
import SearchRoomsListComponent from 'AppsComponents/chat-app/SearchRoomsListComponent'
import RoomComponent from 'AppsComponents/chat-app/RoomComponent'
import InputComponent from 'AppsComponents/chat-app/InputComponent'
import CreateRoomPanel from 'AppsComponents/chat-app/CreateRoomPanel'
import CreateRoomButton from 'AppsComponents/chat-app/CreateRoomButton'
import BannerComponent from 'AppsComponents/chat-app/BannerComponent'
import s from './index.module.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      isCreateRoomPanelOpen
    } = this.props

    return(
      <div id={s.container}>
        {isCreateRoomPanelOpen ? <CreateRoomPanel /> : null}
        <BannerComponent />
        <div id={s.body}>
          <div id={s.left}>
            <CreateRoomButton />
            <RoomsListComponent />
            <SearchRoomsListComponent />
          </div>
          <div id={s.right}>
            <div id={s.conversation}>
              <RoomComponent />
            </div>
            <div id={s.input}>
              <InputComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isCreateRoomPanelOpen: state.chatApp.isCreateRoomPanelOpen
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