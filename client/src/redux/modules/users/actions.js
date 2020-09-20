import * as u from './actionTypes';
/* usage elsewhere
 * import * as ins from './modules/insurance'
 * ins.actions.add('value');
 * methods that defines the action type and payload
 */

export const get = list => ({
	type: u.GET,
	payload: list,
});

export const update = user => ({
	type: u.UPDATE,
	payload: user,
});

export const loading = bool => ({
	type: u.LOADING,
	payload: bool,
});

export const error = err => ({
	type: u.ERROR,
	payload: err,
});

export const clear = () => ({
	type: u.CLEAR,
});

export const formUser = form => ({
	type: u.FORM_USER,
	payload: form,
});
export const formProfile = form => ({
	type: u.FORM_PROFILE,
	payload: form,
});
export const formAddress = form => ({
	type: u.FORM_ADDRESS,
	payload: form,
});

export const setProfile = profile => ({
	type: u.SET_PROFILE,
	payload: profile,
});

export const setInsurance = insurance => ({
	type: u.SET_INSURANCE,
	payload: insurance,
});

export const setAddress = address => ({
	type: u.SET_ADDRESS,
	payload: address,
});

export const setOrders = order => ({
	type: u.SET_ORDERS,
	payload: order,
});
