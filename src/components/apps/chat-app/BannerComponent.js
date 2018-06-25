import React from 'react'
import { connect } from 'react-redux'
import s from './BannerComponent.module.scss'
import Logo from './logo.svg'

class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      numMsgNotRead,
      currentUser
    } = this.props

    return(
      <div id={s.container}>
        <Logo id={s.logo} />
        <div id={s.profile}>
          <div id={s.left}>
            <h4>{currentUser.name}</h4>
            <h5>{numMsgNotRead} Unread messages</h5>
          </div>
          <div id={s.right}>
            <img src={currentUser.thumbnail} id={s.thumbnail}/>
          </div>
        </div>
      </div>
    )
  }
}

/*
**  Return the number of unread conversation in a rooms list
*/
const getNumMsgNotRead = (list, user) => {
  let msgUnread = 0

  for(let r of list) {
    let unread = false

    for(let s of r.seenBy) {
      if(s.user.id === user.id
      && s.numMsgNotRead) {
        unread = 1
      }
    }

    msgUnread += unread
  }

  return msgUnread
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.chatApp.currentUser,
    numMsgNotRead: getNumMsgNotRead(state.chatApp.roomsList, state.chatApp.currentUser)
  }
}

export default connect(mapStateToProps)(BannerComponent)