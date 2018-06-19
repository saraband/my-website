import React from 'react'
import s from './DeliSelect.module.scss'
import DropdownSvg from './arrow-down.svg'
import { connect } from 'react-redux'
import {
  toggleTag
} from 'AppsActions/delivery-app/index'

const DropdownItem = ({text, onClick, renderIcon, renderDropDown}) => (
  <p className={s.dropdownItem} onClick={onClick} >
    {renderIcon !== undefined ? renderIcon() : null}
    <span className={s.dropdownText}>{text}</span>
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
    
    return tags.map((t, i) => <DropdownItem text={t.value + '--'+(t.selected?'XX':null)} onClick={() => onChange(t.value)} key={i} />)
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
        <DropdownItem text={value} onClick={this.toggle} renderIcon={renderIcon} renderDropDown={false} />
        {toggle ? (<div className={s.dropdown}>
          {this.renderElements()}
        </div>) : null}
      </div>
    )
  }
}