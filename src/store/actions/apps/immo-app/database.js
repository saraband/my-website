const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum lorem venenatis ligula euismod, id mollis metus molestie. Duis fermentum sem ac est cursus volutpat. '

module.exports = [
	{
		id: 0,
		pictureUrl: require('./img/0.jpg'),
		title: 'Sunny flat with view on the lake',
		description: loremIpsum,
		type: 'appartment',
		actionType: 'rent',
		price: 750,
		area: 80,
		numRooms: 2,
		place: 'Barcelona',
		date: Date.now()
	},
	{
		id: 1,
		pictureUrl: require('./img/1.jpg'),
		title: 'Spacious duplex near the Grand-Place',
		description: loremIpsum,
		type: 'duplex',
		actionType: 'rent',
		price: 1800,
		area: 140,
		numRooms: 4,
		place: 'Bruxelles',
		date: Date.now()
	},
	{
		id: 2,
		pictureUrl: require('./img/2.jpg'),
		title: 'Great appartment located in the heart of the city',
		description: loremIpsum,
		type: 'appartment',
		actionType: 'rent',
		price: 800,
		area: 76,
		numRooms: 2,
		place: 'Barcelona',
		date: Date.now()
	},
	{
		id: 3,
		pictureUrl: require('./img/3.jpg'),
		title: 'Traditionnal penthouse in the European neighborhood',
		description: loremIpsum,
		type: 'house',
		actionType: 'buy',
		price: 180000,
		area: 79,
		numRooms: 3,
		place: 'Bruxelles',
		date: Date.now()
	},
	
]