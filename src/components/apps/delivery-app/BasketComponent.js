import React from 'react'
import { connect } from 'react-redux'
import s from './BasketComponent.module.scss'
import {
  CHANGE_PAGE,
  addToBasket,
  removeFromBasket
} from 'AppsActions/delivery-app/index'
import CartSvg from './cart.svg'

const FoodItem = ({
  item,
  addToBasket,
  removeFromBasket,
  basketId,
  showControls
}) => (
  <li>
    <span className={s.itemQuantity}>
      {showControls && <span 
        className={s.itemOperation}
        onClick={() => removeFromBasket(basketId, item.id)}
        >-</span>}
      <span className={s.quantity}>{item.quantity}</span>
      {showControls && <span 
        className={s.itemOperation}
        onClick={() => addToBasket(basketId, item)}
        >+</span>}
    </span>
    <span className={s.itemName}>{item.name}</span>
    <span className={s.itemPrice}>{item.price} €</span>
  </li>
)

class BasketComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      items,
      total,
      checkout,
      addToBasket,
      removeFromBasket,
      basketId,
      showControls,
      width
    } = this.props

    return(
      <div id={s.container} style={{width}}>
        <div id={s.list}>
          {items.length ? (
            <ul>
              {items.map((item, i) => (
                // Not clean but I ain't got time
                <FoodItem
                  showControls={showControls}
                  addToBasket={addToBasket}
                  removeFromBasket={removeFromBasket}
                  basketId={basketId}
                  key={i}
                  item={item}
                  />
              ))}
            </ul>
          ) : (
            <p>Your basket is empty.</p>
          )}
        </div>
        {items.length ? <h3><span>Total:</span><span>{total} €</span></h3> : null}
        {showControls && <button disabled={!items.length} onClick={checkout}><CartSvg id={s.cartSvg} />Checkout</button>}
      </div>
    )
  }
}

const getCurrentBasketItems = (baskets, basketId) => {
  const basket = baskets.find(b => b.id === basketId)

  if(basket === undefined
  || basket.items === undefined)
    return []

  return [...basket.items]
}

const getTotalItems = (baskets, basketId) => {
  const items = getCurrentBasketItems(baskets, basketId)

  let total = 0

  for(let it of items)
    total += (it.quantity * it.price)

  return total
}

const mapStateToProps = (state) => {
  return {
    basketId: state.deliveryApp.restaurantData.id,
    items: getCurrentBasketItems(state.deliveryApp.baskets, state.deliveryApp.restaurantData.id),
    total: getTotalItems(state.deliveryApp.baskets, state.deliveryApp.restaurantData.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => dispatch({type: CHANGE_PAGE, page: 'checkout_page'}),
    addToBasket: (basketId, itemData) => dispatch(addToBasket(basketId, itemData)),
    removeFromBasket: (basketId, itemId) => dispatch(removeFromBasket(basketId, itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent)