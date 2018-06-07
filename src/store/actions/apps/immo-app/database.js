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
	{
		id: 4,
		pictureUrl: require('./img/4.jpg'),
		title: 'Great right next to the main street',
		description: loremIpsum,
		type: 'appartment',
		actionType: 'buy',
		price: 145000,
		area: 70,
		numRooms: 2,
		place: 'Bruxelles',
		date: Date.now()
	},
	{
		id: 5,
		pictureUrl: require('./img/5.jpg'),
		title: 'Mediterranean villa in front of the sea',
		description: loremIpsum,
		type: 'house',
		actionType: 'buy',
		price: 270000,
		area: 102,
		numRooms: 4,
		place: 'Barcelona',
		date: Date.now()
	},
	{
		id: 6,
		pictureUrl: require('./img/6.jpg'),
		title: 'Cosy flat all equiped',
		description: loremIpsum,
		type: 'appartment',
		actionType: 'rent',
		price: 1250,
		area: 92,
		numRooms: 3,
		place: 'Bruxelles',
		date: Date.now()
	},
	{
		id: 7,
		pictureUrl: require('./img/7.jpg'),
		title: 'Spacious appartment recently renovated',
		description: loremIpsum,
		type: 'appartment',
		actionType: 'rent',
		price: 1100,
		area: 85,
		numRooms: 2,
		place: 'Bruxelles',
		date: Date.now()
	},
	{
		id: 8,
		pictureUrl: require('./img/8.jpg'),
		title: 'Luminous flat perfect for a young family',
		description: loremIpsum,
		type: 'appartment',
		actionType: 'rent',
		price: 950,
		area: 65,
		numRooms: 2,
		place: 'Barcelona',
		date: Date.now()
	}
]