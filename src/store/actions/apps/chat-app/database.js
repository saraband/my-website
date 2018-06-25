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

dbCreateRoom(sara, 'Can we meet up saturday instead of friday ?')

dbCreateRoom(jon, 'Happy birthday Sara !')
addMessage(sara, 'Hey thanks :)')
addMessage(sofia, 'HAPPY B-DAY CHAMP')

dbCreateRoom(jon, 'When do you want to meet up next saturday ?')
addMessage(jon, 'We can go to my place it\'s quite near the centre, just let me know if that\'s cool for you')
addMessage(jon, 'I\'ll prep the documents')
addMessage(sofia, 'Works for me !')
addMessage(jon, 'Great :)')

export default DB