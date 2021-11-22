import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../Images/yourEventsImg.jpeg';

const YourEvents = () => {
	return (
		<div>
			<StyledHeader className="headerBanner">
				<h2>Your Events</h2>
			</StyledHeader>
			<div className="yourEvents">
				<div id="openInvitations">
					<h3>Open Invitations</h3>
					<p id="tagline">Accept an invitation and choose an item to bring to the event.<br /><i>Note:</i> you can only accept one invitation at a time.</p>
					<StyledInviteContainer id="invitationsContainer">
						<StyledEventInvite className="eventInvitation">
							<StyledEventInviteText>
								{/* vvv This is just filler data - we will need to actually pull this data for the logged in user somehow */}
								<p class="topP"><b>Event Name</b></p>
								<p>Date: </p>
								<p>Time: </p>
								<p class="bottomP">Location: </p>
							</StyledEventInviteText>
							<div className="yourEventButtons">
								<Link to="/acceptedEventID" id="acceptButton" className="topP">ACCEPT</Link>
								<Link to="/your-events" id="declineButton" className="bottomP">DECLINE</Link>
							</div>
						</StyledEventInvite>
					</StyledInviteContainer>
				</div>

				<div style={{ borderTop: "1px solid lightgrey ", marginLeft: 30, marginRight: 30 }}></div>
				<div id="acceptedInvitations">
					<h3>Accepted Invitation</h3>
					{/* vvv This is just filler data - we will need to actually pull this data for the logged in user somehow */}
					<StyledInviteContainer>
						<StyledEventInvite className="eventInvitation">
							<StyledEventInviteText>
								<p class="topP"><b>Event Name</b></p>
								<p>Date: </p>
								<p>Time: </p>
								<p>Location: </p>
								<p class="bottomP">You're bringing: Lasagna</p>
							</StyledEventInviteText>
						</StyledEventInvite>
					</StyledInviteContainer>
				</div>

				<div style={{ borderTop: "1px solid lightgrey ", marginLeft: 20, marginRight: 20 }}></div>
				<div id="yourCreatedEvents">
					<h3>Events You Organized</h3>
					{/* vvv This is just filler data - we will need to actually pull this data for the logged in user somehow */}
					<StyledInviteContainer>
						<StyledEventInvite className="eventInvitation">
							<StyledEventInviteText>
								<p class="topP"><b>Event Name</b></p>
								<p>Date: </p>
								<p>Time: </p>
								<p class="bottomP">Location: </p>
							</StyledEventInviteText>
							<div className="yourEventButtons">
								<Link to="/edit-event" id="editEventButton" className="bottomP">EDIT</Link>
							</div>
						</StyledEventInvite>
					</StyledInviteContainer>
				</div>

			</div>
		</div>
	)
}

export default YourEvents;

const StyledHeader = styled.div`
	background-image: url(${image});
`
const StyledInviteContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0;
`
const StyledEventInvite = styled.div`
	display: flex;
	border: solid lightgrey 1px;
	padding: 2%;
	width: 35%;
	border-radius: 5px;
	margin: 2% auto 4%;
	justify-content: space-between;
	align-items: flex-end;
`
const StyledEventInviteText = styled.div`
	text-align: left;
	& p {
		margin: 5% 0;
	} 
	& .topP {
		margin-top: 0;
	}
	& .bottomP {
		margin-bottom: 0;
	}
`
