// auths/model.js

/* Everything related to
 *  Module's State
 */

export const auth = {
	email: String,
	password: String,
	is_deleted: Boolean,
};

// resource endpoint - plural
export const auths = [];

// filters..ie.
export const filterDeleted = auths => auths.filter(i => i.is_deleted);
export const filterActive = auths => auths.filter(i => !i.is_deleted);
