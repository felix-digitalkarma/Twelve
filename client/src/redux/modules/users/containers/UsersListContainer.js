import { connect } from 'react-redux';
import UsersList from '../components/UsersList';

// import module
import users from '..';

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(users.thunks.getUsers()),
  };
};

// this is how we connect state to the component
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

//  example using createStructuredSelector([func],(newFunc) => ... )
