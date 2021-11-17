import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div 
`   background-image: url('https://www.safeway.ca/wp-content/uploads/2019/10/Quick-Tips-for-Hosting-a-Potluck.jpg');
`
const StyledEventInvite = styled.div 
`   display: flex;
    border: solid lightgrey 1px;
    padding: 1%;
    width: 40%;
    border-radius: 5px;
    margin: 2%;
    justify-content: space-around;
    align-items: flex-end;
`
const StyledEventInviteText = styled.div 
`   text-align: left;
`

const YourEvents = () => {
    return (
        <div>
            <StyledHeader className="headerBanner">
                    <h2>Create Event</h2>
            </StyledHeader>
            <div>
                <div id="openInvitations">
                    <h3>Open Invitations</h3>
                    <p>Note that you can only accept one invitation at a time.</p>
                    <StyledEventInvite className="eventInvitation">
                        <StyledEventInviteText>
                            <p><b>Event Name</b></p>
                            <p>Event Date</p>
                            <p>Event Time</p>
                            <p>Event Location</p>
                        </StyledEventInviteText>
                        <div className="acceptDeclineButtons">
                            <Link to="/acceptedEventID" id="acceptButton">ACCEPT</Link>
                            <Link to="/your-events" id="declineButton">DECLINE</Link>
                        </div>
                    </StyledEventInvite>
                </div>
                
                <div id="acceptedInvitations">
                    <h3>Accepted Invitation</h3>
                    <StyledEventInvite className="eventInvitation">
                        <StyledEventInviteText>
                            <p><b>Event Name</b></p>
                            <p>Event Date</p>
                            <p>Event Time</p>
                            <p>Event Location</p>
                        </StyledEventInviteText>
                    </StyledEventInvite>
                </div>
                
            </div>
        </div>
    )
}

export default YourEvents;
