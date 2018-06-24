import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantItem.module.scss'
import { showRestaurantData } from 'AppsActions/delivery-app/index'
import RatingSvg from './rating.svg'
import LoadingSvg from './loading.svg'
import Image from './Image'

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
      id,
      name,
      priceRange,
      description,
      rating,
      pictureUrlSmall,
      showRestaurantData,
      retrievingRestaurantDataId,
      tags,
      i
    } = this.props

    return (
      <div
        className={s.container}
        onClick={() => showRestaurantData(this.props)}
        >
        {retrievingRestaurantDataId === id ?
          <div className={s.overlay}>
            <LoadingSvg className={s.loadingSvg} />
          </div>
          : null}
        <div className={s.imgContainer}>
          <Image src={pictureUrlSmall} />
        </div>
        <div className={s.description}>
          <h3>
            <span className={s.rating}><RatingSvg className={s.ratingSvg} /> {rating}%</span>
            <span>{name}</span>
            <span className={s.priceRange}>{priceRange}</span>
          </h3>
          <h5>{tags.join(' - ')}</h5>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    retrievingRestaurantDataId: state.deliveryApp.retrievingRestaurantDataId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showRestaurantData: (data) => dispatch(showRestaurantData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem)