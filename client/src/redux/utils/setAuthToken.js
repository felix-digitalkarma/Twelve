import axios from 'axios';

const setAuthToken = (token) => {
  axios.defaults.headers.common['x-auth-token'] = '';
  delete axios.defaults.headers.common['x-auth-token'];

  if (token) {
    axios.defaults.headers.common['x-auth-token'] = `${token}`;
  }
};

export default setAuthToken;
