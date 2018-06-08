import React from 'react'
import { connect } from 'react-redux'
import s from './RoomsListComponent.module.scss'
import {
  requestRoomData
} from 'AppsActions/chat-app/index'
import { timeSince } from 'Utils/index'
import Loading from './loading_white.svg'

class RoomsListComponent extends React.PureComponent {
  constructor(props) {
    super(props)
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
        </div>
      )
    }
    
    return(
      <div id='rooms-list-container'>
        {roomsList.map(r => (
          <div className='rooms-list-item fadeIn'
            onClick={() => requestRoomData(r._id)} >
            <img src='https://picsum.photos/50/50/?random' />
            <div>
              <h4><strong>{r.title}</strong></h4>
              <p>{r.lastMessage.user.username}: {r.lastMessage.content}</p>
              <p className='small-date'>{timeSince(r.lastMessage.date)}</p>
            </div>
          </div>
        ))}
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
    requestRoomData: (id) => dispatch(requestRoomData(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (RoomsListComponent)