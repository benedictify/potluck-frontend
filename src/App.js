import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import formSchema from './validation/formSchema';
import * as yup from 'yup';

import LoginForm from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import SignUpForm from './Components/SignUp';
import EventsDashboard from './Components/EventsDashboard';
import AddEventForm from './Components/AddEventForm';
// import CreateEvent from './Components/CreateEvent';
import YourEvents from './Components/YourEvents';
import PickFood from './Components/PickFood';
import PrivateRoute from './Components/PrivateRoute';
import Logout from './Components/Logout';

import './App.css';

const initialFormErrors = {
	username: '',
	email: '',
	password: ''
}

function App() {
	const [eventsList, setEventsList] = useState([]); // list of all events

	// Const values for SignUpForm
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(true);
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// getUsers(); 
	// we don't need to get all users, just the one who's logging in. 
	// the Login axios call will give us the id and other user info
	// }, []);

	// const getUsers = () => {
	//     axios.get('https://potluckplanner2.herokuapp.com/api/users')
	//         .then(res => {
	//             setUsers(res.data.data);
	//         })
	//         .catch(err => console.error(err))
	// };

	// this is now being done in SignUpForm component
	// const postNewUser = newUser => {
	//     axios.post('https://potluckplanner2.herokuapp.com/api/auth/register', newUser)
	//         .then(res => {
	//             // setUsers({...users, newUser})
	//         })
	//         .catch(err => console.error(err))
	//     // .finally(() => {
	//     //     setUser(initialUser);
	//     // })
	// };

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

	const formSubmit = () => {
		const newUser = {
			name: formValues.name.trim(),
			email: formValues.email,
			password: formValues.password
		}
		postNewUser(newUser);
	};

	return (
		<div className="App">
			<div className='content'> {/* this div pushes the footer down*/}
				<Header />

				<Switch>
          <Route path='/event-accepted' component={PickFood}></Route>

          <Route path='/your-events' component={YourEvents}></Route>

          <PrivateRoute path='/your-events' component={YourEvents}></PrivateRoute>

          <PrivateRoute path='/events/new' >
						<AddEventForm eventsList={eventsList} setEventsList={setEventsList} />
					</PrivateRoute>
          
          <PrivateRoute path='/events' component={EventsDashboard}></PrivateRoute>

          <PrivateRoute path='/logout' component={Logout}></PrivateRoute>

					<Route path='/signup'>
            <SignUpForm />
          </Route>
          
          <Route path='/login'>
            <LoginForm />
          </Route>
					<Route exact path='/'>
						<Middle />
					</Route>
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
