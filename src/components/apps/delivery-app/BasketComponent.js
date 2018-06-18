import React from 'react'
import { connect } from 'react-redux'
import s from './BasketComponent.module.scss'

class BasketComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const items = this.props.basket === undefined ? [] : this.props.basket.items

    return(
      <div id={s.container}>
        <ul>
          {items !== undefined ?
            items.map(item => <li><span>{item.name}</span><span>{item.price}$</span></li>)
            : null
          }
        </ul>

        <h3>Total: 0.00$</h3>
        <button>Pay now</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.deliveryApp.baskets.find(b => b.id === state.deliveryApp.restaurantData.id)
  }
}

export default connect(mapStateToProps)(BasketComponent)