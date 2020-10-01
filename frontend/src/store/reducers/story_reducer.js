import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  stories: []
}

export const StoryReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {

    case ACTION_TYPES.SUCCESS:
    case ACTION_TYPES.ADD_STORY:
      return {
        ...state,
        stories: [...state.stories, action.payload],
      }

    default:
      return state;
  }
}

export default StoryReducer;