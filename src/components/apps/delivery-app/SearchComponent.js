import React from 'react'
import s from './SearchComponent.module.scss'

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <form onSubmit={e => e.preventDefault()}>
          <input type='text' placeholder='SEARCH' />
          <input type='text' placeholder='WHERE' />
          <label>
            Type of food: 
            <select>
              <option>Chinese</option>
              <option>Japanese</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </label>
          <label>
            Price range: 
            <select>
              <option>Cheap</option>
              <option>Moderate</option>
              <option>Expensive</option>
            </select>
          </label>
          <button>Search !</button>
        </form>
      </div>
    )
  }
}