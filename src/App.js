import React, { useState } from "react";
import { connect } from 'react-redux';
// Routes
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import PrivateRoute from './Components/Routes/PrivateRoute';
// validations
import formSchema from './validation/formSchema';
import * as yup from 'yup';
// Auths
import SignUpForm from './Components/auths/SignUp';
import LoginForm from './Components/auths/Login';
import Logout from './Components/auths/Logout';
// Home
import Header from './Components/Home/Header';
import Body from './Components/Home/Body';
import Footer from './Components/Home/Footer';
// Events
import EventsDashboard from './Components/Events/EventsDashboard';
import YourEvents from './Components/Events/YourEvents';
import AddEventForm from './Components/Events/AddEventForm';
import EditEvent from './Components/Events/EditEvent';
// Foods
// import PickFood from './Components/Foods/PickFood';
// Locations
import ShowAllLocations from './Components/Locations/ShowAllLocations';
import ShowLocation from './Components/Locations/ShowLocation';
import AddLocationForm from './Components/Locations/AddLocationForm';
// styles
import './App.css';
import styled from 'styled-components';

function App(props) {
	return (
		<div className="App">
			<div className='content'>
				<Header />

				<Switch>
					{/* Authentication */}
					<Route path='/signup' component={SignUpForm} />
					<Route path='/login' component={LoginForm} />
					<Route path='/logout' component={Logout} />

					{/* Events */}
					<Route path='/events' component={EventsDashboard} />
					<Route path='/events/:id' component={YourEvents} />
					<Route path='/events/new' component={AddEventForm} />
					<Route path='/events/edit/:id' component={EditEvent} />

					{/* Locations */}
					<Route path="/locations" component={ShowAllLocations} />
					<Route path="/locations/:id" component={ShowLocation} />
					<Route path="/locations/new" component={AddLocationForm} />

					{/* Home */}
					<Route exact path='/' component={Body} />

					<Redirect to="/" />
				</Switch>

			</div>
			<div><StyledLink to="/locations" className="footernav">Locations Menu</StyledLink></div>
			<Footer />

		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return state;
// }

export default App;
// export default connect(mapStateToProps)(App);

const StyledLink = styled.div`
	display: flex;	
	align-items: center;
	justify-content: center;
	border: solid green 1px;
	background: black;
	margin: 1%;
	width: 15%;
`
