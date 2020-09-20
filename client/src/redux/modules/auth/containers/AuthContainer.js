import { connect } from 'react-redux';
import AuthComponent from '../components/AuthComponent';
import alerts from '../';
import auth from '../';

const mapStateToProps = state => {
	return {
		alerts: state.alerts.alertList,
		auth: state.auth.authList,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setAlert: newAlert => dispatch(alerts.creators.createAlert(newAlert)),
		removeAlert: id => dispatch(alerts.actions.remove(id)),
		login: newAuth => dispatch(auth.thunks.addAuth(newAuth)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
