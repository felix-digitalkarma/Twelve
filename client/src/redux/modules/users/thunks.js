//import axios from 'axios';
import api from '../../utils/api';
import * as actions from './actions';
import alerts from '../alerts';

export const getUsers = () => async dispatch => {
  try {
    // dispatch(alerts.creators.setAlert('Retrieving Users...Stand By.', 'warning'));
    const res = await api.get('/users');
    dispatch(actions.get(res.data));
    // dispatch(alerts.creators.setAlert('Users Retrieved.', 'success'));
  } catch (err) {
    dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const getProfile = id => async dispatch => {
  try {
    dispatch(alerts.creators.setAlert('Retrieving Profile...Stand By.', 'warning'));
    const res = await api.get(`/profiles/${id}`);
    dispatch(actions.setProfile(res.data));
    dispatch(actions.formProfile(res.data));
    dispatch(alerts.creators.setAlert('Profile Retrieved.', 'success'));
  } catch (err) {
    dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const updateProfile = form => async dispatch => {
  try {
    const success = await api.put(`/profiles/${form.user._id}`, form);
    dispatch(actions.update(success.data.user));
    dispatch(actions.setProfile(success.data));
    dispatch(alerts.creators.setAlert('Profile Updated', 'success'));
  } catch (err) {
    dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const createProfle = form => async dispatch => {
  try {
    const success = await api.post(`/profiles`, form);
    dispatch(actions.formProfile(success.data));
    dispatch(actions.setProfile(success.data));
    dispatch(alerts.creators.setAlert('Profile Created', 'success'));
  } catch (err) {
    dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const getInsurance = id => async dispatch => {
  try {
    dispatch(alerts.creators.setAlert('Retrieving Insurance...Stand By.', 'warning'));
    const res = await api.get(`/user/insurance/${id}`);
    dispatch(actions.setInsurance(res.data));
    dispatch(alerts.creators.setAlert('Insurance Retrieved.', 'success'));
  } catch (err) {
    dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const getAddress = id => async dispatch => {
  try {
    dispatch(alerts.creators.setAlert('Retrieving Address...', 'warning'));
    const res = await api.get(`/address/${id}`);
    dispatch(actions.setAddress(res.data));

    dispatch(actions.formAddress(res.data));
    dispatch(alerts.creators.setAlert('Address Retrieved.', 'success'));
  } catch (err) {
    dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const getOrders = user_id => async dispatch => {
  try {
    dispatch(alerts.creators.setAlert('Retrieving Orders...Stand By.', 'warning'));
    const res = await api.get(`/user/${user_id}/orders`);
    dispatch(actions.setOrders(res.data));
    dispatch(alerts.creators.setAlert('Order Retrieved.', 'success'));
  } catch (err) {
    dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
