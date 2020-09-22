import { combineReducers } from 'redux';


import alerts from './modules/alerts';
import auth from './modules/auth';
import modal from './modules/modal';
import stories from './modules/stories';

export default combineReducers({
  [alerts.constants.NAME]: alerts.reducer,
  [auth.constants.NAME]: auth.reducer,
  [modal.constants.NAME]: modal.reducer,
  [stories.constants.NAME]: stories.reducer
})
