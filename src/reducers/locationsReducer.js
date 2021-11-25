import { SAVE_LOCATIONS_LIST } from "../actions/locationActions";

const initialState = (state) => {
	return ({
		...state,
		locationsList: [],
	})
}

const locationsReducer = (state, action) => {
	// if state.locationsList is there,
	// then don't do anything. 
	// if state.locationsList is not there, 
	// set state ...state with locationsList: blank array 
	
	if (!state.locationsList) {
		state = {...state, locationsList: []};
		console.log("locationsReducer: state ", state);
	}

	switch (action.type) {
		// case 
		default:
			return state;
	}
}

export default locationsReducer;
