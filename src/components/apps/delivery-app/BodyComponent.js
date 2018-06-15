import React from 'react'
import s from './BodyComponent.module.scss'

export default class BodyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        BodyComponent
      </div>
    )
  }
}