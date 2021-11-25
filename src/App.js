import React, { useState, useEffect } from "react";
// Routes
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './Components/Route/PrivateRoute';
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
import Locations from './Components/Locations/index';
import AddLocationForm from './Components/Locations/AddLocationForm';
// styles
import './App.css';

const initialValues = {
	username: '',
	email: '',
	password: ''
}

function App() {
	// Events:
	const [eventsList, setEventsList] = useState([]);

	// validation:
	// const validate = (name, value) => {
	// 	yup.reach(formSchema, name)
	// 		.validate(value)
	// 		.then(() => setFormErrors({ ...formErrors, [name]: '' }))
	// 		.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
	// };

	// Authentication: 
	// state for SignUpForm
	// const [formErrors, setFormErrors] = useState(initialValues);
	// const [disabled, setDisabled] = useState(true);
	// Values and functions for SignUpForm
	// useEffect(() => {
	// 	formSchema.isValid(signupFormValues)
	// 		.then(valid => setDisabled(!valid));
	// }, [signupFormValues]);
	// const inputChange = (name, value) => {
	// 	validate(name, value);
	// 	setSignupFormValues({ ...signupFormValues, [name]: value });
	// };

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
					<Route path='/events/new' component={AddEventForm} eventsList={eventsList} setEventsList={setEventsList} />
					<Route path='/events/edit/:id' component={EditEvent} />
					{/* <Route path='/acceptedEventID' component={PickFood} /> */}

					{/* Locations */}
					<Route path="/locations" component={Locations} />
					<Route path="/locations/new" component={AddLocationForm} />

					{/* Home */}
					<Route exact path='/' component={Body} />

					<Redirect to="/" />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
