import React from 'react'
import { connect } from 'react-redux'
import s from './BodyComponent.module.scss'
import { requestRestaurantsList } from 'AppsActions/delivery-app/index'
import RestaurantItem from './RestaurantItem'

class BodyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestRestaurantsList()
  }

  render() {
    const {
      restaurantsList,
      isShowingRestaurantData,
      restaurantData
    } = this.props

    if(isShowingRestaurantData) {
      return(
        <div id={s.container}>
          {restaurantData.name}
        </div>
      )
    }

    return(
      <div id={s.container}>
        {restaurantsList.map((r, i) => <RestaurantItem key={i} {...r} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantsList: state.deliveryApp.restaurantsList,
    isShowingRestaurantData: state.deliveryApp.isShowingRestaurantData,
    restaurantData: state.deliveryApp.restaurantData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestRestaurantsList: () => dispatch(requestRestaurantsList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyComponent)