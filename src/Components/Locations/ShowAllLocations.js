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
			<Link to="/"><button className="buttonlink">Home</button></Link>
		</div>
	)
};

const mapStateToProps = (state) => {
	return ({
		list: state.locations.list,
	});
};

const mapActionsToProps = {
	saveLocationsList,
}

export default connect(mapStateToProps, mapActionsToProps)(ShowAllLocations);
