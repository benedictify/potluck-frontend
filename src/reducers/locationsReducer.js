import { SAVE_LOCATIONS_LIST } from "../actions/locationsActions";

const initialState = {
	list: []
}

const locationsReducer = (state = [], action) => {
	switch (action.type) {
		case SAVE_LOCATIONS_LIST:
			// locations list data is now in action.payload, 
			return ({
				...state,
				// this saves data in `list` key in store.locations (.list)
				list: action.payload,
			})
		default:
			return state;
	}
}

export default locationsReducer;
