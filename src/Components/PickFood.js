import React from 'react';
import styled from 'styled-components';

const PickFood = () => {

    const StyledHeader = styled.div`
       background-image: url('https://www.frameworkhomeownership.org/images/uploads/potluck-like-a-pro-large-fb-share-image.png');
        background-repeat:no-repeat;
        background-size:cover;
        display:flex;
        width: 100%;
    `

    const StyledPick = styled.div`
        display:flex;
        flex-direction: column;
        align-items: center;
    .pick {
        width: 30% ;
        height: 60vh;
        margin:auto;
        border: 2px solid black;
    }
    .buttonstyle {
        width:10%;
        margin:1%;
    }
    .confirm {
        margin-right: 3%;
    }
    `



    return (
        <div className='eventsName'>
            <StyledHeader className="headerBanner">
                    <h2>Name of event filler</h2>
            </StyledHeader>
            <StyledPick>
                <div className='pick'>
                    
                </div>
                <div className='buttonstyle'>
                    <button className='confirm'>Confirm</button>
                    <button className='cancel'>Cancel</button>
                </div>
            </StyledPick>
        </div>
    )
}

export default PickFood
