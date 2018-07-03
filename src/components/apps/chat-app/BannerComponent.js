import React from 'react'
import { connect } from 'react-redux'
import s from './BannerComponent.module.scss'
import Logo from './logo.svg'
import styled from 'styled-components'
import Colors from './Colors'

const StyledBanner = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #d5d5d5;
  font-family: 'Open Sans'
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const Left = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Right = styled.div`
  
`

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`

const NameTitle = styled.h4`
  font-size: 18px;
  color: ${Colors.GREY};
`

const UnreadTitle = styled.h5`
  color: #9f9f9f;
  font-size: 14px;
`

class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(Logo)
    const {
      numMsgNotRead,
      currentUser: {
        name,
        thumbnail
      }
    } = this.props

    return(
      <StyledBanner>
        <Logo style={{height: '50px'}} />
        <Profile>
          <Left>
            <NameTitle>{name}</NameTitle>
            <UnreadTitle>{numMsgNotRead} Unread messages</UnreadTitle>
          </Left>
          <Right>
            <Thumbnail src={thumbnail} />
          </Right>
        </Profile>
      </StyledBanner>
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