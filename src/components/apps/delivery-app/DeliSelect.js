import React from 'react'
import s from './DeliSelect.module.scss'
import DropdownSvg from './arrow-down.svg'
import { connect } from 'react-redux'
import {
  toggleTag
} from 'AppsActions/delivery-app/index'
import TriangleUpSvg from './triangle-up.svg'

const DropdownItem = ({
  value,
  selected,
  style,
  number,
  onClick,
  renderIcon,
  renderDropDown
}) => (
  <p className={s.dropdownItem + ' ' + (selected ? s.dropdownSelected : null)} onClick={onClick} style={style} >
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
    
    return tags.map((t, i) => (
      <DropdownItem
        {...t}
        onClick={() => onChange(t.value)}
        key={i}
        style={{
          opacity: 0,
          animation: `${s.fadeRight} 0.15s linear forwards`,
          animationDelay: `${0.03 * i}s`
        }} />
    ))
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
        <DropdownItem
          value={value}
          onClick={this.toggle}
          renderIcon={renderIcon}
          renderDropDown={true}
          style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }} />
        {toggle ? <TriangleUpSvg className={s.triangleUp} /> : null}
        {toggle ? (
          <div className={s.dropdown}>
            {this.renderElements()}
          </div>)
          : null}
      </div>
    )
  }
}