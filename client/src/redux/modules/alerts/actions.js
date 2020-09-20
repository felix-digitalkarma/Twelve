import * as a from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const set = alert => {
	const id = uuidv4();
	const { msg, alertType } = alert;
	return {
		type: a.SET,
		payload: { msg, alertType, _id: id },
	};
};

export const remove = id => ({
	type: a.REMOVE,
	payload: id,
});
