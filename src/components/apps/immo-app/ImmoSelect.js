import React from 'react'
import './ImmoSelect.scss'
import DropdownSvg from './arrow-down.svg'
import { connect } from 'react-redux'

const DropdownItem = ({text, onClick}) => (
  <p className='immo-app-dropdown-item' onClick={onClick} >
    {text}
    <DropdownSvg style={{width: '20px'}} />
  </p>
)

export default class ImmoSelect extends React.Component {
  constructor(props) {
    super(props);

    this.elements = props.children.map((c, i) => ({value: c.props.value, text: c.props.children}))

    this.state = {
      toggle: false,
      selected: props.value
    }

  }

  toggle = () => this.setState({toggle: !this.state.toggle})

  handleSelect = (element) => {
    const {
      onChange,
      name
    } = this.props

    this.setState({selected: element.value})
    this.toggle()
    this.props.onChange({
      target: {
        name,
        value: element.value
      }
    })
  }

  renderElements = () => {
    if(!this.state.toggle)
      return
    
    return this.elements.map((e, i) => <DropdownItem {...e} onClick={() => this.handleSelect(e)} key={i} />)
  }

  render() {
    const {
      value,
      text
    } = this.elements.find(e => e.value === this.state.selected)
    const { toggle } = this.state

    return(
      <div className='immo-app-select' style={this.props.style}>
        <DropdownItem text={text} onClick={this.toggle} />
        {toggle ? (<div className='immo-app-select-dropdown'>
          {this.renderElements()}
        </div>) : null}
      </div>
    )
  }
}