import React from 'react'
import { connect } from 'react-redux'
import getTrFn from './Translation'
import s from './ContactComponent.module.scss'
import pattern from './pattern2.jpg'
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
    const { tr } = this.props
    const {
      name,
      email,
      message
    } = this.state

    return(
      <div id={s.container} style={{backgroundImage: `url(${pattern})`}}>
        <h1 data-aos='fade-up'>
          {tr('contact-title')}
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <form onSubmit={this.handleSubmit} autoComplete='off' data-test='test'>
          <Input 
            value={name}
            onChange={this.handleChange}
            name='name'
            placeholder={tr('contact-name-placeholder')}
            />
          <Input 
            value={email}
            onChange={this.handleChange}
            name='email'
            placeholder={tr('contact-email-placeholder')}
            />
          <Textarea 
            value={message}
            onChange={this.handleChange}
            name='message'
            placeholder={tr('contact-message-placeholder')}
            />
          <Button style={{width: '200px', alignSelf: 'flex-end'}} >{tr('contact-button')}</Button>
        {/*} animation button qui se remplit depuis le milieu */}
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang)
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
