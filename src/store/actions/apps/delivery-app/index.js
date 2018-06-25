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
export const CLEAR_BASKET = 'CLEAR_BASKET'
export const CHANGE_SEARCH_DATA = 'CHANGE_SEARCH_DATA'
export const CHANGE_RESTAURANTS_SORT_FILTER = 'CHANGE_RESTAURANTS_SORT_FILTER'
export const TOGGLE_TAG = 'TOGGLE_TAG'

export const requestRestaurantsList = ({search, location, tags}) => {
  return (dispatch) => {
    dispatch({type: REQUEST_RESTAURANTS_LIST_PENDING})

    // Retrieve tags possibles
    const tagsPossibles = DB.tagsPossibles

    // Filters restaurants
    const list = DB.restaurants.filter(restaurant => {

      // Test tags
      if(tags.length > 0) {
        for(let t of tags) {
          let hasTag = false
          for(let rt of restaurant.tags) {
            if(t === rt) {
              hasTag = true
            }
          }

          if(!hasTag)
            return false
        }
      }

      // Test search and location
      if(!restaurant.name.toLowerCase().includes(search))
        return false

      // No condition is false
      return true
    })

    //timeout
    setTimeout(() => {
      dispatch({type: REQUEST_RESTAURANTS_LIST_SUCCESS, list, tagsPossibles})
    }, 800)
  }
}

export const showRestaurantData = (data) => {
  return (dispatch) => {
    dispatch({type: REQUEST_RESTAURANT_DATA_PENDING, id: data.id})
    // timeout
    setTimeout(() => {
      dispatch({type: REQUEST_RESTAURANT_DATA_SUCCESS, data})
      dispatch({type: HIDE_CURRENT_PAGE})

      setTimeout(() => { 
        dispatch({type: CHANGE_PAGE, page: 'restaurant_data_page'})
        window.scroll(0, 0)
      }, 0)
    }, 800)
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

export const changeRestaurantsSortFilter = (filter) => {
  return {
    type: CHANGE_RESTAURANTS_SORT_FILTER,
    filter
  }
}