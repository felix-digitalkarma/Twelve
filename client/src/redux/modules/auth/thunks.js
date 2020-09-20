import * as actions from './actions';
import api from '../../utils/api';

// import axios from 'axios';
import alerts from '../alerts';
import modal from '../modal';
import profiles from '../profiles';
import addresses from '../addresses';

// import address

import setAuthToken from '../../utils/setAuthToken';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await api.get('/auth');
    const { firstname } = res.data;
    dispatch(alerts.creators.setAlert(`Welcome ${firstname} !`, 'success'))
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

    await dispatch(profiles.thunks.getProfile());

    dispatch(modal.actions.hide(true));
  } catch (err) {
    if (err && err.response) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(alerts.creators.setAlert(error.msg, 'danger')));
      }
    }
  }
};

export const createUser = ({ firstname, lastname, email, password }) => async dispatch => {
  try {
    const newUser = JSON.stringify({
      firstname,
      lastname,
      email,
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
  firstname,
  lastname,
  phone,
  fax,
  avatar,
  email,
  street,
  city,
  state,
  zip,
  company,
  position,
  password,
}) => async dispatch => {
  try {
    await dispatch(createUser({ firstname, lastname, email, password }));
    await dispatch(addresses.thunks.createAddress({ street, city, state, zip, phone, fax }));
    await dispatch(profiles.thunks.createProfile({ company, position, avatar }));
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
