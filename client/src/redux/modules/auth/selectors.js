import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
import { filterActive, filterDeleted } from './model';

export const getAll = state => state[NAME];
export const getDeleted = () => _.filter(getAll, filterDeleted);
export const getActive = () => _.filter(getAll, filterActive);
export const getAuthount = createSelector([getAll, getDeleted, getActive], (allAuth, deletedAuth, activeAuth) => ({
	all: allAuth.length,
	completed: deletedAuth.length,
	active: activeAuth.length,
}));
