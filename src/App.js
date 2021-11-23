import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import formSchema from './validation/formSchema';
import * as yup from 'yup';

import SignUpForm from './Components/auths/SignUp';
import LoginForm from './Components/auths/Login';
import Logout from './Components/auths/Logout';
import Header from './Components/Home/Header';
import Body from './Components/Home/Body';
import Footer from './Components/Home/Footer';
import EventsDashboard from './Components/Events/EventsDashboard';
import YourEvents from './Components/Events/YourEvents';
import AddEventForm from './Components/Events/AddEventForm';
import EditEvent from './Components/Events/EditEvent';
import PickFood from './Components/Foods/PickFood';
import Locations from './Components/Locations/index';
import PrivateRoute from './Components/Route/PrivateRoute';

import './App.css';

const initialValues = {
	username: '',
	email: '',
	password: ''
}

function App() {
	const [eventsList, setEventsList] = useState([]); // list of all events

	// Const values for SignUpForm
	const [formValues, setFormValues] = useState(initialValues);
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
		formSchema.isValid(formValues)
			.then(valid => setDisabled(!valid));
	}, [formValues]);

	const inputChange = (name, value) => {
		validate(name, value);
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<div className="App">
			<div className='content'> {/* this div pushes the footer down*/}
				<Header />

				<Switch>
					<Route path='/signup'>
						<SignUpForm />
					</Route>
					<Route path='/login'>
						<LoginForm />
					</Route>

					<Route path='/edit-event' component={EditEvent}></Route>
					<Route path='/acceptedEventID' component={PickFood}></Route>
					<Route path='/your-events' component={YourEvents}></Route>

					<Route path="/locations">
						<Locations />
					</Route>

					<PrivateRoute path='/your-events' component={YourEvents}></PrivateRoute>
					<PrivateRoute path='/create-event' component={AddEventForm} eventsList={eventsList} setEventsList={setEventsList}>
						{/* <AddEventForm eventsList={eventsList} setEventsList={setEventsList} /> */}
					</PrivateRoute>
					<PrivateRoute path='/events' component={EventsDashboard}></PrivateRoute>
					<PrivateRoute path='/logout' component={Logout}></PrivateRoute>

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
