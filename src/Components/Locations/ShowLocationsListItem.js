import React from "react";
import { Link } from 'react-router-dom';

const ShowLocationsListItem = (props) => {
	return (
		<Link to="/" >
			<p>{props.name}</p>
		</Link>
	)
}

export default ShowLocationsListItem;
