import * as ACTION_TYPES from './action_types'

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
  type: ACTION_TYPES.FAILURE
}

export const LOGIN_SUCCESS = {
  type: ACTION_TYPES.LOGIN_SUCCESS
}

export const LOGIN_FAILURE = {
  type: ACTION_TYPES.LOGIN_FAILURE
}


export const ADD_STORY = {
  type: ACTION_TYPES.ADD_STORY
}

export const REMOVE_STORY = {
  type: ACTION_TYPES.REMOVE_STORY
}

export const ALL_STORIES = stories => ({
  type: ACTION_TYPES.ALL_STORIES,
  payload: stories,
});