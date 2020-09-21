import { combineReducers } from 'redux';
// import surveys from modules
import alerts from './modules/alerts';
import auth from './modules/auth';
import modal from './modules/modal';

export default combineReducers({
  [alerts.constants.NAME]: alerts.reducer,
  [auth.constants.NAME]: auth.reducer,
  [modal.constants.NAME]: modal.reducer,
})
