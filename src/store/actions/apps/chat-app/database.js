let DB = {
  rooms: [],
  users: [
    {
      id: 0,
      name: 'Sara',
      thumbnail: require('./img/sara_small.jpg'),
      picture: require('./img/sara.jpg')
    },
    {
      id: 1,
      name: 'Jon',
      thumbnail: require('./img/jon_small.jpg'),
      picture: require('./img/jon.jpg')
    },
    {
      id: 2,
      name: 'Sofia',
      thumbnail: require('./img/sofia_small.jpg'),
      picture: require('./img/sofia.jpg')
    }
  ]
}

let counter = 0
const jon = DB.users.find(u => u.name === 'Jon')
const sara = DB.users.find(u => u.name === 'Sara')
const sofia = DB.users.find(u => u.name === 'Sofia')

// Returns a Message Object
export const createMessage = (user, message) => {
  return {
    id: counter++,
    content: message,
    user,
    date: Date.now()
  }
}

// Create a room
export const dbCreateRoom = (user, message, title = `New room ${counter}`, participants = DB.users) => {
  const m = createMessage(user, message)
  DB.rooms.push({
    id: counter++,
    title,
    lastMessage: m,
    messages: [m],
    participants,
    seenBy: participants.map(u => ({
      user: u,
      numMsgNotRead: u.id === user.id ? 0 : 1
    }))
  })
}

// Add message to last room created
export const addMessage = (user, message) => {
  const m = createMessage(user, message)
  const room = DB.rooms[DB.rooms.length - 1]

  room.messages.push(m)
  room.lastMessage = m
  room.seenBy = room.seenBy.map(s => ({
    user: s.user,
    numMsgNotRead: s.user.id === user.id ? 0 : s.numMsgNotRead + 1
  }))
}

dbCreateRoom(jon, 'Salut les aminches')
addMessage(jon, 'Petite soirée demain soir ?')
addMessage(sofia, 'Pas trop chaude, on peut pas plutot se dire samedi ?')
addMessage(jon, 'Allez quoi, juste quelques bières')

export default DB