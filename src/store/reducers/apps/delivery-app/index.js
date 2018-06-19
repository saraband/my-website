import { combineReducers } from 'redux'
import {
  REQUEST_RESTAURANTS_LIST_PENDING,
  REQUEST_RESTAURANTS_LIST_SUCCESS,
  REQUEST_RESTAURANT_DATA_SUCCESS,
  SHOW_RESTAURANT_DATA,
  HIDE_RESTAURANT_DATA,
  CHANGE_PAGE,
  HIDE_CURRENT_PAGE,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CHANGE_SEARCH_DATA,
  TOGGLE_TAG
} from 'AppsActions/delivery-app/index'

const baskets = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_BASKET:
      let newState = [...state]

      // Get index of current basket
      let i = newState.findIndex(b => b.id === action.basketId)

      // Could not find basket for current restaurant
      // Creates one and returns its index
      if(i === -1) {
        i = newState.push({
          id: action.basketId,
          items: []
        }) - 1
      }

      // Reference to the item to be added and the items array
      let items = newState[i].items
      let item = newState[i].items.find(i => i.id === action.itemData.id)

      // If item doesn't exist in basket, create one
      if(item === undefined) {
        items.push({...action.itemData, quantity: 1})

      // Else increase the quantity of this item in the basket
      } else {
        item.quantity += 1
      }

      return newState



    case REMOVE_FROM_BASKET:
      // Get index of current basket
      const basket = state.find(b => b.id === action.basketId)

      // Current basket is empty
      if(basket === undefined) {
        return state
      }

      // Get index of item to remove in current basket
      const itemIndex = basket.items.findIndex(i => i.id === action.itemId)

      // Current item doesn't exist in basket
      if(basket.items[itemIndex] === undefined)
        return state

      // Create a copy of the basket and retrieve quantity of item to be removed
      let newBaskets = [...state]
      let newBasket = newBaskets.find(b => b.id === action.basketId)
      const quantity = newBasket.items[itemIndex].quantity

      // Decrease quantity of the item or erase it if there's only one left
      if(quantity <= 1)
        newBasket.items.splice(itemIndex, 1)
      else
        newBasket.items[itemIndex].quantity -= 1

      return newBaskets



    default:
      return state
  }
}

const initialSearchData = {
  search: '',
  location: '',
  tags: []
}

const searchData = (state = initialSearchData, action) => {
  switch(action.type) {
    case CHANGE_SEARCH_DATA:
    console.log(action.key+'=>'+action.value)
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state
  }
}

const restaurantsList = (state = [], action) => {
  switch(action.type) {
    case REQUEST_RESTAURANTS_LIST_SUCCESS:
      return [...action.list]
    default:
      return state
  }
}

const restaurantData = (state = {}, action) => {
  switch(action.type) {
    case REQUEST_RESTAURANT_DATA_SUCCESS:
      return {...action.data}
    default:
      return state
  }
}

const currentPage = (state = 'restaurants_list_page', action) => {
  switch(action.type) {
    case CHANGE_PAGE:
      return action.page
    default:
      return state
  }
}

const hideCurrentPage = (state = false, action) => {
  switch(action.type) {
    case CHANGE_PAGE:
      return false
    case HIDE_CURRENT_PAGE:
      return true
    default:
      return state
  }
}

const tags = (state = ['Healthy', 'Burger'], action) => {
  switch(action.type) {
    case TOGGLE_TAG:
      const index = state.findIndex(t => t === action.tag)
      if(index === -1) {
        let newState = [...state]
        newState.push(action.tag)
        return newState
      }

      // Array.splice doesnt work as intended wtf ?
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

const isRetrievingRestaurantsList = (state = false, action) => {
  switch(action.type) {
    case REQUEST_RESTAURANTS_LIST_PENDING:
      return true
    case REQUEST_RESTAURANTS_LIST_SUCCESS:
      return false
    default:
      return state
  }
}

export default combineReducers({
  baskets,
  restaurantsList,
  restaurantData,
  currentPage,
  hideCurrentPage,
  searchData,
  tags,
  isRetrievingRestaurantsList
})