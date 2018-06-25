import React from 'react'
import { connect } from 'react-redux'
import Seen from './seen.svg'
import s from './RoomComponent.module.scss'
import { timeSince } from 'Utils/index'

class RoomComponent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  renderBlockMessages = (messages) => messages.map((mb, i) => {
    const { currentUserId } = this.props

    /* if user if You NOT CLEAN -> */
    if(mb.user.id === currentUserId) {
      return(
        <div className={s.blockMessage} key={i} style={{marginLeft: '30%'}}>
          <div className={s.topBlockMessage}>
            <div className={s.blockMessages} style={{backgroundColor: '#657b88'}}>
              {mb.messages.map(m => <p key={m.id}>{m.content}</p>)}
            </div>
            <div className={s.userPicCol}>
              <img src={mb.user.thumbnail} />
            </div>
          </div>
          <div className={s.botBlockMessage}>
            <p className={s.timeBlockMessage}>
              {timeSince(mb.messages[mb.messages.length - 1].date)}
            </p>
            <p className={s.usernameBlockMessage} style={{marginRight: '65px'}}>
              {mb.user.name}
            </p>
          </div>
        </div>
      )
    }

    return(
      <div className={s.blockMessage} key={i}>
        <div className={s.topBlockMessage}>
          <div className={s.userPicCol}>
            <img src={mb.user.thumbnail} />
          </div>
          <div className={s.blockMessages}>
            {mb.messages.map(m => <p key={m.id}>{m.content}</p>)}
          </div>
        </div>
        <div className={s.botBlockMessage}>
          <p className={s.usernameBlockMessage}>
            {mb.user.name}
          </p>
          <p className={s.timeBlockMessage}>
            {timeSince(mb.messages[mb.messages.length - 1].date)}
          </p>
        </div>
      </div>
    )
  })

  render() {
    const {
      title,
      seenBy,
      messages
    } = this.props.currentRoom
    const {
      blockMessages,
      currentUserId
    } = this.props

    if(title === undefined)
      return <p>No current room</p>

    return(
      <div id={s.container}>
        <div id={s.roomMessages}>
          {this.renderBlockMessages(blockMessages)}
        </div>
        {/* Not very clean, works although works in this case */}
        {blockMessages[blockMessages.length - 1].user.id !== currentUserId &&
          <p id={s.seenBy}><Seen id={s.seen} /> Seen by: {seenBy
            .filter(s => s.numMsgNotRead === 0 && s.user.id !== currentUserId)
            .map(s => s.user.name)
            .join(', ')}
          </p>}
      </div>
    )
  }
}

const getMessagesInBlocks = (messages) => {
  if(!messages) return []

  let messagesInBlocks = [
    {
      user: messages[0].user,
      messages: [messages[0]]
    }
  ]

  let currentUser = messages[0].user
  let currentMessages = messagesInBlocks[0].messages

  for(let i = 1; i < messages.length; ++i) {
    if(messages[i].user.id !== currentUser.id) {
      messagesInBlocks.push({
        user: messages[i].user,
        messages: [messages[i]]
      })

      currentUser = messages[i].user
      currentMessages = messagesInBlocks[messagesInBlocks.length - 1].messages
    } else {
      currentMessages.push(messages[i])
    }
  }

  return messagesInBlocks
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.chatApp.currentUser.id,
    currentRoom: state.chatApp.currentRoom,
    blockMessages: getMessagesInBlocks(state.chatApp.currentRoom.messages)
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