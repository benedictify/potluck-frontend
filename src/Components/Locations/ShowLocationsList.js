import React from "react";
import ShowLocationsListItem from "./ShowLocationsListItem";

const ShowLocationsList = (props) => {
	console.log(props);
	return (
		<>
			{props.list.map(item => {
				return (<ShowLocationsListItem {...item} />)
			})}
		</>
	)
}

export default ShowLocationsList;
