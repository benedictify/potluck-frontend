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
const StyledInviteContainer = styled.div 
`   display: flex;
    justify-content: center;
    margin: 0;
`

const YourEvents = () => {
    return (
        <div>
            <StyledHeader className="headerBanner">
                    <h2>Your Events</h2>
            </StyledHeader>
            <div>
                <div id="openInvitations">
                    <h3>Open Invitations</h3>
                    <p>Note that you can only accept one invitation at a time.</p>
                    <StyledInviteContainer id="invitationsContainer">
                        <StyledEventInvite className="eventInvitation">
                            <StyledEventInviteText>
                                {/* vvv This is just filler data - we will need to actually pull this data for the logged in user somehow */}
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
                    </StyledInviteContainer>
                </div>
                
                <div id="acceptedInvitations">
                    <h3>Accepted Invitation</h3>
                    {/* vvv This is just filler data - we will need to actually pull this data for the logged in user somehow */}
                    <StyledInviteContainer>
                        <StyledEventInvite className="eventInvitation">
                            <StyledEventInviteText>
                                <p><b>Event Name</b></p>
                                <p>Event Date</p>
                                <p>Event Time</p>
                                <p>Event Location</p>
                                <p>You're bringing: Lasagna</p>
                            </StyledEventInviteText>
                        </StyledEventInvite>
                    </StyledInviteContainer>
                </div>
                
            </div>
        </div>
    )
}

export default YourEvents;
