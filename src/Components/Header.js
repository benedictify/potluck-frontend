import React from 'react';
import {
    Link
} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div 
`   display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5% 1%;
    background-color: green;
`

const StyledMainLogo = styled.p 
`   font-weight: bold;
    font-size: 1.5rem;
    line-height: 0;
    color: white;
`

const StyledNavbar = styled.div 
`   display: flex;
justify-content: flex-end;
width: 100%;
`

const Header = () => {
    return (
            <StyledHeader>   
                <StyledMainLogo id="mainLogo">PotluckPlanner</StyledMainLogo>
                <StyledNavbar id="navbar">
                    <Link to="/" className="headernav">HOME</Link>
                    <Link to="/login" className="headernav">LOGIN</Link>
                    <Link to="/signup" className="headernav">SIGN UP</Link>
                    <Link to="/events" className="headernav">EVENTS</Link>
                </StyledNavbar>
            </StyledHeader>
    )
}

export default Header;
