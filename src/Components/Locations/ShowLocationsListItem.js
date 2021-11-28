import React from "react";
import { Link } from 'react-router-dom';

const ShowLocationsListItem = (props) => {
	const { id } = props;

	return (
		<p>
			<Link to={`/locations/${id}`} style={blackText}>
				{props.name}
			</Link>
		</p>
	)
}

export default ShowLocationsListItem;

const blackText = {
	color: "black"
}
