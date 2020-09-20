import * as au from './actionTypes';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loading: false,
	user: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case au.USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case au.LOGIN_SUCCESS:
		case au.USER_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				token: payload.token,
				isAuthenticated: true,
				loading: false,
			};

		case au.CLEAR:
		case au.LOGIN_ERROR:
		case au.AUTH_ERROR:
		case au.USER_ERROR:
		case au.REGISTER_ERROR:
		case au.LOGOUT:
		case au.ACCOUNT_DELETED:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};

		default:
			return state;
	}
}
