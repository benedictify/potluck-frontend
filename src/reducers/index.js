import { combineReducers } from "redux";
import locations from "./locationsReducer";

const combinedReducer = combineReducers({
	locations,
})

export default combinedReducer;
