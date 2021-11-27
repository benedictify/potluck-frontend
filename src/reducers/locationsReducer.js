import { SAVE_LOCATIONS_LIST } from "../actions/locationsActions";

const initialState = {
	list: []
}

const locationsReducer = (state = [], action) => {
	switch (action.type) {
		case SAVE_LOCATIONS_LIST:
			
			return ({
				...state,
				list: action.payload,
			})
		default:
			return state;
	}
}

export default locationsReducer;
