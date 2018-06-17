import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_PAGE } from 'AppsActions/delivery-app/index'

class RestaurantComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderMenus = () => {
    const { menus } = this.props.restaurantData

    return menus.map(menu => {
      return (
        <div>
          <h2>{menu.name}</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap'
          }} >
            {menu.items.map(item => (
              <div style={{backgroundColor: 'bisque'}}>
                <p>{item.name} : {item.price}</p>
                <p>{item.ingredients.map(i => `${i}, `)}</p>
              </div>
            ))}
          </div>
        </div>
      )
    })
  }

  render() {
    const {
      name,
      priceRange,
      description,
      rating,
      menus,
      pictureUrl
    } = this.props.restaurantData

    const { backToResults } = this.props

    return(
      <div>
        <h3>{name}</h3>
        <h3>{description}</h3>
        {this.renderMenus()}
        <a onClick={backToResults}>Back</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.deliveryApp.restaurantData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    backToResults: () => dispatch({type: CHANGE_PAGE, page: 'restaurants_list_page'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantComponent)