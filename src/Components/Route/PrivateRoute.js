import React from 'react';
import { Route, Redirect, useHistory, } from 'react-router-dom';

const authenticated = () => {
	return (localStorage.getItem("token"));
}

const PrivateRoute = ({component: Component, ...rest}) => {
	const history = useHistory();

		<Route {...rest} render={(props) => {
			if (authenticated) {
				return <Component {...props} />
			} else {
				return <Redirect to="/" />
			}
		}} />
}

export default PrivateRoute;