import React from 'react'
import { connect } from 'react-redux'
import s from './BasketComponent.module.scss'

class BasketComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      items,
      total
    } = this.props

    return(
      <div id={s.container}>
        <ul>
          {items.map((item, i) => <li key={i}><span>{item.name}</span><span>x {item.quantity}</span></li>)}
        </ul>

        <h3>Total: {total}$</h3>
        <button disabled={!items.length}>Pay now</button>
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
    items: getCurrentBasketItems(state.deliveryApp.baskets, state.deliveryApp.restaurantData.id),
    total: getTotalItems(state.deliveryApp.baskets, state.deliveryApp.restaurantData.id)
  }
}

export default connect(mapStateToProps)(BasketComponent)