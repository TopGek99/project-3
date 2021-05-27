import axios from 'axios';

const API = {
	// Gets all Users
	getSession: function () {
		return axios.get('/api/users/session');
	},
	// Gets the User with the given id
	getUser: function (userData) {
		return axios
			.post('/api/users/login/', userData)
			.then((response) => {
				// console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	},
	// Deletes the User with the given id
	deleteUser: function (id) {
		return axios.delete('/api/users/' + id);
	},
	// Saves a User to the database
	saveUser: function (user) {
		console.log(user);
		return axios
			.post('/api/users/', user)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};

export default API;