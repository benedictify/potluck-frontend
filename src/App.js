import React from "react";
import { connect } from 'react-redux';
// Routes
import { Route, Switch, Redirect, Link, useLocation } from 'react-router-dom';
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
import ShowOneLocation from './Components/Locations/ShowOneLocation';
import AddLocationForm from './Components/Locations/AddLocationForm';
// styles
import './App.css';

function App(props) {
	const location = useLocation();

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
					<Route exact path="/locations" component={ShowAllLocations} />
					{/* <Route exact path="/locations/new" component={AddLocationForm} /> */}
					<Route path="/locations/:id" component={ShowOneLocation} />

					{/* Home */}
					<Route exact path='/' component={Body} />

					<Redirect to="/" />
				</Switch>

				{/* render Location Menu button only on root page */}
				{location.pathname === "/" &&
					<Link to="/locations" className="applinkbutton">
						Locations Menu
					</Link>}
			</div>

			<Footer />
		</div>
	);
};

export default App;
