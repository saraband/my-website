import React from 'react'
import { connect } from 'react-redux'
import s from './BodyComponent.module.scss'
import RestaurantList from './RestaurantList'
import RestaurantComponent from './RestaurantComponent'
import CheckoutComponent from './CheckoutComponent'

class BodyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPage } = this.props

    switch(currentPage) {
      case 'restaurants_list_page':
        return <RestaurantList />
      case 'restaurant_data_page':
        return <RestaurantComponent />
      case 'checkout_page':
        return <CheckoutComponent />
      default:
        return <p>Error</p>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.deliveryApp.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyComponent)