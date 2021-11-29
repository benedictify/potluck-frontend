import React from "react";
import { connect } from 'react-redux';
import { Redirect, useParams } from "react-router-dom";
import data from "../../data"

const findLocation = (id, list) => {
	return list.find(loc => loc.id == id);
};

const ShowOneLocation = (props) => {
	const { id } = useParams()
	// const { list } = props;
	const location = findLocation(id, props.list);

	if (!location) {
		return (<Redirect to="/" />)
	}

	return (
		<div style={container}>
			<h2 style={header}>{location.name} Details</h2>

			<p style={footer}>Enjoy your event</p>
		</div>
	)
}

const mapState = state => {
	return { list: state.locations.list }
};

export default connect(mapState)(ShowOneLocation);

const container = {
	display: "grid",
	justifyItems: "center",
}
const header = {
	width: "auto",
	borderBottom: "1px solid black",
}
const footer = {
	width: "auto",
	borderTop: "1px solid black",
}
