import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
import { filterActive, filterDeleted } from './model';

export const getAll = state => state[NAME];
export const getDeleted = () => _.filter(getAll, filterDeleted);
export const getActive = () => _.filter(getAll, filterActive);
export const getAlerts = createSelector([getAll, getDeleted, getActive], (allAlerts, deletedAlerts, activeAlerts) => ({
	all: allAlerts.length,
	completed: deletedAlerts.length,
	active: activeAlerts.length,
}));
