import React from 'react'
import s from './SearchComponent.module.scss'
import DeliSelect from './DeliSelect'

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <form onSubmit={e => e.preventDefault()}>
          <input type='search' placeholder='Search' />
          <input type='search' placeholder='Place, City' />
          <DeliSelect onChange={() => {}}>
            <p>Chinese</p>
            <p>Japanese</p>
            <p>Spanish</p>
            <p>French</p>
          </DeliSelect>
          <DeliSelect onChange={() => {}}>
            <option>Cheap</option>
            <option>Moderate</option>
            <option>Expensive</option>
          </DeliSelect>
        </form>
      </div>
    )
  }
}