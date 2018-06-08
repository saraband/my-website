import React from 'react'
import { connect } from 'react-redux'
import Seen from './seen.svg'
import s from './RoomComponent.module.scss'

class RoomComponent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      title,
      seenBy,
      messages
    } = this.props.currentRoom

    if(title === undefined)
      return <p>No current room</p>

    return(
      <div id='room-container'>
        <p><Seen className='test' /></p>
        {messages.map(m => <p>{m.user.username} said: {m.content}</p>)}
      </div>
    )
  }
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