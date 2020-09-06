import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../rootReducer';

// initialize logger
//const loggerMiddleware = createLogger();
// TODO replace logger middleware back in array
const middleware = [thunkMiddleware];

// apply logger to redux
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const configureStore = (initialState) =>
  createStoreWithMiddleware(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configureStore;
