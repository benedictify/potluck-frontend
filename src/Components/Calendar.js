import React, { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import styled from 'styled-components';

const Calendar = () => {
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 4%;
    `;

    const [dateState, setDateState] = useState()

    const onChange = (date) => {
        setDateState(date.toString());
    };

    return(
        <Container>
            <h1>Choose Date</h1>
            <DatePicker value={dateState} onChange={onChange} />
            <button>Next</button>
        </Container>
    );
}

export default Calendar