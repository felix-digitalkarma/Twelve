import { connect } from 'react-redux';
import NavBar from '../components/navigation/NavBar';

import modal from '../redux/modules/modal';
import auth from '../redux/modules/auth';

const mapStateToProps = state => {
  return {
    modal: state.modal,
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch(modal.actions.show()),
    hideModal: () => dispatch(modal.actions.hide()),
    getAuth: () => dispatch(auth.thunks.loadUser()),
    login: newAuth => dispatch(auth.thunks.login(newAuth)),
    logout: () => dispatch(auth.actions.clear()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
