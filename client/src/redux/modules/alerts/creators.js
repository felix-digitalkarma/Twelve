import { v4 as uuidv4 } from 'uuid';
import * as a from './actionTypes';

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
	const id = uuidv4();
	dispatch({
		type: a.SET,
		payload: { msg, alertType, id },
	});

	setTimeout(() => dispatch({ type: a.REMOVE, payload: id }), timeout);
};
