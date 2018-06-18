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
        <p>{numMsgNotRead} Unread messages</p>
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

    for(let p of r.notSeenBy) {
      if(p.userId === user.id
      && p.numMsgNotRead) {
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