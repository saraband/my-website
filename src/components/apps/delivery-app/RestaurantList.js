import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantList.module.scss'
import { requestRestaurantsList } from 'AppsActions/delivery-app/index'
import RestaurantItem from './RestaurantItem'
import RestaurantComponent from './RestaurantComponent'

class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestRestaurantsList()
  }

  render() {
    const {
      restaurantsList,
      hideCurrentPage
    } = this.props

    console.log(hideCurrentPage ? 'true' : 'false')

    return(
      <div id={s.container} className={hideCurrentPage ? s.fadeOut : null}>
        {restaurantsList.map((r, i) => <RestaurantItem key={i} {...r} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantsList: state.deliveryApp.restaurantsList,
    hideCurrentPage: state.deliveryApp.hideCurrentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestRestaurantsList: () => dispatch(requestRestaurantsList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)