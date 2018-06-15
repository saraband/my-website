import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantItem.module.scss'
import { showRestaurantData } from 'AppsActions/delivery-app/index'

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
      pictureUrl,
      showRestaurantData
    } = this.props

    return (
      <div id={s.container} onClick={() => showRestaurantData(this.props)}>
        <img src={pictureUrl} />
        '{name}'<br />
        rating: {rating}%<br />
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