import { getRandomArrayElement, getRandomInt } from 'Utils/index'

const randomImg = [
  require('./img/0.jpg'),
  require('./img/1.jpg'),
  require('./img/2.jpg'),
  require('./img/3.jpg'),
]

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

const priceRanges = [
  'Cheap',
  'Moderate',
  'Expensive'
]

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
      name: getRandomArrayElement(randomRestaurantNames),
      items: generateItems(getRandomInt(2, 10))
    })
  }

  return menus
}

const generateRestaurants = (num) => {
  let restaurants = []

  for(let i = 0; i < num; ++i) {
    restaurants.push({
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

export default {
  restaurants: generateRestaurants(20)
}