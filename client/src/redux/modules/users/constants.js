// users/constants.js
// used later in root reducer and selectors
export const NAME = 'users';

export const EMPTY_FORM = {
  user: {
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    position: '',
    role: 3,
    vip: false,
    is_deleted: false,
  },
  address: {
    phone: '',
    fax: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  company: '',
  position: '',
  avatar: '',
};

// TODO: delete once orders endpoint populates
export const dummyOrder = (id) => ({
  _id: `${id}`,
  code: `Dummy Order ${id}`,
  created: '09/4/2020',
  drop_off: '09/06/2020',
  items: [
    {
      _id: 1,
      count: 2,
      name: 'big light',
      rate: '400',
      replacement: '200',
      slug: 'big light',
      total: '800',
    },
    {
      _id: 2,
      count: 3,
      name: 'small light',
      rate: '300',
      replacement: '200',
      slug: 'small light',
      total: '900',
    },
    {
      _id: 3,
      count: 5,
      name: 'c-stand',
      rate: '100',
      replacement: '200',
      slug: 'c-stand',
      total: '500',
    },
  ],
  paid: false,
  pick_up: '09/05/2020',
  promo: 'promo-id-125',
  replacement: 0,
  status: 'drop_off',
  total: 2200,
});
