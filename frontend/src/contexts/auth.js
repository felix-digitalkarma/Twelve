import {
  createStore,
  createSubscriber,
  createContainer,
  createHook,
} from "react-sweet-state";

import api from "../utils/api";
import setAuthToken from "../utils/setAuthToken";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: "",
  loading: false,
  error: null,
};

const actions = {
  loadUser:
    () =>
    async ({ setState, getState }) => {
      if (getState().loading) return;
      setState({ loading: true });
      try {
        const localToken = localStorage.getItem("token");
        if (localToken) {
          setAuthToken(localToken);
        }
        const auth = await api.get("/auth");
        setState({
          user: auth.data,
          isAuthenticated: true,
          loading: false,
        });
      } catch (error) {
        setState({ error, loading: false });
      }
    },
  login:
    (creds) =>
    async ({ setState, getState }) => {
      if (getState().loading) return;
      setState({ loading: true });
      try {
        const res = await api.post("/auth", creds);
        setState({
          isAuthenticated: true,
          token: res.data.token,
          loading: false,
        });
        setAuthToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        setState({ error, loading: false });
      }
    },
  logout:
    () =>
    async ({ setState, getState }) => {
      if (getState().loading) return;
      setState({ loading: true });
      try {
        setState({ data: null, isAuthenticated: false, token: null });
        localStorage.clear();
      } catch (error) {
        setState({ error, loading: false });
      }
    },
  register:
    (user) =>
    async ({ setState, getState }) => {
      if (getState().loading) return;
      setState({ loading: true });
      try {
        const res = await api.post("/users", user);

        setState({
          data: res.data,
          token: res.data.token,
          isAuthenticated: true,
          loading: false,
        });
      } catch (error) {
        setState({ error, loading: false });
      }
    },
};

export const AuthStore = createStore({ initialState, actions });

export const useAuthStore = createHook(AuthStore);
export const AuthSubscriber = createSubscriber(AuthStore);
export const AuthContainer = createContainer(AuthStore);
