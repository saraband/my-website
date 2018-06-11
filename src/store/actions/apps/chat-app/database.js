const user = {
  id: 1,
  name: 'Jon',
  picture: require('./img/jon.jpg')
}

const lastMessage = {
  id: 0,
  content: 'Salut les djeuns',
  user,
  date: Date.now()
}

export default {
  rooms: [
    {
      id: 1,
      title: 'Bonjour',
      lastMessage,
      messages: [lastMessage],
      participants: [user],
      seenBy: [0]
    }
  ],
  users: [
    {
      id: 0,
      name: 'Sara',
      picture: require('./img/sara.jpg')
    },
    {
      id: 1,
      name: 'Jon',
      picture: require('./img/jon.jpg')
    },
    {
      id: 2,
      name: 'Sofia',
      picture: require('./img/sofia.jpg')
    },
    {
      id: 3,
      name: 'Enzo',
      picture: require('./img/sofia.jpg')
    },
    {
      id: 4,
      name: 'Lynn',
      picture: require('./img/sofia.jpg')
    }
  ]
}