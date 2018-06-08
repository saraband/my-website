import React from 'react'
import { connect } from 'react-redux'
import s from './InputComponent.module.scss'
import {
  sendMessage
} from 'AppsActions/chat-app/index'

class InputComponent extends React.PureComponent {
  constructor(props) {
    super(props)

    //this.inputRef = React.createRef()
    this.state = {
      message: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleKeyPress = (event) => {
    const key = event.which || event.keyCode

    if(key != 13)
      return

    this.handleSubmit()
  }

  handleSubmit = () => {  
    const {
      currentRoom,
      currentUser,
      sendMessage
    } = this.props

    const { message } = this.state

    if(currentUser === undefined
    || currentRoom === undefined
    || !message.length)
      return

    sendMessage(currentUser, currentRoom._id, message)
    this.setState({message: ''})
  }

  componentDidMount() {
    //this.inputRef.current.focus()
  }

  render() {
    const { message } = this.state

    return(
      <div id='input-container'>
        <form>
          <textarea type='text' value={message}
            name='message'
            ref={this.inputRef}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder='Type your message here' />
        </form>
      </div> 
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    currentUser: state.chatApp.currentUser,
    currentRoom: state.chatApp.currentRoom
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (user, roomId, message) => dispatch(sendMessage(user, roomId, message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (InputComponent)