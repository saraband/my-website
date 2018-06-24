import React from 'react'
import s from './AutoComplete.module.scss'
import TriangleUpSvg from './triangle-up.svg'

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
  }

  renderList = () => {
    const { 
      filter,
      onSelect,
      list
    } = this.props

    const filteredList = list.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
      .map((item, i) => <p key={i} style={{
        opacity: 0,
        animation: `${s.fadeRight} 0.15s linear forwards`,
        animationDelay: `${0.05 * i}s`
      }} onClick={() => onSelect(item)}>{item}</p>)

    if(filteredList.length === 0)
      return <p>No results for "{filter}"</p>

    return filteredList
  }

  render() {
    return(
      <div id={s.container}>
        <TriangleUpSvg className={s.triangleUp} />
        <div>
          {this.renderList()}
        </div>
      </div>
    )
  }
}