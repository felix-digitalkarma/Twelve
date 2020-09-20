import * as au from './actionTypes';

// login
export const add = (auth) => ({
  type: au.ADD,
  payload: auth,
});

// load user
export const get = () => ({
  type: au.GET,
});

export const userLoaded = (data) => ({
  type: au.USER_LOADED,
  payload: data,
});

export const registerSuccess = () => ({
  type: au.REGISTER_SUCCESS,
});
export const success = (data) => ({
  type: au.LOGIN_SUCCESS,
  payload: data,
});

export const logout = () => ({
  type: au.LOGOUT,
});
export const error = (err) => ({
  type: au.ERROR,
  payload: err,
});

export const clear = () => ({
  type: au.CLEAR,
});
