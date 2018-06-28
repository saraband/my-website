import React from 'react'
import s from './InputAutoComplete.module.scss'
import SearchPng from './search.png'

export default class InputAutoComplete extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      toggleAC: false,
      selected: -1
    }
  }

  handleKeyPress = (e) => {
    const { toggleAC, selected } = this.state
    const listLength = this.props.list.length
    const code = e.which

    if(!toggleAC)
      return

    if(code === 38)
      this.setState({selected: (selected === -1 || selected === 0) ? -1 : selected - 1})
    if(code === 40)
      this.setState({selected: selected + 1 < listLength ? selected + 1 : listLength - 1})
  }

  render() {
    const { filter, toggleAC, selected} = this.state
    const { list } = this.props

    return(
      <div id={s.container}>
        <input
          type='text'
          style={{backgroundImage: `url(${SearchPng})`}} 
          placeholder='Search'
          onChange={e => this.setState({
            filter: e.target.value,
            toggleAC: e.target.value !== ''
          })}
          onKeyPress={this.handleKeyPress}
          onBlur={() => this.setState({toggleAC: false})}
          onFocus={() => this.setState({toggleAC: filter !== ''})}
          value={filter}
          />
        {toggleAC && (
          <div className={s.autoCompleteContainer}>
            {list.filter(el => el.toLowerCase().includes(filter.toLowerCase())).map((el, i) => (
              <p
                key={i}
                onClick={e => {
                  this.setState({filter: el})
                  e.stopPropagation()
                  e.cancelBubble = true;
                }}
                onMouseEnter={() => this.setState({selected: i})}
                onMouseLeave={() => this.setState({selected: -1})}
                onKeyPress={this.handleKeyPress}
                className={i === selected ? s.selected : null}
                >{el}</p>
            ))}
          </div>
        )}
      </div>
    )
  }
}