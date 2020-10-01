export const initialState = {
  stories: []
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SUCCESS':
      return {
        ...state,
        stories: action.payload,
      }

    default:
      return state;
  }
}

export default storyReducer;