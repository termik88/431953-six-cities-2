const places = [
  {
    city: {
      name: `Dusseldorf`,
      location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`
    ],
    title: `Canal View Prinsengracht`,
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 101,
    goods: [`Breakfast`, `Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    location: {latitude: 51.248402000000006, longitude: 6.763314, zoom: 16},
    id: 1
  },
  {
    city: {
      name: `Amsterdam`,
      location: {latitude: 52.37454, longitude: 4.897976, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`
    ],
    title: `House in countryside`,
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 163,
    goods: [
      `Fridge`,
      `Baby seat`,
      `Laptop friendly workspace`,
      `Breakfast`,
      `Dishwasher`,
      `Towels`,
      `Washer`,
      `Air conditioning`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    location: {latitude: 52.389540000000004, longitude: 4.883976, zoom: 16},
    id: 2
  },
  {
    city: {
      name: `Cologne`,
      location: {latitude: 50.938361, longitude: 6.959974, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`
    ],
    title: `Beautiful & luxurious apartment at great location`,
    isFavorite: false,
    isPremium: false,
    rating: 2.1,
    type: `apartment`,
    bedrooms: 1,
    maxAdults: 5,
    price: 254,
    goods: [`Breakfast`, `Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    location: {latitude: 50.930361, longitude: 6.937974, zoom: 16},
    id: 3
  },
  {
    city: {
      name: `Paris`,
      location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`
    ],
    title: `The Joshua Tree House`,
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 284,
    goods: [`Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
    location: {latitude: 48.858610000000006, longitude: 2.330499, zoom: 16},
    id: 4
  },
  {
    city: {
      name: `Amsterdam`,
      location: {latitude: 52.37454, longitude: 4.897976, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`
    ],
    title: `Beautiful & luxurious apartment at great location`,
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    type: `hotel`,
    bedrooms: 3,
    maxAdults: 7,
    price: 463,
    goods: [`Laptop friendly workspace`, `Breakfast`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
    location: {latitude: 52.36354, longitude: 4.889976, zoom: 16},
    id: 5
  },
  {
    city: {
      name: `Brussels`,
      location: {latitude: 50.846557, longitude: 4.351697, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`
    ],
    title: `Tile House`,
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 241,
    goods: [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`,
      `Towels`,
      `Dishwasher`,
      `Fridge`,
      `Baby seat`,
      `Air conditioning`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    location: {latitude: 50.867557, longitude: 4.357697, zoom: 16},
    id: 6
  },
  {
    city: {
      name: `Hamburg`,
      location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`
    ],
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: `apartment`,
    bedrooms: 5,
    maxAdults: 7,
    price: 194,
    goods: [
      `Washer`,
      `Air conditioning`,
      `Breakfast`,
      `Laptop friendly workspace`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {latitude: 53.550341, longitude: 9.980654000000001, zoom: 16},
    id: 7
  },
  {
    city: {
      name: `Hamburg`,
      location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`
    ],
    title: `Loft Studio in the Central Area`,
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 215,
    goods: [
      `Washer`,
      `Laptop friendly workspace`,
      `Baby seat`,
      `Breakfast`,
      `Towels`,
      `Air conditioning`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {
      latitude: 53.574341000000004,
      longitude: 10.022654000000001,
      zoom: 16
    },
    id: 8
  },
  {
    city: {
      name: `Hamburg`,
      location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`
    ],
    title: `The Joshua Tree House`,
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: `house`,
    bedrooms: 2,
    maxAdults: 6,
    price: 519,
    goods: [
      `Towels`,
      `Washer`,
      `Fridge`,
      `Breakfast`,
      `Laptop friendly workspace`,
      `Air conditioning`,
      `Coffee machine`,
      `Dishwasher`,
      `Baby seat`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    location: {
      latitude: 53.558341000000006,
      longitude: 9.999654000000001,
      zoom: 16
    },
    id: 9
  },
  {
    city: {
      name: `Hamburg`,
      location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
    images: [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`
    ],
    title: `Beautiful & luxurious apartment at great location`,
    isFavorite: false,
    isPremium: false,
    rating: 2,
    type: `room`,
    bedrooms: 1,
    maxAdults: 3,
    price: 273,
    goods: [
      `Air conditioning`,
      `Washing machine`,
      `Towels`,
      `Dishwasher`,
      `Washer`,
      `Fridge`,
      `Breakfast`,
      `Baby seat`,
      `Coffee machine`,
      `Laptop friendly workspace`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    },
    id: 10
  }];

export default places;
