import { createStore, createHook } from "react-sweet-state";
import api from "../utils/api";

// define initialState
export const initialState = {
  data: null,
  loading: false,
  error: null,
};

// define actions that mutate state
export const actions = {
  fetch:
    () =>
    async ({ setState, getState }) => {
      if (getState().loading) return;
      setState({ loading: true });
      try {
        const stories = await api.get("/stories");
        setState({ data: stories.data, loading: false });
      } catch (error) {
        setState({ error, loading: false });
      }
    },
  addStory:
    (story) =>
    async ({ setState, getState }) => {
      if (getState().loading) return;
      try {
        const res = await api.post("/stories", story);
        setState({ data: res.data, loading: false });
      } catch (error) {
        setState({ error, loading: false });
      }
    },
  removeStory:
    (id) =>
    async ({ setState, getState }) => {
      if (getState().loading) return;
      try {
        const res = await api.delete(`/stories/${id}`);
        console.log(res);
        setState({ data: res.data, loading: false });
      } catch (error) {
        setState({ error, loading: false });
      }
    },
};

// create Store with initial state,
// actions, with optional name for debug
export const Store = createStore({
  initialState,
  actions,
  name: "stories",
});

export const useStories = createHook(Store);
