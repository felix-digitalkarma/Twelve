import * as actions from './actions';
import api from '../../utils/api';
// import alerts from '../alerts';

export const addDuck = duckling => async dispatch => {
  try {
    const success = await api.post('/ducks', duckling);
    dispatch(actions.add(success.data));
    // dispatch(alerts.creators.setAlert('Duck Added', 'success'));
  } catch (err) {
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const updateDuck = (updatedDuck, successMessage = 'Duck Updated') => async dispatch => {
  try {
    const success = await api.put(`/ducks/${updatedDuck._id}`, updatedDuck);
    dispatch(actions.update(success.data));
    // dispatch(alerts.creators.setAlert(successMessage, 'success'));
  } catch (err) {
    // dispatch(alerts.creators.setAlert(err.msg, 'danger'));
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const getDucks = () => async dispatch => {
  try {
    const res = await api.get('/ducks');
    dispatch(actions.all(res.data));
  } catch (err) {
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const getDuckById = id => async dispatch => {
  try {
    const res = await api.get(`/ducks/${id}`);
    dispatch(actions.get(res.data));
  } catch (err) {
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const deleteDuck = id => async dispatch => {
  try {
    await api.delete(`/ducks/${id}`);
    dispatch(actions.remove(id));
    // dispatch(alerts.creators.setAlert('Duck deleted!', 'success'));
  } catch (err) {
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
