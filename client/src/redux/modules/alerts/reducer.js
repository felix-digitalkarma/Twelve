import * as a from './actionTypes';

const initialState = {
	alertList: [],
	loading: true,
	error: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case a.SET:
			return {
				...state,
				alertList: [...state.alertList, payload],
				loading: false,
				error: false,
			};
		case a.REMOVE:
			return {
				...state,
				alertList: state.alertList.filter(alert => alert.id !== payload),
			};

		default:
			return state;
	}
};
