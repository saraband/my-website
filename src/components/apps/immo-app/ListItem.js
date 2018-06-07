import React from 'react'
import { connect } from 'react-redux'
import { timeSince } from 'Utils/index'
import Image from './Image'
import s from './ListItem.module.scss'
import {
  requestPropertyData,
  SHOW_PROPERTY_PANEL
} from 'AppsActions/immo-app/index'

const shortDescription = (str) => str.length < 100 ? str : `${str.substr(0, 97)}...`
const prettyPrice = (price) => {
  if(price < 1000)
    return price

  const p = '' + price
  return p.substr(0, p.length - 3) + ' ' + p.substr(p.length - 3)
}

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const {
      id,
      showPropertyPanel,
      requestPropertyData
    } = this.props

    requestPropertyData(id)
  }

  render() {
    const {
      id,
      pictureUrl,
      title,
      description,
      type,
      actionType,
      price,
      area,
      numRooms,
      place,
      date
    } = this.props

    return(
      <div onClick={this.handleClick} className={s.container}>
        <div className={s.imgContainer} >
          <Image src={pictureUrl} alt={title} />
        </div>
        <div className={s.description}>
          <h3>{title}</h3>
          <h5><span>{prettyPrice(price)} €</span><span>{area} m²</span></h5>
          <p>{shortDescription(description)}</p>
          <p><span>{place}</span><span>{timeSince(date*1000)}</span></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestPropertyData: (id) => dispatch(requestPropertyData(id)),
    showPropertyPanel: () => dispatch({type: SHOW_PROPERTY_PANEL})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ListItem)