import React, { useEffect } from "react";
import axios from '../../utils/axios'

const ShowAllLocations = () => {
	useEffect(() => {
		axios.locationsList
	})

	return (
		<div>
			<h2>ShowAllLocations Component</h2>
		</div>
	)
}

export default ShowAllLocations;
