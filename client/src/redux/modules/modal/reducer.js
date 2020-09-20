import * as m from './actionTypes';

const initialState = {
	show: false,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case m.SHOW:
			return {
				...state,
				show: payload,
				loading: false,
				error: false,
			};

		case m.HIDE:
			return {
				...state,
				show: payload,
				loading: false,
				error: false,
			};
		default:
			return state;
	}
}
