import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: green;
    margin: 0px;
    height: 10vh;
    
`

const StyledList = styled.ul`
    list-style-type: none;
    margin: auto;
    padding: 2% 0;
    display: flex;
    justify-content: space-between;
    flex-flow: row;
    width: 50%;
`

const StyledLink = styled.li`
    width: 10%;
`


const Footer = () => {
    return (
        <Router>
            <StyledFooter>
                <StyledList>
                    <StyledLink>
                        <Link to="/">HOME</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/user-login">LOGIN</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/signup-page">SIGN UP</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/events">EVENTS</Link>
                    </StyledLink>
                </StyledList>
            </StyledFooter>
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