import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div 
`   background-image: url('https://hips.hearstapps.com/ell.h-cdn.co/assets/15/52/1450738482-elle-potluck-04-getty.jpg');
background-size: cover;
background-position: center;
`

const CreateEvent = () => {
    
    
    return (
        <div>
            <StyledHeader className="headerBanner">
                    <h2>Create Event</h2>
            </StyledHeader>
            <form>
                <label>Date
                    <input type="date" id="date" name="date"/>
                </label>
                <label>Add food to list
                    <input type="text" id="food" name="food"/>
                </label>
                <input type="submit" value="Add food to list"/>
                <label>Time
                    <input type="time" id="time" name="time"/>
                </label>
                <label>Location
                    <input type="text" id="location" name="location"/>
                </label>
                <label>Guest Invitations
                    <input type="email" id="guest" name="guest"/>
                </label>
                <input type="submit" value="Create Event"/>
            </form>
        </div>
    )
};

export default CreateEvent;