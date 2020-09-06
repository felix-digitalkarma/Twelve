import * as d from './actionTypes';

const initialState = {
  duckList: [],
  duck: {},
  loading: true,
  error: false,
  editDuck: null,
  input: '',
  showEditor: false,
  showCreator: false,
  selectOption: 'Choose...',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case d.GET:
      return {
        ...state,
        duck: payload,
        loading: false,
        error: false
      };

    case d.ALL:

      return {
        ...state,
        duckList: payload,
        loading: false,
        error: false,
      };

    case d.ADD:
      return {
        ...state,
        duckList: [...state.duckList, payload],
      };
    case d.UPDATE:
      return {
        ...state,
        duckList: state.duckList.map(loc => {
          return loc._id === payload._id ? payload : loc;
        }),
      };
    case d.REMOVE:
      return {
        ...state,
        duckList: state.duckList.map(loc => {
          if (loc.id === payload.id) {
            return {
              ...loc,
              isdeleted: true,
            };
          } else {
            return loc;
          }
        }),
      };

    default:
      return state;
  }
};
