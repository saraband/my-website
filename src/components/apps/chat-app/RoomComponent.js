import React from 'react'
import { connect } from 'react-redux'
import Seen from './seen.svg'
import s from './RoomComponent.module.scss'

class RoomComponent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  renderMessages = (messages) => messages.map((m, i) => {
    return <p key={i}>{m.user.name} said: {m.content}</p>
  })

  render() {
    const {
      title,
      seenBy,
      messages
    } = this.props.currentRoom

    if(title === undefined)
      return <p>No current room</p>

    return(
      <div id={s.container}>
        <p><Seen id={s.seen} /></p>
        {this.renderMessages(messages)}
      </div>
    )
  }
}

const getMessagesInBlocks = (messages) => {
  let messagesInBlocks = [
    {
      user: messages[0].user,
      messages: []
    }
  ]
  let currentUser = messages[0]
}

const mapStateToProps = (state) => {
  return {
    currentRoom: state.chatApp.currentRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (RoomComponent)