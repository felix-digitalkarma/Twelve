import { connect } from 'react-redux';
import CreatePage from '../components/CreatePage';
// import module
import users from '..';
import alerts from '../../alerts';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    emptyForm: users.constants.EMPTY_FORM,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(users.thunks.getUsers()),
    getProfile: (id) => dispatch(users.thunks.getProfile(id)),
    getInsurance: (id) => dispatch(users.thunks.getInsurance(id)),
    getOrders: (id) => dispatch(users.thunks.getOrders(id)),
    updateProfile: (form) => dispatch(users.thunks.updateProfile(form)),
    createProfile: (form) => dispatch(users.thunks.createProfle(form)),
    formProfile: (form) => dispatch(users.actions.formProfile(form)),
    formUser: (form) => dispatch(users.actions.formUser(form)),
    formAddress: (form) => dispatch(users.actions.formAddress(form)),
    clear: () => dispatch(users.actions.clear()),
    setAlert: (msg, type) => dispatch(alerts.creators.setAlert(msg, type)),
  };
};

// this is how we connect state to the component
export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);

//  example using createStructuredSelector([func],(newFunc) => ... )
