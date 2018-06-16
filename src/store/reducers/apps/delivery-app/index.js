import { combineReducers } from 'redux'
import {
  REQUEST_RESTAURANTS_LIST_SUCCESS,
  REQUEST_RESTAURANT_DATA_SUCCESS,
  SHOW_RESTAURANT_DATA,
  HIDE_RESTAURANT_DATA
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

const isShowingRestaurantData = (state = false, action) => {
  switch(action.type) {
    case SHOW_RESTAURANT_DATA:
      return true
    case HIDE_RESTAURANT_DATA:
      return false
    default:
      return state
  }
}

export default combineReducers({
  basket,
  restaurantsList,
  isShowingRestaurantData,
  restaurantData
})