import { createStore, createSubscriber, createContainer, createHook } from 'react-sweet-state';

import api from '../utils/api';

const initialState = {
  isAuthenticated: false,
  data: null,
  token: "",
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
  },
  login: (creds) => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true });
    try {
      const res = await api.post('/auth', creds);
      setState({
        data: res.data,
        isAuthenticated: true,
        token: res.data.token,
        loading: false
      })
    } catch (error) {
      setState({ error, loading: false })
    }
  },
  logout: () => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true })
    try {
      setState({ data: null, isAuthenticated: false, token: null })
    } catch (error) {
      setState({ error, loading: false })
    }
  }
};

export const AuthStore = createStore({ initialState, actions });
export const useAuthStore = createHook(AuthStore);
export const AuthSubscriber = createSubscriber(AuthStore);
export const AuthContainer = createContainer(AuthStore);

