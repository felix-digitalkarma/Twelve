import { createStore, createHook } from 'react-sweet-state';
import api from '../utils/api';

export const initialState = {
  data: null,
  loading: false,
  error: null
};

export const actions = {
  fetch: () => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true });
    try {
      const stories = await api.get('/stories');
      setState({ data: stories.data, loading: false })
    } catch (error) {
      setState({ error, loading: false })
    }
  }
};

export const Store = createStore({
  initialState,
  actions,
  name: 'stories'
});

export const useStories = createHook(Store);


