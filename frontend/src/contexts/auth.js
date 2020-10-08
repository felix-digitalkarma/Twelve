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
  data: null,
  token: "",
  loading: false,
  error: null,
};

const actions = {
  get: () => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true });
    try {
      /*  */
      const auth = await api.get("/auth");
      console.log(auth);
      setState({ data: auth.data, token: auth.data, loading: false });
    } catch (error) {
      setState({ error, loading: false });
    }
  },
  login: (creds) => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true });
    try {
      const res = await api.post("/auth", creds);
      setState({
        data: res.data,
        isAuthenticated: true,
        token: res.data.token,
        loading: false,
      });
      setAuthToken({ token: res.data.token });
    } catch (error) {
      setState({ error, loading: false });
    }
  },
  logout: () => async ({ setState, getState }) => {
    if (getState().loading) return;
    setState({ loading: true });
    try {
      setState({ data: null, isAuthenticated: false, token: null });
    } catch (error) {
      setState({ error, loading: false });
    }
  },
};

export const AuthStore = createStore({ initialState, actions });

export const useAuthStore = createHook(AuthStore);
export const AuthSubscriber = createSubscriber(AuthStore);
export const AuthContainer = createContainer(AuthStore);
