import { combineReducers } from 'redux';

import ducks from './modules/ducks';

export default combineReducers({
  [ducks.constants.NAME]: ducks.reducer
})
