import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../Images/pickFoodImg.jpeg';

const PickFood = () => {

const StyledHeader = styled.div`
	background-image: url(${image});
`

const StyledPick = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	p {
		margin: 2% 5% 5%;
	}
	.pick {
		width: 30% ;
		height: 60vh;
		margin:auto;
		border: 2px solid black;
	}
	.buttonstyle {
		display: flex;
		justify-content: center;
		margin: 2% auto 5%;
	}
	.button {
		padding: 5%;
		border-radius: 5px;
		margin: 5px;
	}
`



	return (
		<div className='eventsName'>
			<StyledHeader className="headerBanner">
				<h2>Name of event filler</h2>
			</StyledHeader>
			<StyledPick>
				<p>Use the checkboxes below to select items that you will bring to your event. Click the "CONFIRM" button below to finalize your choices, or click "CANCEL" to rescind your invite acceptance and return to Your Events page.</p>
				<div className='pick'>

				</div>
				<div className='buttonstyle'>
					<Link to="/your-events" id="confirm" className="button">CONFIRM</Link>
					<Link to="/your-events" id="cancel" className="button">CANCEL</Link>
				</div>
			</StyledPick>
		</div>
	)
}

export default PickFood
