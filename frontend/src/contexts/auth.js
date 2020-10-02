import { createStore, createSubscriber, createContainer, createHook } from 'react-sweet-state';

import api from '../utils/api';

const initialState = {
  isAuthenticated: false,
  data: null,
  loading: false,
  error: null
};

const actions = {
  fetch: () => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true });
    try {
      const auth = await api.get('/auth');
      setState({ data: auth.data, loading: false })
    } catch (error) {
      setState({ error, loading: false })
    }
  }
};

export const AuthStore = createStore({ initialState, actions });

export const useAuth = createHook(AuthStore);
export const AuthSubscriber = createSubscriber(AuthStore);
export const AuthContainer = createContainer(AuthStore);

