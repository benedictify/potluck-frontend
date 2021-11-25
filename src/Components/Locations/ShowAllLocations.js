import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveLocationsList } from "../../actions/locationsActions";
import axios from '../../utils/axios'

const ShowAllLocations = (props) => {
	useEffect(() => {
		saveLocationsList(axios.locationsList) // dispatch action to save "axios".locationsList to store
	}, []);

	return (
		<div>
			<h2>ShowAllLocations Component</h2>
			<h3>{props.list}</h3>
		</div>
	)
}

const mapStateToProps = (state) => {
	return ({
		list: state.locations.list
	});
}

export default connect(mapStateToProps)(ShowAllLocations);
