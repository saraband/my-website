import React from 'react'
import { connect } from 'react-redux'
import s from './RestaurantComponent.module.scss'
import {
  CHANGE_PAGE,
  addToBasket,
  removeFromBasket
} from 'AppsActions/delivery-app/index'
import Image from './Image'
import BasketComponent from './BasketComponent'
import RatingSvg from './rating.svg'
import InfoSvg from './info.svg'
import CheckoutComponent from './CheckoutComponent'
import TagSvg from './tag.svg'

class RestaurantComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recentlyAdded: {},
      hideRecentlyAdded: false
    }
  }

  // for recently added popup
  handleRemoveFromBasket = (itemId) => {
    const {
      removeFromBasket,
      restaurantData: {
        id
      }
    } = this.props

    removeFromBasket(id, itemId)
  }

  // for recently added popup
  handleAddToBasket = (item) => {
    const {
      addToBasket,
      restaurantData: {
        id
      }
    } = this.props

    addToBasket(id, item)

    // Timeout popup recentlyAdded
    clearTimeout(this.timeoutRecentlyAdded)
    this.setState({recentlyAdded: {...item}, hideRecentlyAdded: false})
    this.timeoutRecentlyAdded = setTimeout(() => this.setState({hideRecentlyAdded: true}), 2000)
  }

  renderMenus = () => {
    const {
      id,
      menus
    } = this.props.restaurantData

    return menus.map((menu, i) => {
      return (
        <div className={s.menu} key={i}>
          <h2>{menu.name}</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap'
          }} >
            {menu.items.map((item, j) => (
              <div className={s.item} key={j}>
                <div className={s.itemDesc}>
                  <h3><strong>{item.name}</strong> : {item.price}$</h3>
                  <h5>{item.ingredients.join(', ')}</h5>
                </div>
                <div className={s.itemOperations}>
                  <a onClick={() => this.handleRemoveFromBasket(item.id)}>-</a>
                  <a onClick={() => this.handleAddToBasket(item)}>+</a>
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
      tags,
      priceRange,
      description,
      rating,
      menus,
      pictureUrl
    } = this.props.restaurantData

    const {
      backToResults,
      isCheckingOut
    } = this.props

    const {
      recentlyAdded,
      hideRecentlyAdded
    } = this.state

    return(
      <div id={s.container}>
        {isCheckingOut ? <CheckoutComponent /> : null}
        {/* RECENTLY ADDED */}
        <div id={s.recentlyAdded} className={hideRecentlyAdded ?
          s.hideRecentlyAdded
          : (recentlyAdded.name !== undefined ?
              s.showRecentlyAdded
              : null)}>
          <InfoSvg id={s.infoSvg}/>
          You added 1x &nbsp;<strong>{recentlyAdded.name}</strong>&nbsp;to your basket.
        </div>
        <div id={s.body}>
          <h4><a onClick={backToResults}>{`<<`} Back to results</a></h4>
          <br />
          <div id={s.imgContainer}>
            <Image src={pictureUrl} />
          </div>
          <h1>{name}</h1>
          <h3>
            <span id={s.rating}><RatingSvg id={s.ratingSvg}/>{rating}%</span>
            {tags.map((t, i) => <span key={i} className={s.tag}><TagSvg className={s.tagSvg} />{t}</span>)}
          </h3>
          <p>{description}</p>
          {this.renderMenus()}
        </div>
        <BasketComponent />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.deliveryApp.restaurantData,
    isCheckingOut: state.deliveryApp.currentPage === 'checkout_page'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    backToResults: () => dispatch({type: CHANGE_PAGE, page: 'restaurants_list_page'}),
    addToBasket: (basketId, itemData) => dispatch(addToBasket(basketId, itemData)),
    removeFromBasket: (basketId, itemId) => dispatch(removeFromBasket(basketId, itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantComponent)