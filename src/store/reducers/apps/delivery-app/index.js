import { combineReducers } from 'redux'
import {
  REQUEST_RESTAURANTS_LIST_SUCCESS,
  REQUEST_RESTAURANT_DATA_SUCCESS,
  SHOW_RESTAURANT_DATA,
  HIDE_RESTAURANT_DATA,
  CHANGE_PAGE,
  HIDE_CURRENT_PAGE,
  ADD_TO_BASKET
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

export default combineReducers({
  baskets,
  restaurantsList,
  restaurantData,
  currentPage,
  hideCurrentPage
})