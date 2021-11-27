import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveLocationsList } from "../../actions/locationsActions";
import data from "../../data";

const ShowAllLocations = (props) => {
	
	useEffect(() => {
		props.dispatch(saveLocationsList(data.locationslist))
	}, []);

	const showList = () => {
		console.log(props);
		return ((props.list != undefined) ?
			props.list.map(item => {
				return (<li key={item.id}>{item.name}</li>)
			}) :
			<li key="0">Loading...</li>)
	};

	return (
		<div>
			<h2>ShowAllLocations Component</h2>
			<ul>
				{/* {showList()} */}
			</ul>
		</div>
	)
};

const mapStateToProps = (state) => {
	return ({
		list: state.locations.list,
	});
};

export default connect(mapStateToProps)(ShowAllLocations);
