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
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
export const CHANGE_SEARCH_DATA = 'CHANGE_SEARCH_DATA'
export const TOGGLE_TAG = 'TOGGLE_TAG'

export const requestRestaurantsList = ({search, location, tags}) => {
  return (dispatch) => {
    dispatch({type: REQUEST_RESTAURANTS_LIST_PENDING})

    const list = DB/*.filter(restaurant => {
      if(tags.length > 1) {
        let hasTag = false
        for(let t of tags) {
          for(let rt of restaurant.tags) {
            if(t == rt) 
              hasTag = true
          }
        }

        return hasTag
      }

      // No condition is false
      return true
    })*/

    //timeout
    setTimeout(() => {
      dispatch({type: REQUEST_RESTAURANTS_LIST_SUCCESS, list})
    }, 300)
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

export const addToBasket = (basketId, itemData) => {
  return {
    type: ADD_TO_BASKET,
    basketId,
    itemData
  }
}

export const removeFromBasket = (basketId, itemId) => {
  return {
    type: REMOVE_FROM_BASKET,
    basketId,
    itemId
  }
}

export const changeSearchData = (key, value) => {
  return {
    type: CHANGE_SEARCH_DATA,
    key,
    value
  }
}

export const toggleTag = (tag) => {
  return {
    type: TOGGLE_TAG,
    tag
  }
}