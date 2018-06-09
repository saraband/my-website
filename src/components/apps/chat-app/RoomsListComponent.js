import React from 'react'
import { connect } from 'react-redux'
import s from './RoomsListComponent.module.scss'
import {
  requestRoomData,
  requestRoomsList
} from 'AppsActions/chat-app/index'
import { timeSince } from 'Utils/index'
import Loading from './loading_white.svg'

const RoomsListItem = ({
  id,
  title,
  lastMessage,
  messages,
  participants,
  seenBy
}) => (
            <div className='rooms-list-item fadeIn'
            onClick={() => requestRoomData(r.id)} >
            <img src={lastMessage.user.picture} />
            <div>
              <h4><strong>{title}</strong></h4>
              <p>{lastMessage.content}</p>
              <p className='small-date'>{timeSince(lastMessage.date)}</p>
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
      isRequestingRoomsList
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
      <div id='rooms-list-container'>
        {roomsList.map((r, i) => <RoomsListItem {...r} />)}
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    roomsList: state.chatApp.roomsList,
    isRequestingRoomsList: state.chatApp.isRequestingRoomsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestRoomData: (id) => dispatch(requestRoomData(id)),
    requestRoomsList: (id) => dispatch(requestRoomsList(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (RoomsListComponent)