export const alert = {
	msg: String,
	alertType: String,
	is_deleted: Boolean,
};

// resource endpoint - plural
export const alerts = [];

// filters..ie.
export const filterDeleted = alerts => alerts.filter(s => s.is_deleted);
export const filterActive = alerts => alerts.filter(s => !s.is_deleted);
