let counter = 0

export default {
  rooms: [
    {
      id: counter++,
      title: `Birthday party`,
      messages: [
        {
          id: counter++,
          date: Date.now(),
          content: `Hey guys what's up, how is it going ?`,
          user: {
            username: 'Jon',
            picture: require('./img/jon.jpg')
          }
        },
        {
          id: counter++,
          date: Date.now() - 1000,
          content: `Hey guys what's up, how is it going ?`,
          user: {
            username: 'Jon',
            picture: require('./img/sara.jpg')
          }
        },
        {
          id: counter++,
          date: Date.now() - 2000,
          content: `Hey guys what's up, how is it going ?`,
          user: {
            username: 'Jon',
            picture: require('./img/sara.jpg')
          }
        }
      ]
    }
  ]
}