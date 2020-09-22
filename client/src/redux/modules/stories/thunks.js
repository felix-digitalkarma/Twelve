import * as actions from './actions';
import api from '../../utils/api';
import alerts from '../alerts';

export const addStory = story => async dispatch => {
  try {
    const success = await api.post('/stories', story);
    dispatch(actions.add(success.data));
    dispatch(alerts.creators.setAlert('Story Added', 'success'));
  } catch (err) {
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const updateStory = updatedStory => async dispatch => {
  try {
    const success = await api.put(`/stories/${updatedStory._id}`, updatedStory);
    dispatch(actions.update(success.data));
    dispatch(alerts.creators.setAlert('Story Updated', 'success'));
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

export const getStories = () => async dispatch => {
  try {
    const res = await api.get('/stories');
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

export const getStoryById = id => async dispatch => {
  try {
    const res = await api.get(`/stories/${id}`);
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

export const deleteStory = id => async dispatch => {
  try {
    await api.delete(`/stories/${id}`);
    dispatch(actions.remove(id));
    dispatch(alerts.creators.setAlert('Story deleted!', 'success'));
  } catch (err) {
    dispatch(
      actions.error({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
