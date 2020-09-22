import * as s from './actionTypes';

/* usage elsewhere
 * import * as d from './modules/stories'
 * s.actions.add(story);
 * methods that defines the action type and payload
 *
 */

export const add = story => ({
  type: s.ADD,
  payload: story,
});

export const update = story => ({
  type: s.UPDATE,
  payload: story,
});

export const all = stories => ({
  type: s.ALL,
  payload: stories,
});

export const get = story => ({
  type: s.GET,
  payload: story,
});

export const remove = story => ({
  type: s.REMOVE,
  payload: story,
});

export const loading = bool => ({
  type: s.LOADING,
  payload: bool,
});

export const error = err => ({
  type: s.ERROR,
  payload: err,
});
