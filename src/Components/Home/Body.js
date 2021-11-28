import React from "react";
import styled from "styled-components";
import image from '../../Images/middleImg.jpeg';
import { Link } from 'react-router-dom';
import pot from '../../Images/blackLogo.png';

const Body = () => {
	return (
		<div className='whole-body'>
			<StyledBody>
				<div className='left'>
					<img src={pot} alt="black pot logo" />
					<h3>By using our potluck planner, we guarantee simplistic accessability for our hosts to be able to create various events for friends and family to attend. Guests are able to attend events and import different items that they would be arriving with. </h3>
					<p>This allows individuals to have a log of attendees and contents that will be brought to specific event. Do not hesitate to click the sign up button below to get started on your first event!</p>
					<Link to="/signup" className="button-homepage eventButton">SIGN UP</Link>
				</div>

				<div className="right headerBanner"></div>
			</StyledBody>
		</div>
	);
};

export default Body;

const StyledBody = styled.div`
	display:flex;
	justify-content: center;
	height: 90vh;

	img {
		width: 25rem;
		margin: 0 auto 7%;
	}
	
	.left {
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 60%; 
		height: 100%;
		padding: 5%;
		font-weight: normal;
	}
	
	.left h3 {
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: normal;
		margin: 0 auto 3%;
	}
	
	.left p {
		margin-bottom: 10%;
		font-size: 1.2rem;
	}
	
	.right {
		background-image: url(${image});
		height: 100%;
		width: 40%;
		margin-right: 3%;
	}

	.button-homepage {
		font-size: 1.2rem;
		padding: 2% 3%;
		margin-bottom: 17%;
	}
`
