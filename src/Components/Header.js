import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Images/logo.png';

const StyledHeader = styled.div 
`   display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5% 1%;
    background-color: green;
`

const StyledLogo = styled.img 
`   height: 30px;
    margin: 0;
    padding: 0;
`

const StyledNavbar = styled.div 
`   display: flex;
    justify-content: flex-end;
    width: 100%;
`

const Header = () => {
    const token = localStorage.getItem("token");
    return (
        <StyledHeader>
            <a href="/" id="mainLogo">
                <StyledLogo src={logo} alt="pot icon"/>
            </a>
            <StyledNavbar id="navbar">
                <Link to="/" className="headernav">HOME</Link>
                <Link to="/login" className="headernav">LOGIN</Link>
                <Link to="/signup" className="headernav">SIGN UP</Link>
                {token && <Link to="/events" className="headernav">EVENTS</Link>}
                {token && <Link to="/logout" className="headernav">LOGOUT</Link>}
            </StyledNavbar>
        </StyledHeader>
    )
}

export default Header;
