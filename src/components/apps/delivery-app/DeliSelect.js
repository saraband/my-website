import React from 'react'
import s from './DeliSelect.module.scss'
import DropdownSvg from './arrow-down.svg'
import { connect } from 'react-redux'
import {
  toggleTag
} from 'AppsActions/delivery-app/index'

const DropdownItem = ({
  value,
  selected,
  number,
  onClick,
  renderIcon,
  renderDropDown
}) => (
  <p className={s.dropdownItem + ' ' + (selected ? s.dropdownSelected : null)} onClick={onClick} >
    {renderIcon !== undefined ? renderIcon() : null}
    <span className={s.dropdownText}>{value}</span>
    {number !== undefined ? <span className={s.dropdownNumber}>({number})</span> : null}
    {renderDropDown ? <DropdownSvg className={s.dropdownSvg} /> : null}
  </p>
)

export default class DeliSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }
  }

  toggle = () => this.setState({toggle: !this.state.toggle})
  hide = () => this.setState({toggle: false})

  renderElements = () => {
    const { toggle } = this.state
    const {
      onChange,
      tags
    } = this.props

    if(!toggle)
      return
    
    return tags.map((t, i) => <DropdownItem {...t} onClick={() => onChange(t.value)} key={i} />)
  }

  render() {
    const { toggle } = this.state
    const {
      renderIcon,
      value
    } = this.props

    return(
      <div tabIndex='0' className={s.container} style={this.props.style}
        onBlur={this.hide} >
        <DropdownItem value={value} onClick={this.toggle} renderIcon={renderIcon} renderDropDown={true} />
        {toggle ? (<div className={s.dropdown}>
          {this.renderElements()}
        </div>) : null}
      </div>
    )
  }
}