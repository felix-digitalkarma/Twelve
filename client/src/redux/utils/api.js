import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.common['x-auth-token'] = token;
  return config;
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err);
    if (err.response.data.msg === 'Token is not valid') {
      // store.dispatch({ type: LOGOUT });
      // store.dispatch({ type: CLEAR_PROFILE });
      console.log(err.response.data.msg);
    }
    return Promise.reject(err);
  },
);

export default api;
