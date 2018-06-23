import React from 'react'
import { connect } from 'react-redux'
import s from './index.module.scss'
import Banner from 'AppsComponents/delivery-app/Banner'
import RestaurantsList from 'AppsComponents/delivery-app/RestaurantsList'
import RestaurantComponent from 'AppsComponents/delivery-app/RestaurantComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { page } = this.props

    return(
      <div id={s.container}>
        <Banner />
        {page === 'restaurants_list_page' ?
          <RestaurantsList /> :
          <RestaurantComponent />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.deliveryApp.currentPage
  }
}

export default connect(mapStateToProps)(App)