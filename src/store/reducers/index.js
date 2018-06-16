import { combineReducers } from 'redux'
import {
  SET_LANG
} from 'Actions/index'
import ImmoAppReducers from 'AppsReducers/immo-app/index'
import ChatAppReducers from 'AppsReducers/chat-app/index'
import DeliveryAppReducers from 'AppsReducers/delivery-app/index'

const lang = (state = 'en', action) => {
  switch(action.type) {
    case SET_LANG:
      return action.lang
    default:
      return state
  }
}

export default combineReducers({
  lang,
  immoApp: ImmoAppReducers,
  chatApp: ChatAppReducers,
  deliveryApp: DeliveryAppReducers
})