import React from 'react'
import { connect } from 'react-redux'
import s from './LangSelectComponent.module.scss'
import DropdownPng from './dropdown.png'

export default class LangSelectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lang: 'EN'
    }
  }

  render() {
    const { lang } = this.state

    return(
      <div id={s.container} style={{backgroundImage: `url(${DropdownPng})`}}>
        {lang}
      </div>
    )
  }
}