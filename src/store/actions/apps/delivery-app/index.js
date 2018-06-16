import DB from './database'

export const REQUEST_RESTAURANTS_LIST_PENDING = 'REQUEST_RESTAURANTS_LIST_PENDING'
export const REQUEST_RESTAURANTS_LIST_FAILED = 'REQUEST_RESTAURANTS_LIST_FAILED'
export const REQUEST_RESTAURANTS_LIST_SUCCESS = 'REQUEST_RESTAURANTS_LIST_SUCCESS'
export const REQUEST_RESTAURANT_DATA_PENDING = 'REQUEST_RESTAURANT_DATA_PENDING'
export const REQUEST_RESTAURANT_DATA_FAILED = 'REQUEST_RESTAURANT_DATA_FAILED'
export const REQUEST_RESTAURANT_DATA_SUCCESS = 'REQUEST_RESTAURANT_DATA_SUCCESS'
export const SHOW_RESTAURANT_DATA = 'SHOW_RESTAURANT_DATA'
export const HIDE_RESTAURANT_DATA = 'HIDE_RESTAURANT_DATA'

export const requestRestaurantsList = () => {
  return (dispatch) => {
    dispatch({type: REQUEST_RESTAURANTS_LIST_PENDING})

    const list = DB.restaurants
    //timeout

    dispatch({type: REQUEST_RESTAURANTS_LIST_SUCCESS, list})
  }
}

export const showRestaurantData = (data) => {
  return (dispatch) => {
    dispatch({type: REQUEST_RESTAURANT_DATA_PENDING})
    // timeout
    dispatch({type: REQUEST_RESTAURANT_DATA_SUCCESS, data})
    dispatch({type: SHOW_RESTAURANT_DATA})
  }
}