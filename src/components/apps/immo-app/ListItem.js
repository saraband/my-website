import React from 'react'
import { connect } from 'react-redux'
import { timeSince } from 'Utils/index'
import Image from './Image'
import {
  requestPropertyData,
  SHOW_PROPERTY_PANEL
} from 'AppsActions/immo-app/index'

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
    showPropertyPanel()
  }

  render() {
    const {
      id,
      imgSrc,
      owner,
      title,
      price,
      date,
      area,
      description
    } = this.props

    return(
      <div onClick={this.handleClick} >
        <div>
          <Image src={imgSrc + '&id=' + id} alt={name} />
        </div>
        <div>
          <h3>{title}</h3>
          <h5>{price} € for {area} m² <span>{timeSince(date*1000)}</span></h5>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {}

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