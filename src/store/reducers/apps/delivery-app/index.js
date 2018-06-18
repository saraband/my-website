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
      let i = newState.findIndex(b => b.id === action.basketData.id)

      if(i === -1) {
        console.log('new basket')
        i = newState.push({...action.basketData, items: []}) - 1
        console.log(i)
      }

      let indexItem = newState[i].items.find(i => i.id === action.itemData.id)

      if(indexItem === -1 || indexItem === undefined) {
        newState[i].items.push({...action.itemData, quantity: 1})
        console.log(newState)
      } else {
        const it = newState[i][indexItem]
        newState[i].items[indexItem] = {
          ...it,
          quantity: 1
        }
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