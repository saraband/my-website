import React from 'react'
import { connect } from 'react-redux'
import s from './SearchRoomsListComponent.module.scss'

export default class SearchRoomsListComponent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id='search-rooms-container'>
        <input type='text' placeholder='Search conversations..' />
      </div>
    )
  }
} 