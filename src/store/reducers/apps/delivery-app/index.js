import { combineReducers } from 'redux'
import {
  REQUEST_RESTAURANTS_LIST_SUCCESS,
  REQUEST_RESTAURANT_DATA_SUCCESS,
  SHOW_RESTAURANT_DATA,
  HIDE_RESTAURANT_DATA,
  CHANGE_PAGE,
  HIDE_CURRENT_PAGE
} from 'AppsActions/delivery-app/index'

const basket = (state = {test: 'yo'}, action) => {
  return state
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
  basket,
  restaurantsList,
  restaurantData,
  currentPage,
  hideCurrentPage
})