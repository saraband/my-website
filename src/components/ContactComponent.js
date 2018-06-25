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
      phone: '',
      message: '',
      sent: false,

      errors: {
        name: false,
        email: false,
        phone: '',
        message: false
      }
    }
  }

  handleChange = (event) => this.setState({[event.target.name]: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = {
      name: (v) => v && v.length > 0,
      email: (v) => v && v.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
      phone: (v) => v && v.length > 0 && /[0-9 ]+/.test(v),
      message: (v) => v && v.length > 10,
    }

    let errors =  {};
    for(let key in isValid) {
      if(!isValid[key](this.state[key]))
        errors[key] = true
    }

    this.setState({errors})

    if(Object.keys(errors).length > 0) {
      console.log(errors)
      return
    }

    // Send form
    this.setState({sent: true})
  }

  render() {
    const { tr } = this.props
    const {
      name,
      email,
      phone,
      message,
      sent,
      errors
    } = this.state

    return(
      <div id={s.container} style={{backgroundImage: `url(${pattern})`}}>
        <h1 data-aos='fade-up'>
          {tr('contact-title')}
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <form onSubmit={this.handleSubmit} autoComplete='off' data-test='test'>
          <Input 
            error={errors.name}
            value={name}
            onChange={this.handleChange}
            name='name'
            placeholder={tr('contact-name-placeholder')}
            />
          <Input 
            error={errors.email}
            value={email}
            onChange={this.handleChange}
            name='phone'
            placeholder={tr('contact-phone-placeholder')}
            />
          <Input
            error={errors.phone}
            value={phone}
            onChange={this.handleChange}
            name='email'
            placeholder={tr('contact-email-placeholder')}
            />
          <Textarea 
            error={errors.message}
            value={message}
            onChange={this.handleChange}
            name='message'
            placeholder={tr('contact-message-placeholder')}
            />
          <Button style={{width: '200px', alignSelf: 'flex-end'}} >{sent ? tr('contact-button-sent') : tr('contact-button')}</Button>
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
