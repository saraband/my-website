import DB from './database'

export const LIST_REQUEST = 'LIST_REQUEST'
export const LIST_REQUEST_SUCCESS = 'LIST_REQUEST_SUCCESS'
export const LIST_REQUEST_FAILED = 'LIST_REQUEST_FAILED'
export const PROPERTY_DATA_REQUEST = 'PROPERTY_DATA_REQUEST'
export const PROPERTY_DATA_SUCCESS = 'PROPERTY_DATA_SUCCESS'
export const PROPERTY_DATA_FAILED = 'PROPERTY_DATA_FAILED'
export const SHOW_PROPERTY_PANEL = 'SHOW_PROPERTY_PANEL'
export const HIDE_PROPERTY_PANEL = 'HIDE_PROPERTY_PANEL'
export const SET_LIST_FILTER = 'SET_LIST_FILTER'

export const requestList = (data) => {
  return (dispatch) => {
    dispatch({
      type: LIST_REQUEST,
      data
    })

    const list = DB.filter(p => {

      // PLACE
      if(data.place !== '') {
        if(p.place.toLowerCase() !== data.place.toLowerCase())
          return false
      }

      // PRICE MIN
      if(data.priceMin !== '') {
        if(p.price < parseInt(data.priceMin))
          return false
      }

      // PRICE MAX
      if(data.priceMax !== '') {
        if(p.price > parseInt(data.priceMax))
          return false
      }

      // AREA MIN
      if(data.areaMin !== '') {
        if(p.area < parseInt(data.areaMin))
          return false
      }

      // NUM ROOMS MIN
      if(data.numRoomsMin !== '') {
        if(p.numRooms < parseInt(data.numRoomsMin))
          return false
      }

      // TYPE
      if(data.type !== 'all') {
        if(p.type !== data.type)
          return false
      }

      // ACTION TYPE
      if(data.actionType !== 'all') {
        if(p.actionType !== data.actionType)
          return false
      }

      return true
    })

    setTimeout(() => {
      dispatch({type: LIST_REQUEST_SUCCESS, list})
    }, 500)
  }
}

export const requestPropertyData = (id) => {
  return (dispatch) => {
    dispatch({type: PROPERTY_DATA_REQUEST})

    // This is where I would fetch data via an API call
    // But here I don't need it
    dispatch({
      type: PROPERTY_DATA_SUCCESS,
      data: DB.find(p => p.id === id)
    })

    dispatch({type: SHOW_PROPERTY_PANEL})
  }
}