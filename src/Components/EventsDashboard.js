import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../Images/eventsDashImg.png';

const StyledHeader = styled.div`
   background-image: url(${image});
`
const StyledEventsButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
`

const StyledP = styled.p`
   padding: 0 5%;
`

const EventsDashboard = (props) => {
    return (
        <div id='eventsNav'>
            <StyledHeader className="headerBanner">
                <h2>Events Dashboard</h2>
            </StyledHeader>
            <StyledEventsButtons>
                <StyledP>To organize an event, click the "Create Event" button below! <br/><br/>To view your current event invitations or events that you have organized, click on "Your Events."</StyledP>
                <Link to="/create-event" className="createEvent eventButton">CREATE EVENT</Link>
                <Link to="/your-events" className="yourEvents eventButton">YOUR EVENTS</Link>
            </StyledEventsButtons>
        </div>
    );
};

export default EventsDashboard;