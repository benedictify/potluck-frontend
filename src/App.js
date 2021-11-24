import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
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
import PickFood from './Components/Foods/PickFood';
// Locations
import Locations from './Components/Locations/index';
// Route
import PrivateRoute from './Components/Route/PrivateRoute';

import './App.css';

const initialValues = {
	username: '',
	email: '',
	password: ''
}

function App() {
	// Events
	const [eventsList, setEventsList] = useState([]); 

	// Auth: values for SignUpForm
	const [signupFormValues, setSignupFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState(initialValues);
	const [disabled, setDisabled] = useState(true);

	const validate = (name, value) => {
		yup.reach(formSchema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
	};

	// Values and functions for SignUpForm
	useEffect(() => {
		formSchema.isValid(signupFormValues)
			.then(valid => setDisabled(!valid));
	}, [signupFormValues]);

	const inputChange = (name, value) => {
		validate(name, value);
		setSignupFormValues({ ...signupFormValues, [name]: value });
	};

	return (
		<div className="App">
			<div className='content'> {/* this div pushes the footer down*/}
				<Header />

				<Switch>
					{/* Auth */}
					<Route path='/signup'>
						<SignUpForm />
					</Route>
					<Route path='/login'>
						<LoginForm />
					</Route>
					<PrivateRoute path='/logout' component={Logout}></PrivateRoute>

					{/* Events */}
					<Route path='/edit-event' component={EditEvent}></Route>
					<Route path='/acceptedEventID' component={PickFood}></Route>
					<Route path='/your-events' component={YourEvents}></Route>
					<PrivateRoute path='/your-events' component={YourEvents}></PrivateRoute>
					<PrivateRoute path='/create-event' component={AddEventForm} eventsList={eventsList} setEventsList={setEventsList}>
						{/* <AddEventForm eventsList={eventsList} setEventsList={setEventsList} /> */}
					</PrivateRoute>
					<PrivateRoute path='/events' component={EventsDashboard}></PrivateRoute>

					{/* Locations */}
					<Route path="/locations">
						<Locations />
					</Route>

					{/* Home */}
					<Route exact path='/'>
						<Body />
					</Route>

					<Redirect to="/" />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
