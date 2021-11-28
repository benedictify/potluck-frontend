import React from "react";
import ShowLocationsListItem from "./ShowLocationListItem";

const ShowLocationsList = (props) => {
	return (
		<>
			<p>"ShowLocationsList"</p>
			<ul>
				{props.list.map(item => {
					return (<ShowLocationsListItem {...item} />)
				})}
			</ul>
		</>
	)
}



export default ShowLocationsList;
