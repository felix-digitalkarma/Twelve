import { connect } from 'react-redux';
import AlertsComponent from '../components/AlertsComponent';
import alerts from '../';

const mapStateToProps = state => {
	return {
		alerts: state.alerts.alertList,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setAlert: newAlert => dispatch(alerts.creators.createAlert(newAlert)),
		removeAlert: id => dispatch(alerts.actions.remove(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertsComponent);
