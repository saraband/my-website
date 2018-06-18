import React from 'react'
import { connect } from 'react-redux'
import {
  SHOW_CREATE_ROOM_PANEL
} from 'AppsActions/chat-app/index'
import s from './CreateRoomButton.module.scss'

const CreateRoomButton = ({showCreateRoomPanel}) => (
  <div id={s.container} onClick={(showCreateRoomPanel)}>
    <p>Create room</p>
  </div>
)

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCreateRoomPanel: () => dispatch({type: SHOW_CREATE_ROOM_PANEL})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (CreateRoomButton)