import React from 'react'
import { connect } from 'react-redux'
import s from './ContactComponent.module.scss'
import pattern from './pattern.jpg'
import {
  Input,
  Textarea,
  Button
} from './Form'

class ContactComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (event) => this.setState({[event.target.name]: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      name,
      email,
      message
    } = this.state

    return(
      <div id={s.container}>
        <h1 data-aos='fade-up'>
          Contact
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <Input 
            value={name}
            onChange={this.handleChange}
            name='name'
            placeholder='Your name'
            />
          <Input 
            value={email}
            onChange={this.handleChange}
            name='email'
            placeholder='Your email'
            />
          <Textarea 
            value={message}
            onChange={this.handleChange}
            name='message'
            placeholder='Your message'
            />
          <Button style={{width: '200px', alignSelf: 'flex-end'}} >Send</Button>
        {/*} animation button qui se remplit depuis le milieu */}
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ContactComponent)
