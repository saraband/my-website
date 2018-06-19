import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantItem.module.scss'
import { showRestaurantData } from 'AppsActions/delivery-app/index'

// Funny test
const getRatingColors = (rating) => {
  const c = rating / 100
  return `rgb(${Math.floor((1 - c) * 255)}, ${Math.floor(c * 255)}, 125)`
}

class RestaurantItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name,
      priceRange,
      description,
      rating,
      pictureUrlSmall,
      showRestaurantData
    } = this.props

    return (
      <div id={s.container} onClick={() => showRestaurantData(this.props)}>
        <div id={s.imgContainer}>
          <img src={pictureUrlSmall} />
        </div>
        <h3><span style={{color: getRatingColors(rating)}} >{rating}%</span> - {name}</h3>
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
    showRestaurantData: (data) => dispatch(showRestaurantData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem)