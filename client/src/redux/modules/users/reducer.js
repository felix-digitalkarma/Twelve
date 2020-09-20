import * as u from './actionTypes';
import { EMPTY_FORM, dummyOrder } from './constants';

const initialState = {
  usersList: [],
  loading: true,
  error: false,
  form: EMPTY_FORM,
  profile: {},
  insurance: [],
  orders: [dummyOrder(1), dummyOrder(2), dummyOrder(3)],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case u.GET:
      return {
        ...state,
        loading: false,
        usersList: payload,
      };
    case u.UPDATE:
      return {
        ...state,
        usersList: state.usersList.map((user) =>
          user._id === payload._id ? payload : user
        ),
      };
    case u.CLEAR:
      return {
        ...state,
        form: { ...EMPTY_FORM },
      };
    case u.ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case u.LOADING:
      return {
        ...state,
        loading: payload,
      };
    case u.FORM_PROFILE:
      return {
        ...state,
        form: {
          ...state.form,
          ...payload,
        },
      };
    case u.FORM_USER:
      return {
        ...state,
        form: {
          ...state.form,
          user: {
            ...state.form.user,
            ...payload,
          },
        },
      };
    case u.FORM_ADDRESS:
      return {
        ...state,
        form: {
          ...state.form,
          address: {
            ...state.form.address,
            ...payload,
          },
        },
      };
    case u.SET_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...payload,
        },
      };
    case u.SET_INSURANCE:
      return {
        ...state,
        insurance: payload,
      };
    case u.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    default:
      return state;
  }
};
