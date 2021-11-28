import React from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router";
import data from "../../data"

const findLocation = (id, list) => {
	return list.find(loc => loc.id == id);
};

const ShowOneLocation = (props) => {
	const { id } = useParams()
	
	const list = props.list;
	// const list = data.locationslist;
	
	const location = findLocation(id, list);

	return (
		<div style={{display: "grid", justifyItems: "center"}}>
			<h2 style={header}>{location.name} Details</h2>  
						
			<p style={footer} >Enjoy your event</p>  
		</div>
	)
}

const mapState = state => {
	return { list: state.locations.list }
};

export default connect(mapState)(ShowOneLocation);

const header = {
	width: "auto",
	borderBottom: "1px solid black",
}
const footer = {
	width: "auto",
	borderTop: "1px solid black",
}
