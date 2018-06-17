import React from 'react'
import s from './ImmoSelect.module.scss'
import DropdownSvg from './arrow-down.svg'
import { connect } from 'react-redux'

const DropdownItem = ({text, onClick, renderIcon}) => (
  <p className={s.dropdownItem} onClick={onClick} >
    {renderIcon !== undefined ? renderIcon() : null}
    {text}
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
  hide = () => this.setState({toggle: false})

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

  componentDidUpdate(prevProps) {
    const newValue = this.props.value
    if(prevProps.value !== newValue)
      this.setState({selected: newValue})
  }

  render() {
    const {
      value,
      text
    } = this.elements.find(e => e.value === this.state.selected)
    const { toggle } = this.state
    const { renderIcon } = this.props

    return(
      <div tabIndex='0' className={s.container} style={this.props.style}
        onBlur={this.hide} >
        <DropdownItem text={text} onClick={this.toggle} renderIcon={renderIcon} />
        {toggle ? (<div className={s.dropdown}>
          {this.renderElements()}
        </div>) : null}
      </div>
    )
  }
}