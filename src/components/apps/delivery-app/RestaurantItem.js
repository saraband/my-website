import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantItem.module.scss'
import { showRestaurantData } from 'AppsActions/delivery-app/index'
import RatingSvg from './rating.svg'

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
      showRestaurantData,
      tags
    } = this.props

    return (
      <div id={s.container} onClick={() => showRestaurantData(this.props)}>
        <div id={s.imgContainer}>
          <img src={pictureUrlSmall} />
        </div>
        <div className={s.description}>
          <h3>
            <span className={s.rating}><RatingSvg className={s.ratingSvg} /> {rating}%</span>
            <span>{name}</span>
          </h3>
          <h5>{tags}</h5>
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
    showRestaurantData: (data) => dispatch(showRestaurantData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem)