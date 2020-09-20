import { connect } from 'react-redux';
import UserPage from '../components/UserPage';

import users from '..';

const mapStateToProps = state => {
	return {
		users: state.users,
		emptyForm: users.constants.EMPTY_FORM,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getUsers: () => dispatch(users.thunks.getUsers()),
		getProfile: id => dispatch(users.thunks.getProfile(id)),
		getInsurance: id => dispatch(users.thunks.getInsurance(id)),
		getAddress: id => dispatch(users.thunks.getAddress(id)),
		getOrders: id => dispatch(users.thunks.getOrders(id)),
		updateProfile: form => dispatch(users.thunks.updateProfile(form)),
		createProfile: form => dispatch(users.thunks.createProfle(form)),
		formProfile: form => dispatch(users.actions.formProfile(form)),
		formUser: form => dispatch(users.actions.formUser(form)),
		formAddress: form => dispatch(users.actions.formAddress(form)),
		clear: () => dispatch(users.actions.clear()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
