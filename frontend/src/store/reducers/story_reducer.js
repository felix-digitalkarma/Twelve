import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  stories: []
}

export const StoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_STORY:
      return {
        ...state,
        stories: [...state.stories, action.payload],
      }

    default:
      throw new Error();
  }
}