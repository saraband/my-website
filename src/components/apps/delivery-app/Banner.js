import React from 'react'
import s from './Banner.module.scss'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <h1>DELIVERY APP</h1>
      </div>
    )
  }
}