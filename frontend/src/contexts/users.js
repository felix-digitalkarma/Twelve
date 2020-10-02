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
      const auth = await api.get('/users');
      setState({ data: auth.data, loading: false })
    } catch (error) {
      setState({ error, loading: false })
    }
  },
  create: (user) => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true });
    try {
      const res = await api.post('/users', user);
      setState({ data: res.data, loading: false })
    } catch (error) {
      setState({ error, loading: false })
    }
  },
};

export const UserStore = createStore({ initialState, actions });

export const useUserStore = createHook(UserStore);
export const AuthSubscriber = createSubscriber(UserStore);
export const AuthContainer = createContainer(UserStore);

