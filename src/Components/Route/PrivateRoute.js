import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const authenticated = () => {
	return (localStorage.getItem("token"));
}

const PrivateRoute = ({component: Component, ...rest}) => {
	// return (isAuthenticated ? <Component {...rest}/> : <Navigate to="/login" />)
	// (
		<Route {...rest} render={(props) => {
			if (authenticated) {
				return <Component {...props} />
			} else {
				return <Redirect to="/login" />
			}
		}} />
}

export default PrivateRoute;