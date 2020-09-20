import * as m from './actionTypes';

export const show = () => ({
	type: m.SHOW,
	payload: true,
});

export const hide = () => ({
	type: m.HIDE,
	payload: false,
});
