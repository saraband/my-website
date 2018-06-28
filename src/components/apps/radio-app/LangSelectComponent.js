import React from 'react'
import { connect } from 'react-redux'
import s from './LangSelectComponent.module.scss'
import DropdownPng from './dropdown.png'

export default class LangSelectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lang: 'EN',
      toggle: false
    }
  }

  render() {
    const { lang, toggle } = this.state

    return(
      <div
        id={s.container}
        onClick={() => this.setState({toggle: !toggle})}
        style={{backgroundImage: `url(${DropdownPng})`}}
        onBlur={() => this.setState({toggle: false})}
        className={toggle ? s.toggled : null}
        >
        {lang}
        {toggle &&
          <div id={s.dropdown}>
            <a onClick={() => this.setState({lang: 'EN'})}>EN</a>
            <a onClick={() => this.setState({lang: 'FR'})}>FR</a>
            <a onClick={() => this.setState({lang: 'NL'})}>NL</a>
          </div>
        }
      </div>
    )
  }
}