import React from 'react'
import { connect } from 'react-redux'
import s from './RoomsListComponent.module.scss'
import { timeSince } from 'Utils/index'
import Loading from './loading_white.svg'
import {
  requestRoomData,
  requestRoomsList
} from 'AppsActions/chat-app/index'

const getNumMsgNotRead = (id, seenBy) => seenBy.find(n => n.user.id === id).numMsgNotRead

const RoomsListItem = ({
  id,
  currentUser,
  title,
  lastMessage,
  messages,
  participants,
  seenBy,
  requestRoomData,
  selected
}) => (
  <div className={s.item + ' ' + (selected ? s.itemSelected : null)}
    onClick={() => requestRoomData(id, currentUser.id)} >
    <img src={lastMessage.user.thumbnail} />
    <div>
      <h4><strong>{title}</strong></h4>
      <p>{lastMessage.content}</p>
      <p>Msg not read : {getNumMsgNotRead(currentUser.id, seenBy)}</p>
      <p className={s.smallDate}>{timeSince(lastMessage.date)}</p>
    </div>
  </div>
)

class RoomsListComponent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestRoomsList(0)
  }

  render() {
    const {
      roomsList,
      requestRoomData,
      isRequestingRoomsList,
      currentUser,
      currentRoomId
    } = this.props

    if(isRequestingRoomsList) {
      return (
        <div id='rooms-list-container'>
          <Loading className='rotating' />
        </div>
      )
    }

    if(!roomsList.length) {
      return (
        <div id='rooms-list-container'>
          Pas de rooms
        </div>
      )
    }
    
    return(
      <div id={s.container}>
        {roomsList.map((r, i) => (
          <RoomsListItem 
            {...r}
            selected={currentRoomId === r.id}
            requestRoomData={requestRoomData}
            currentUser={currentUser}
            key={i}
            />
        ))}
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    currentUser: state.chatApp.currentUser,
    currentRoomId: state.chatApp.currentRoom.id,
    roomsList: state.chatApp.roomsList,
    isRequestingRoomsList: state.chatApp.isRequestingRoomsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestRoomData: (id, userId) => dispatch(requestRoomData(id, userId)),
    requestRoomsList: (id) => dispatch(requestRoomsList(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (RoomsListComponent)