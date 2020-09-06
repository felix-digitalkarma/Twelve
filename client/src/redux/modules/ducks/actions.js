import * as d from './actionTypes';

/* usage elsewhere
 * import * as d from './modules/ducks'
 * d.actions.add(duck);
 * methods that defines the action type and payload
 *
 */

export const add = duck => ({
  type: d.ADD,
  payload: duck,
});

export const update = duck => ({
  type: d.UPDATE,
  payload: duck,
});

export const all = ducks => ({
  type: d.ALL,
  payload: ducks,
});

export const get = duck => ({
  type: d.GET,
  payload: duck,
});

export const remove = duck => ({
  type: d.REMOVE,
  payload: duck,
});

export const loading = bool => ({
  type: d.LOADING,
  payload: bool,
});

export const error = err => ({
  type: d.ERROR,
  payload: err,
});
