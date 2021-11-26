export const SAVE_LOCATIONS_LIST = "SAVE_LOCATIONS_LIST";

export const saveLocationsList = (list) => {
	// creates action with data, sends to reducer -> locationsReducer.js
	return {type: SAVE_LOCATIONS_LIST, payload: list}
}
