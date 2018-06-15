import React from 'react'
import s from './BasketComponent.module.scss'

export default class BasketComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        BasketComponent
      </div>
    )
  }
}