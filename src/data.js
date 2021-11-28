// fake backend
// initial dummy data

// Location object:
// id: 0,
// name: "",
// TBI: coordinates: {latitude: "", longitude: ""},

// user object:
// id: 0,
// name: "",
// password: "",
// email: "",

// Events object:
// id: 0,
// name: "",
// locationID: 0

// Food object:
// ...?


const data = {
	locationslist: [
		{ id: "1", name: "Union Station" },
		{ id: "2", name: "Millennium Park" },
		{ id: "3", name: "Grant Park" },
	],
	userslist: [
		{ id: "1", username: "peter", password: "123", email: "peter@schurwanz.net" },
		{ id: "2", username: "hannah", password: "123", email: "hannah@schurwanz.net" },
		{ id: "3", username: "oscar", password: "123", email: "oscar@schurwanz.net" },
		{ id: "4", username: "teddy", password: "123", email: "teddy@schurwanz.net" },
		{ id: "5", username: "rebecca", password: "123", email: "rebecca@schurwanz.net" },
		{ id: "6", username: "benedict", password: "123", email: "benedict@schurwanz.net" },
	],
	eventslist: [
		{ id: "1", name: "Happy Potluck", locationID: 1 },
		{ id: "2", name: "Scary Potluck", locationID: 2 },
		{ id: "3", name: "Boring Potluck", locationID: 3 },
		{ id: "4", name: "Sausage Fest 2021", locationID: 3 },
	],
}

export default data;
