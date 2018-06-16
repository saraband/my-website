import React from 'react'
import s from './AutoCompletePlace.module.scss'

export default class AutoCompletePlace extends React.Component {
  constructor(props) {
    super(props)

    this.list = [
      'Barcelona',
      'Bruxelles',
      'Lilles'
    ]
  }

  renderList = () => {
    const { 
      filter,
      onSelect
    } = this.props
    const filteredList = this.list.filter(item => item.toLowerCase().includes(filter.toLowerCase())).map((item, i) => {
      return <p key={i} onClick={() => onSelect(item)}>{item}</p>
    })

    if(filteredList.length === 0)
      return <p>No results for "{filter}"</p>

    return filteredList
  }

  render() {
    const { filter } = this.props

    return(
      <div id={s.container}>
        {this.renderList()}
      </div>
    )
  }
}