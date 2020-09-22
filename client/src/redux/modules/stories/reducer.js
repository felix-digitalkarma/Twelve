import * as s from './actionTypes';

const initialState = {
  storyList: [],
  story: {},
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case s.GET:
      return {
        ...state,
        story: payload,
        loading: false,
        error: false
      };
    case s.ALL:
      return {
        ...state,
        storyList: payload,
        loading: false,
        error: false,
      };
    case s.ADD:
      return {
        ...state,
        storyList: [...state.storyList, payload],
      };
    case s.UPDATE:
      return {
        ...state,
        storyList: state.storyList.map(story => {
          return story._id === payloas._id ? payload : story;
        }),
      };
    case s.REMOVE:
      return {
        ...state,
        storyList: state.storyList.map(story => {
          if (story.id === payloas.id) {
            return {
              ...story,
              isdeleted: true,
            };
          } else {
            return story;
          }
        }),
      };

    default:
      return state;
  }
};
