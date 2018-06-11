import DB from './database.js'

export const SET_ROOMS_LIST_FILTER = 'SET_ROOMS_LIST_FILTER'
export const SHOW_CREATE_ROOM_PANEL = 'SHOW_CREATE_ROOM_PANEL'
export const HIDE_CREATE_ROOM_PANEL = 'HIDE_CREATE_ROOM_PANEL'

export const REQUEST_USERS_LIST_PENDING = 'REQUEST_USERS_LIST_PENDING'
export const REQUEST_USERS_LIST_SUCCESS = 'REQUEST_USERS_LIST_SUCCESS'
export const REQUEST_USERS_LIST_FAILED = 'REQUEST_USERS_LIST_FAILED'

export const REQUEST_ROOMS_LIST_PENDING = 'REQUEST_ROOMS_LIST_PENDING'
export const REQUEST_ROOMS_LIST_SUCCESS = 'REQUEST_ROOMS_LIST_SUCCESS'
export const REQUEST_ROOMS_LIST_FAILED = 'REQUEST_ROOMS_LIST_FAILED'

export const REQUEST_ROOM_DATA_PENDING = 'REQUEST_ROOM_DATA_PENDING'
export const REQUEST_ROOM_DATA_SUCCESS = 'REQUEST_ROOM_DATA_SUCCESS'
export const REQUEST_ROOM_DATA_FAILED = 'REQUEST_ROOM_DATA_FAILED'

export const SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED'

export const CREATE_ROOM_PENDING = 'CREATE_ROOM_PENDING'
export const CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS'
export const CREATE_ROOM_FAILED = 'CREATE_ROOM_FAILED'

let counter = 20

export const setRoomsListFilter = (filter) => {
  return {
    type: SET_ROOMS_LIST_FILTER,
    filter
  }
}

export const requestUsersList = (id) => {
  return (dispatch) => {
    dispatch({type: REQUEST_USERS_LIST_PENDING})

    dispatch(receiveUsersList(DB.users.filter(u => u.id === 0 ? false : true)))
    //socket.emit('REQUEST_USERS_LIST', id)
  }
}

export const receiveUsersList = (usersList) => {
  return {
    type: REQUEST_USERS_LIST_SUCCESS,
    usersList
  }
}

export const requestRoomsList = (id) => {
  return (dispatch) => {
    dispatch({type: REQUEST_ROOMS_LIST_PENDING})

    const list = DB.rooms

    setTimeout(() => {
      dispatch(receiveRoomsList(list))
    }, 500)
  }
}

export const receiveRoomsList = (roomsList) => {
  return {
    type: REQUEST_ROOMS_LIST_SUCCESS,
    roomsList
  }
}

export const requestRoomData = (id) => {
  return (dispatch) => {
    dispatch({type: REQUEST_ROOM_DATA_PENDING})

    dispatch({
      type: REQUEST_ROOM_DATA_SUCCESS,
      roomData: DB.rooms.find(r =>  r.id === id)
    })
  }
}

export const sendMessage = (user, roomId, message) => {
  return (dispatch) => {
    dispatch({type: SEND_MESSAGE_PENDING})

    let room = DB.rooms.find(r => r.id === roomId)

    const newMessage = {
      id: counter++,
      content: message,
      user,
      date: Date.now()
    }

    room.messages.push(newMessage)
    room.lastMessage = newMessage

    dispatch(receiveMessage(newMessage, roomId))

    /*socket.emit('SEND_MESSAGE', JSON.stringify({
      user,
      roomId,
      message
    }))*/
  }
}

export const receiveMessage = (message, roomId) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    message,
    roomId
  }
}

export const createRoom = (user, title, message, participants) => {
  return (dispatch) => {
    dispatch({type: CREATE_ROOM_PENDING})

    const newMessage = {
      id: counter++,
      content: message,
      user,
      date: Date.now()
    }

    DB.rooms.push({
      id: counter++,
      title,
      lastMessage: newMessage,
      messages: [newMessage],
      participants,
      seenBy: [user]
    })

    dispatch(receiveRoomsList(DB.rooms))
    dispatch(requestRoomData(counter - 1))
    /*socket.emit('CREATE_ROOM', JSON.stringify({
      user,
      title,
      message,
      participants
    }))*/
  }
}