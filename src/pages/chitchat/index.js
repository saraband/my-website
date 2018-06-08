import React from 'react'
import { connect } from 'react-redux'
import RoomsListComponent from 'AppsComponents/chat-app/RoomsListComponent'
import SearchRoomsListComponent from 'AppsComponents/chat-app/SearchRoomsListComponent'
import RoomComponent from 'AppsComponents/chat-app/RoomComponent'
import InputComponent from 'AppsComponents/chat-app/InputComponent'
import s from './index.module.scss'
import {
  requestRoomsList,
  receiveRoomsList,
  receiveUsersList,
  receiveMessage
} from 'AppsActions/chat-app/index'
import CreateRoomPanel from 'AppsComponents/chat-app/CreateRoomPanel'
import CreateRoomButton from 'AppsComponents/chat-app/CreateRoomButton'
import BannerComponent from 'AppsComponents/chat-app/BannerComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {
      requestRoomsList,
      receiveRoomsList,
      receiveUsersList,
      receiveMessage,
      currentUser
    } = this.props

    // Requesting rooms list the first time
    //requestRoomsList(currentUser.id)
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
            <SearchRoomsListComponent />
            <RoomsListComponent />
            <CreateRoomButton />
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
    currentUser: state.chatApp.currentUser,
    isCreateRoomPanelOpen: state.chatApp.isCreateRoomPanelOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestRoomsList: (id) => dispatch(requestRoomsList(id)),
    receiveRoomsList: (roomsList) => dispatch(receiveRoomsList(roomsList)),
    receiveUsersList: (usersList) => dispatch(receiveUsersList(usersList)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App)