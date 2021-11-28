import React, { useEffect } from "react";
import { connect } from "react-redux";
// Action Creators
import { saveLocationsList } from "../../actions/locationsActions";
// Components
import ShowLocationsList from "../Locations/ShowLocationsList";
// data
import data from "../../data";

const ShowAllLocations = (props) => {

	useEffect(() => {
		props.saveLocationsList(data.locationslist)
	}, []);

	return (
		<div>
			<h2>Locations</h2>
			<ShowLocationsList list={props.list} />
			{/* {console.log("inside ShowAllL: ", props)}
			{console.log("inside ShowAllL: ", props.list)} */}
		</div>
	)
};

const mapStateToProps = (state) => {
	// console.log("state inside mSTP: ", state);

	return ({
		list: state.locations.list,
	});
};

const mapActionsToProps = {
	saveLocationsList,
}

export default connect(mapStateToProps, mapActionsToProps)(ShowAllLocations);
