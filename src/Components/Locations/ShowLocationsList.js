import React from "react";
import ShowLocationsListItem from "./ShowLocationsListItem";

const ShowLocationsList = (props) => {
	return (
		<>
			{props.list.map((item, i) => {
				return (<ShowLocationsListItem key={i} {...item} />)
			})}
		</>
	)
}

export default ShowLocationsList;
