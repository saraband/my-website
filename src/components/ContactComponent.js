import React from 'react'
import { connect } from 'react-redux'
import s from './ContactComponent.module.scss'

import getTrFn from './Translation'
import {
  Input,
  Textarea,
  Button
} from './Form'

import patternPng from './pattern.png'
import InfoSvg from './info.svg'

class ContactComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      sent: false,
      isSending: false,

      errors: {}
    }
  }

  handleChange = (event) => this.setState({[event.target.name]: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault();

    // A few regex to check the form fields
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

    if(Object.keys(errors).length > 0)
      return


    // Create urlencoded body
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    }

    const params = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    params.unshift('form-name=contact');

    this.setState({isSending: true})

    // Send data
    fetch('/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
        method: 'post',
        credentials: 'same-origin',
        body: params.join('&')
    })
    .then(() => {
      this.setState({sent: true})
    })
  }

  render() {
    const { tr } = this.props
    const {
      name,
      email,
      phone,
      message,
      sent,
      isSending,
      errors
    } = this.state

    return(
      <div id={s.container} style={{backgroundImage: `url(${patternPng})`}}>
      <div id='contact'></div>
        <h1 data-aos='fade-up'>
          {tr('contact-title')}
          <div className={s.border} data-aos='fade-up'></div>
        </h1>

        {/* NETLIFY FORM */}
        <div style={{display: 'none'}} dangerouslySetInnerHTML={{__html: `
          <form name='contact' netlify netlify-honeypot='bot-field' hidden>
            <input type='text' name='name' />
            <input type='text' name='email' />
            <input type='text' name='phone' />
            <textarea name="message"></textarea>
          </form>
        `}}></div>

        <form
          disabled={sent}
          onSubmit={this.handleSubmit}
          autoComplete='off'
          data-test='test'>
          <Input 
            error={errors.name}
            value={name}
            onChange={this.handleChange}
            name='name'
            placeholder={tr('contact-name-placeholder')}
            />
          <Input 
            error={errors.phone}
            value={phone}
            onChange={this.handleChange}
            name='phone'
            placeholder={tr('contact-phone-placeholder')}
            />
          <Input
            error={errors.email}
            value={email}
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
          <div id={s.botForm}>
            <p>{Object.keys(errors).length > 0 && <span><InfoSvg id={s.infoSvg}/>{tr('contact-error-fields')}</span>}</p>
            <Button style={{width: '200px', margin: '0', alignSelf: 'end'}} >
              {sent ? tr('contact-button-sent') : tr('contact-button')}
            </Button>
          </div>
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
