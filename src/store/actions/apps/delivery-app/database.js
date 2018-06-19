import { getRandomArrayElement, getRandomInt } from 'Utils/index'

const randomRestaurantNames = [
  'The Friendly Clam',
  'The Champagne Ranch',
  'The Cool Beehive',
  'The Solar Bistrot',
  'The Square Clove',
  'Pavilion',
  'Jewel',
  'Roast',
  'The Maple',
  'Prospects'
]

const randomIngredients = [
  'Tomato',
  'Garlic',
  'Mushrooms',
  'Pork',
  'Beef',
  'Chicken',
  'Cream',
  'Onions',
  'Rice',
  'Potatoes'
]

const randomTags = [
  'Chinese',
  'Pizza',
  'Burger',
  'Japanese',
  'Hangover',
  'Healthy'
]

const getRandomTags = (num) => {
  let tags = []

  for(let i = 0; i < num; ++i) {
    tags.push(getRandomArrayElement(randomTags))
  }

  return tags
}

const priceRanges = [
  'Cheap',
  'Moderate',
  'Expensive'
]

let counter = 0
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat massa convallis rhoncus fringilla. Morbi ornare odio lectus, in placerat nisi efficitur non.'

const generateIngredients = (num) => {
  let ingredients = []

  for(let i = 0; i < num; ++i) {
    ingredients.push(getRandomArrayElement(randomIngredients))
  }

  return ingredients
}

const generateItems = (num) => {
  let items = []

  for(let i = 0; i < num; ++i) {
    items.push({
      id: counter++,
      name: getRandomArrayElement(randomRestaurantNames),
      price: getRandomInt(5, 25),
      ingredients: generateIngredients(getRandomInt(2, 5))
    })
  }

  return items
}


const generateMenus = (num) => {
  let menus = []

  for(let i = 0; i < num; ++i) {
    menus.push({
      id: counter++,
      name: getRandomArrayElement(randomRestaurantNames),
      items: generateItems(getRandomInt(5, 10))
    })
  }

  return menus
}

const generateRestaurants = (num) => {
  let restaurants = []

  for(let i = 0; i < num; ++i) {
    restaurants.push({
      id: counter++,
      name: getRandomArrayElement(randomRestaurantNames),
      priceRange: getRandomArrayElement(priceRanges),
      description: loremIpsum,
      rating: getRandomInt(0, 100),
      menus: generateMenus(getRandomInt(1, 3)),
      pictureUrl: getRandomArrayElement(randomImg)
    })
  }

  return restaurants
}

export default new Array(20).fill({}).map((el, i) => ({
  id: counter++,
  pictureUrl: require(`./img/${i}_normal.jpg`),
  pictureUrlSmall: require(`./img/${i}_small.jpg`),
  name: getRandomArrayElement(randomRestaurantNames),
  priceRange: getRandomArrayElement(priceRanges),
  description: loremIpsum,
  rating: getRandomInt(70, 100),
  menus: generateMenus(getRandomInt(3, 4)),
  tags: getRandomTags(1),
}))