import React from 'react'
import s from './index.module.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
      </div>
    )
  }
}