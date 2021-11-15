import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';



const Footer = () => {
    return (
        <Router>
            <footer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">User Login</Link>
                    </li>
                    <li>
                        <Link to="/">Signup Page</Link>
                    </li>
                    <li>
                        <Link to="/">Events</Link>
                    </li>
                </ul>
            </footer>
                <Routes>
                    <Route path ="/user-login">
                        {/* User Login */}
                    </Route>
                    <Route path ="/signup-page">
                        {/* Signup-Page */}
                    </Route>
                    <Route path ="/events">
                        {/* Events */}
                    </Route>
                    <Route exact path ="/">
                        {/* Home */}
                    </Route>
                </Routes>
        </Router>
       
    )
}

export default Footer
