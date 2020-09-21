import * as actions from './actions';
import api from '../../utils/api';

import alerts from '../alerts';
import modal from '../modal';

import setAuthToken from '../../utils/setAuthToken';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await api.get('/auth');
    const { firstName, lastInitial } = res.data;
    dispatch(alerts.creators.setAlert(`Welcome ${firstName} ${lastInitial}!`, 'success'))
    dispatch(actions.userLoaded(res.data));
  } catch (err) {
    if (err && err.response) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(alerts.creators.setAlert(error.msg, 'danger')));
      }
    }
  }
};

export const login = formData => async dispatch => {
  const { email, password } = formData;
  const body = { email, password };

  try {
    const res = await api.post('/auth', body);
    dispatch(actions.success(res.data));
    dispatch(loadUser());
  } catch (err) {
    if (err && err.response) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(alerts.creators.setAlert(error.msg, 'danger')));
      }
    }
  }
};

export const createUser = ({ firstName, lastInitial, email, phone, password }) => async dispatch => {
  try {
    const newUser = JSON.stringify({
      firstName,
      lastInitial,
      email,
      phone,
      password,
    });
    const user = await api.post('/users', newUser);
    await dispatch(actions.success(user.data));
    await dispatch(loadUser());
  } catch (err) {
    if (err && err.response) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(alerts.creators.setAlert(error.msg, 'danger')));
      }
    }
  }
};

// Register User
export const register = ({
  firstName,
  lastInitial,
  phone,
  email,
  password,
}) => async dispatch => {
  try {
    await dispatch(createUser({ firstName, lastInitial, email, phone, password }));
    await dispatch(actions.registerSuccess());
  } catch (err) {
    if (err && err.response) {
      console.log(err);
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(alerts.creators.setAlert(error.msg, 'danger')));
      }
    }
  }
};

export const logout = () => dispatch => {
  dispatch(actions.clear());
  dispatch(actions.logout());
};
