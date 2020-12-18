const initialState = {
  products: [
    {
      _id: 1,
      title: 'Pineapple Juice',
      description: 'Pineapple juice is manufactured from ripe pineapples',
      price: 45,
      image: '/images/toa-heftiba.jpg',
    },
    {
      _id: 2,
      title: 'School Bag',
      description:
        'A schoolbag is a bag that children use to carry books and other things to and from school. ',
      price: 499,
      image: '/images/jakob-owens.jpg',
    },
    {
      _id: 3,
      title: 'Pineapple Fresh Juice',
      description: 'Pineapple juice is manufactured from ripe pineapples',
      price: 45,
      image: '/images/j-luis-esquivel.jpg',
    },
    {
      _id: 4,
      title: 'Shoes For Men',
      description: 'A pair of PUMA sport-lifestyle shoes',
      price: 1999,
      image: '/images/ian-bevis.jpg',
    },
    {
      _id: 5,
      title: 'Maui Moisture',
      description:
        'Maui Moisture starts with a unique blend with Aloe Vera Juice and is infused with pure Coconut Water.',
      price: 399,
      image: '/images/gabrielle-henderson.jpg',
    },
  ],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case '':
      break;

    default:
      return state;
  }
};
