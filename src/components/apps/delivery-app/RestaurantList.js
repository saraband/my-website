import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantList.module.scss'
import { requestRestaurantsList } from 'AppsActions/delivery-app/index'
import RestaurantItem from './RestaurantItem'
import RestaurantComponent from './RestaurantComponent'
import SearchComponent from 'AppsComponents/delivery-app/SearchComponent'
import LoadingIcon from './LoadingIcon'

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
        {isRetrievingRestaurantsList ? (
          <div id={s.loadingOverlay}>
            <LoadingIcon style={{marginTop: '100px'}}/>
          </div>
        ) : null}
        {restaurantsList.map((r, i) => <RestaurantItem key={i} {...r} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantsList: state.deliveryApp.restaurantsList,
    hideCurrentPage: state.deliveryApp.hideCurrentPage,
    isRetrievingRestaurantsList: state.deliveryApp.isRetrievingRestaurantsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)