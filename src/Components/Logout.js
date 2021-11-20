import React, { useEffect } from "react";
import { useNavigate as useHistory } from 'react-router-dom';


const Logout = () => {
	const { push } = useHistory();

	useEffect(() => {
		localStorage.removeItem("token");
		push('/login');
		window.location.reload();
	}, []);

	return (<div></div>);
}

export default Logout;

