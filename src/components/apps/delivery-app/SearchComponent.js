import React from 'react'
import s from './SearchComponent.module.scss'

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        SearchComponent
      </div>
    )
  }
}