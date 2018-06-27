import React from 'react'

export default [
  {
    id: 'findimo',
    title: 'Findimo',
    thumbnail: require('./img/findimo-thumbnail.png'),
    visit: '/findimo/',
    technologies: [
      'React',
      'Redux',
      'Javascript',
      'HTML',
      'CSS3',
      'Adobe Suite'
    ],
    images: [
      require('./img/findimo-0.jpg'),
      require('./img/findimo-1.jpg'),
    ]
  },
  {
    id: 'delicius',
    title: 'Delicius',
    visit: '/delicius/',
    thumbnail: require('./img/delicius-thumbnail.png'),
    technologies: [
      'React',
      'Redux',
      'Javascript',
      'HTML',
      'CSS3',
      'Adobe Suite'
    ],
    images: [
      require('./img/delicius-0.jpg'),
      require('./img/delicius-1.jpg'),
      require('./img/delicius-2.jpg'),
    ]
  },
  {
    id: 'goldize',
    title: 'Goldize',
    thumbnail: require('./img/goldize-thumbnail.jpg'),
    technologies: [
      'After Effects',
      'Illustrator',
      'Photoshop'
    ],
    video: () => (
      <iframe
        id='videoframe'
        src='https://player.vimeo.com/video/107622034?title=0&byline=0&portrait=0' 
        frameBorder='0'
        allowFullScreen>
      </iframe>
    ),
  },
  {
    id: 'jdg',
    title: 'Jeux du Golfe',
    thumbnail: require('./img/jdg-thumbnail.jpg'),
    technologies: [
      'Illustrator',
      'Photoshop',
      'Indesign'
    ],
    images: [
      require('./img/jdg-0.jpg'),
      require('./img/jdg-1.jpg'),
      require('./img/jdg-2.jpg'),
    ]
  },
  {
    id: 'thesource',
    title: 'The Source',
    thumbnail: require('./img/thesource-thumbnail.jpg'),
    technologies: [
      'Illustrator',
      'Photoshop',
      'Indesign'
    ],
    images: [
      require('./img/thesource-0.jpg'),
      require('./img/thesource-1.jpg'),
      require('./img/thesource-2.jpg'),
    ]
  },
  {
    id: 'chitchat',
    title: 'Chit Chat',
    visit: '/chit-chat/',
    thumbnail: require('./img/chitchat-thumbnail.jpg'),
    technologies: [
      'React',
      'Redux',
      'Javascript',
      'HTML',
      'CSS3',
      'Adobe Suite'
    ],
    images: [
      require('./img/wip.png'),
    ]
  },
]