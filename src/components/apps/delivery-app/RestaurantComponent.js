import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantComponent.module.scss'
import {
  CHANGE_PAGE,
  addToBasket
} from 'AppsActions/delivery-app/index'
import BasketComponent from './BasketComponent'

class RestaurantComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderMenus = () => {
    const {
      id,
      menus
    } = this.props.restaurantData
    const { addToBasket } = this.props

    return menus.map(menu => {
      return (
        <div className={s.menu} >
          <h2>{menu.name}</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap'
          }} >
            {menu.items.map(item => (
              <div className={s.item}>
                <div className={s.itemDesc}>
                  <p><strong>{item.name}</strong> : {item.price}$</p>
                  <p>{item.ingredients.map(i => `${i}, `)}</p>
                </div>
                <div className={s.itemOperations}>
                  <a>-</a><a onClick={() => addToBasket(this.props.restaurantData, item)}>+</a>
                </div>
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
      <div id={s.container}>
        <div id={s.body}>
          <h4><a onClick={backToResults}>{`<<`} Back to results</a></h4>
          <br />
          <div id={s.imgContainer}>
            <img src={pictureUrl} />
          </div>
          <h1>{name}</h1>
          <p>{description}</p>
          <br /><br /><br />
          {this.renderMenus()}
        </div>
        <BasketComponent />
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
    backToResults: () => dispatch({type: CHANGE_PAGE, page: 'restaurants_list_page'}),
    addToBasket: (basketData, itemData) => dispatch(addToBasket(basketData, itemData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantComponent)