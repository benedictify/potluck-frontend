import React from 'react'
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



const StyledNavbar = styled.div 
`   display: flex;
justify-content: center;
width: 100%;
`


const Footer = () => {
    return (
        <StyledHeader>   
            <StyledNavbar id="navbar">
                <Link to="/" >HOME</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/signup">SIGN UP</Link>
                <Link to="/events">EVENTS</Link>
            </StyledNavbar>
        </StyledHeader>
       
    )
}

export default Footer