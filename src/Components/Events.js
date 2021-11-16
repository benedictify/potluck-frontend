import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div 
`   background-image: url('https://www.frameworkhomeownership.org/images/uploads/potluck-like-a-pro-large-fb-share-image.png');
`

const Events = (props) => {
    return(
        <StyledHeader className="headerBanner">
                <h2>Events</h2>
        </StyledHeader>
    );
};

export default Events;