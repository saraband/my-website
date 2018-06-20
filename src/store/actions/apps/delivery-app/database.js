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

const randomFoodNames = [
  'Peach Custard',
  'Pineapple Trifle',
  'Roasted Yogurt Lobster',
  'Braised Cheese & Roll',
  'Nutmeg Cobbler',
  'Papaya Ice Cream',
  'Gooseberry Pud',
  'Hazelnut Crispies',
  'Caramel Whip',
  'Lemon Yogurt',
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
      name: getRandomArrayElement(randomFoodNames),
      price: getRandomInt(5, 25) + (getRandomInt(0, 4) === 4 ? 0.5 : 0),
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

const menus = [
  {
    /*
    **  STARTERS
    */
    id: counter++,
    name: 'Starters',
    items: [
      {
        id: counter++,
        name: 'Green salad',
        price: 4.5,
        ingredients: ['Lettuce', 'Vinegar', 'Tomato', 'Olive oil']
      },
      {
        id: counter++,
        name: 'Caesar salad',
        price: 5.5,
        ingredients: ['Lettuce', 'Vinegar', 'Tomato', 'Olive oil', 'Parmesan cheese', 'Garlic']
      },
      {
        id: counter++,
        name: 'Cheese balls',
        price: 3,
        ingredients: ['Mozzarella', 'Flour']
      },
      {
        id: counter++,
        name: 'Stir fried chilli chicken',
        price: 6,
        ingredients: ['Chicken', 'Rice', 'Chili', 'Tomato']
      },
      {
        id: counter++,
        name: 'Plain rice',
        price: 2.5,
        ingredients: ['Rice']
      }
    ]
  },
  {
    /*
    **  MAIN COURSES
    */
    id: counter++,
    name: 'Main courses',
    items: [
      {
        id: counter++,
        name: 'Ratatouille',
        price: 9.5,
        ingredients: ['Eggplant', 'Zucchini', 'Tomato', 'Onions']
      },
      {
        id: counter++,
        name: 'Salmon makis',
        price: 8,
        ingredients: ['Salmon', 'Rice', 'Algae']
      },
      {
        id: counter++,
        name: 'Pizza Margherita',
        price: 7.5,
        ingredients: ['Tomato', 'Basil', 'Mozzarella']
      },
      {
        id: counter++,
        name: 'Pasta Bolognesa',
        price: 11,
        ingredients: ['Beef', 'Pasta', 'Tomato sauce', 'Olive oil', 'Basil', 'Onions']
      },
      {
        id: counter++,
        name: 'Pasta Carbonara',
        price: 12.5,
        ingredients: ['Pork', 'Eg yolk', 'Cream', 'Onions', 'Parmesan cheese']
      }
    ]
  },
  {
    /*
    **  DRINKS
    */
    id: counter++,
    name: 'Drinks & desserts',
    items: [
      {
        id: counter++,
        name: 'Soda',
        price: 2,
        ingredients: []
      },
      {
        id: counter++,
        name: 'Plain water',
        price: 1,
        ingredients: []
      },
      {
        id: counter++,
        name: 'Sparkling water',
        price: 1.5,
        ingredients: []
      },
      {
        id: counter++,
        name: 'Cheese cake',
        price: 3.5,
        ingredients: ['Cheese', 'Cream']
      },
      {
        id: counter++,
        name: 'Tiramisu',
        price: 5.5,
        ingredients: ['Chocolate', 'Coffee', 'Vanilla']
      }
    ]
  }
]

const PriceRanges = {
  CHEAP: 'Cheap',
  MODERATE: 'Moderate',
  EXPENSIVE: 'Expensive'
}

const t = {
  BURGER: 'Burger',
  HEALTHY: 'Healthy',
  PASTA: 'Pasta',
  NOODLES: 'Noodles',
  ITALIAN: 'Italian',
  VEGAN: 'Vegan',
  DONUTS: 'Donuts',
  AMERICAN: 'American',
  SWEET: 'Sweet',
  SPANISH: 'Spanish',
  MEXICAN: 'Mexican',
  PIZZA: 'Pizza',
  JAPANESE: 'Japanese',
  SUSHI: 'Sushi',
  NOODLES: 'Noodles'
}

let DB = {
  restaurants: new Array(20).fill({}).map((el, i) => ({
    id: counter++,
    pictureUrl: require(`./img/${i}_normal.jpg`),
    pictureUrlSmall: require(`./img/${i}_small.jpg`),
    description: loremIpsum,
    rating: getRandomInt(70, 100),
    menus,
    tags: []
  }))
}

DB.restaurants[0].name =        'Ichiban Ramen'
DB.restaurants[0].priceRange =  PriceRanges.CHEAP
DB.restaurants[0].tags =        [t.NOODLES]

DB.restaurants[2].name =        'Ugetsu Monogatari'
DB.restaurants[2].priceRange =  PriceRanges.MODERATE
DB.restaurants[2].tags =        [t.NOODLES]

DB.restaurants[1].name =        'Culinaire'
DB.restaurants[1].priceRange =  PriceRanges.EXPENSIVE
DB.restaurants[1].tags =        [t.HEALTHY, t.VEGAN]

DB.restaurants[3].name =        'The Friendly Clam'
DB.restaurants[3].priceRange =  PriceRanges.EXPENSIVE
DB.restaurants[3].tags =        [t.HEALTHY]

DB.restaurants[4].name =        'Todo pa\' ella'
DB.restaurants[4].priceRange =  PriceRanges.MODERATE
DB.restaurants[4].tags =        [t.SPANISH]

DB.restaurants[5].name =        'La Cantina'
DB.restaurants[5].priceRange =  PriceRanges.CHEAP
DB.restaurants[5].tags =        [t.MEXICAN]

DB.restaurants[6].name =        'Emily Santoro'
DB.restaurants[6].priceRange =  PriceRanges.MODERATE
DB.restaurants[6].tags =        [t.ITALIAN, t.PASTA]

DB.restaurants[7].name =        'Bali By The Sea'
DB.restaurants[7].priceRange =  PriceRanges.MODERATE
DB.restaurants[7].tags =        [t.HEALTHY, t.VEGAN]

DB.restaurants[8].name =        'Boulangerie du coin'
DB.restaurants[8].priceRange =  PriceRanges.MODERATE
DB.restaurants[8].tags =        [t.HEALTHY, t.VEGAN]

DB.restaurants[9].name =        'Key Food Pizza'
DB.restaurants[9].priceRange =  PriceRanges.CHEAP
DB.restaurants[9].tags =        [t.PIZZA, t.ITALIAN]

DB.restaurants[10].name =        'Cafe De Haro'
DB.restaurants[10].priceRange =  PriceRanges.MODERATE
DB.restaurants[10].tags =        [t.HEALTHY, t.VEGAN]

DB.restaurants[11].name =        'Barbecue Shack'
DB.restaurants[11].priceRange =  PriceRanges.CHEAP
DB.restaurants[11].tags =        [t.AMERICAN, t.BURGER]

DB.restaurants[12].name =        'Durbin\'s'
DB.restaurants[12].priceRange =  PriceRanges.MODERATE
DB.restaurants[12].tags =        [t.AMERICAN, t.BURGER, t.HEALTHY]

DB.restaurants[13].name =        'Birdclick'
DB.restaurants[13].priceRange =  PriceRanges.CHEAP
DB.restaurants[13].tags =        [t.AMERICAN, t.BURGER]

DB.restaurants[14].name =        'Aubree\'s Pizza'
DB.restaurants[14].priceRange =  PriceRanges.MODERATE
DB.restaurants[14].tags =        [t.PIZZA, t.ITALIAN]

DB.restaurants[15].name =        'Sodexho'
DB.restaurants[15].priceRange =  PriceRanges.EXPENSIVE
DB.restaurants[15].tags =        [t.JAPANESE, t.SUSHI]

DB.restaurants[16].name =        'Kurosawa Sushi'
DB.restaurants[16].priceRange =  PriceRanges.CHEAP
DB.restaurants[16].tags =        [t.JAPANESE, t.SUSHI]

DB.restaurants[17].name =        'Chadwicks'
DB.restaurants[17].priceRange =  PriceRanges.CHEAP
DB.restaurants[17].tags =        [t.NOODLES]

DB.restaurants[18].name =        'Giorgio Donovan'
DB.restaurants[18].priceRange =  PriceRanges.MODERATE
DB.restaurants[18].tags =        [t.PASTA, t.ITALIAN]

DB.restaurants[19].name =        'Donut Craze'
DB.restaurants[19].priceRange =  PriceRanges.CHEAP
DB.restaurants[19].tags =        [t.DONUTS, t.AMERICAN, t.SWEET]

// Tags possibles + quantity of each restaurant having the tag
DB.tagsPossibles = []

for(let r of DB.restaurants) {
  for(let t of r.tags) {
    let tagPossible = DB.tagsPossibles.find(tp => t === tp.value)

    if(tagPossible === undefined)
      DB.tagsPossibles.push({value: t, number: 1})
    else
      tagPossible.number++
  }
}

export default DB