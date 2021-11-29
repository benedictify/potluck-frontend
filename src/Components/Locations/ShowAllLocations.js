import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// Action Creators
import { saveLocationsList } from "../../actions/locationsActions";
// Components
import ShowLocationsList from "../Locations/ShowLocationsList";
// data
import data from "../../data";
// style
import "../../App.css"

const ShowAllLocations = (props) => {
	useEffect(() => {
		props.saveLocationsList(data.locationslist)
	}, []);

	return (
		<div>
			<h2>Locations</h2>
			<ShowLocationsList list={props.list} />
			<Link to="/"><button style={buttonlink}>Home</button></Link>
		</div>
	)
};

const mapState = (state) => {
	return ({
		list: state.locations.list,
	});
};

const mapActions = {
	saveLocationsList,
}

export default connect(mapState, mapActions)(ShowAllLocations);

const buttonlink = {
	marginTop: "3rem",
}
