import { connect } from 'react-redux';
import UsersList from '../components/UsersList';

import users from '../';

const mapStateToProps = state => {
	return {
		users: state.users,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		createUser: newUser => dispatch(users.thunks.createUser(newUser)),
		updateUser: (update, user) => dispatch(users.thunks.updateUser(update, user)),
		getUsers: () => dispatch(users.thunks.getUsers()),
		edit: id => dispatch(users.actions.edit(id)),
		add: user => dispatch(users.actions.add(user)),
		update: user => dispatch(users.actions.update(user)),
		remove: user => dispatch(users.actions.remove(user)),
		clear: () => dispatch(users.actions.clear()),
		setInput: text => dispatch(users.actions.setInput(text)),
		error: err => dispatch(users.actions.error(err)),
		creator: bool => dispatch(users.actions.creator(bool)),
		editor: bool => dispatch(users.actions.editor(bool)),
		select: str => dispatch(users.actions.select(str)),
	};
};

// this is how we connect state to the component
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

//  example using createStructuredSelector([func],(newFunc) => ... )
