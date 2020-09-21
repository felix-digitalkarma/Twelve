import { connect } from 'react-redux';

import RegisterComponent from '../components/auth/RegisterComponent';
import auth from '../redux/modules/auth';
import alerts from '../redux/modules/alerts';

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(auth.thunks.register(user)),
    setAlert: alert => dispatch(alerts.creators.setAlert(alert))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
