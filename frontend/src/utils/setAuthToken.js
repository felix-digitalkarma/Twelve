import axios from "axios";

/**
 *
 * @param {setAuthToken} token
 *  import setAuthToken from ...
 *  setAuthToken(localStorage.token);
 */
const setAuthToken = (token) => {
  axios.defaults.headers.common["x-auth-token"] = "";
  delete axios.defaults.headers.common["x-auth-token"];

  if (token) {
    axios.defaults.headers.common["x-auth-token"] = `${token}`;
  }
};

export default setAuthToken;
