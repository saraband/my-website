import DB from './database'

export const REQUEST_RESTAURANTS_LIST_PENDING = 'REQUEST_RESTAURANTS_LIST_PENDING'
export const REQUEST_RESTAURANTS_LIST_FAILED = 'REQUEST_RESTAURANTS_LIST_FAILED'
export const REQUEST_RESTAURANTS_LIST_SUCCESS = 'REQUEST_RESTAURANTS_LIST_SUCCESS'
export const REQUEST_RESTAURANT_DATA_PENDING = 'REQUEST_RESTAURANT_DATA_PENDING'
export const REQUEST_RESTAURANT_DATA_FAILED = 'REQUEST_RESTAURANT_DATA_FAILED'
export const REQUEST_RESTAURANT_DATA_SUCCESS = 'REQUEST_RESTAURANT_DATA_SUCCESS'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const HIDE_CURRENT_PAGE = 'HIDE_CURRENT_PAGE'
export const ADD_TO_BASKET = 'ADD_TO_BASKET'

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
    setTimeout(() => {
      dispatch({type: REQUEST_RESTAURANT_DATA_SUCCESS, data})
      dispatch({type: HIDE_CURRENT_PAGE})

      setTimeout(() => { 
        dispatch({type: CHANGE_PAGE, page: 'restaurant_data_page'})
      }, 0)
    }, 0)
  }
}

export const addToBasket = (basketData, itemData) => {
  return {
    type: ADD_TO_BASKET,
    basketData,
    itemData
  }
}