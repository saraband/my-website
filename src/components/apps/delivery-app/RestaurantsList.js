import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantList.module.scss'
import { requestRestaurantsList } from 'AppsActions/delivery-app/index'
import RestaurantItem from './RestaurantItem'
import RestaurantComponent from './RestaurantComponent'
import SearchComponent from 'AppsComponents/delivery-app/SearchComponent'
import LoadingSvg from './loading.svg'

class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      restaurantsList,
      hideCurrentPage,
      isRetrievingRestaurantsList
    } = this.props

    return(
      <div id={s.container} className={hideCurrentPage ? s.fadeOut : null}>
        <SearchComponent />
        <div id={s.list}>
          {isRetrievingRestaurantsList ? (
            <div id={s.loadingOverlay}>
              <LoadingSvg id={s.loadingSvg} />
            </div>
          ) : null}
          {restaurantsList.map((r, i) => <RestaurantItem key={i} i={i} {...r} />)}
        </div>
      </div>
    )
  }
}

const getSortedList = (list, filter) => {
  switch(filter) {
    case 'sort_rating':
      return [...list].sort((a, b) => a.rating < b.rating)
    case 'sort_price':
      return [...list].sort((a, b) => a.priceRange.length > b.priceRange.length)
    default:
      return list
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantsList: getSortedList(state.deliveryApp.restaurantsList, state.deliveryApp.restaurantsSortFilter),
    hideCurrentPage: state.deliveryApp.hideCurrentPage,
    isRetrievingRestaurantsList: state.deliveryApp.isRetrievingRestaurantsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)