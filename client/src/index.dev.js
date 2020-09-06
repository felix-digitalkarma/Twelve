import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root.dev';
import configureStore from './redux/store/configureStore';
import './style/main.scss';

const store = configureStore();
const rootEl = document.getElementById('app');

const render = (Component) =>
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Component />
        </AppContainer>
      </Router>
    </Provider>,
    rootEl,
  );

render(Root);
if (module.hot) module.hot.accept('./Root.dev', () => render(Root));
