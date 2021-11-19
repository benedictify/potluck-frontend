import React from 'react'
import {
    Link
} from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.div 
`   display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5% 1%;
    background-color: green;
    margin: 0;
`

const StyledNavbar = styled.div 
`   display: flex;
justify-content: center;
width: 100%;
`

const Footer = () => {
    const token = localStorage.getItem("token");

    return (
        <StyledFooter>   
            <StyledNavbar id="footerNavs">
                <Link to="/" className="footernav">HOME</Link>
                <Link to="/login" className="footernav">LOGIN</Link>
                <Link to="/signup" className="footernav">SIGN UP</Link>
                {token && <Link to="/events" className="footernav">EVENTS</Link>}
                {token && <Link to="/logout" className="footernav">LOGOUT</Link>}
            </StyledNavbar>
        </StyledFooter>
       
    )
}

export default Footer