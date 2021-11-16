import axios from 'axios';
 
// For authentication
// After user logs in, to access protected pages that 
// un-authenticated users shouldn't see,
// make axios calls with `axiosWithAuth()` 
// in place of `axios`.
// Also import this file where needed. 

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		headers: {
			authorization: token
		}, 
		baseURL: 'https://potluckplanner2.herokuapp.com/api'
	})
}
