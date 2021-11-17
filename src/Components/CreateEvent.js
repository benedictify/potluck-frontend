import { React, useState } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import { v4 as uuidv4 } from 'uuid';

const initialEventData = {
    name: "",
    date: "",
    foodList: [],
    time: "",
    location: "",
    email: ""
};

const CreateEvent = (props) => {
    const { eventsList, setEventsList } = props;
    const [eventData, setEventData] = useState(initialEventData); // data for the new single event to be added
    // const [list, setList] = useState(); // should be able to store list inside event state
    // const [name, setName] = useState('');

    const addEvent = () => {
        axiosWithAuth() // this function contains a "baseURL" of "https://potluckplanner2.herokuapp.com/api"
            .post('/events', eventData)
            .then(res => { // retrieve data of added event, 
                setEventsList([...eventsList, res.data]);
            })
            .catch(err => console.error(err))
            .finally(() => {
                setEventData(initialEventData); // reset the form
            })
    };

    const onSubmit = event => {
        event.preventDefault();

        addEvent(eventData);
    }

    const inputChange = (name, value) => {
        //validate(name, value);
        setEventData({ ...eventData, [name]: value });
    };

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue);
    }


    const handleChange = (event) => {
        //track input field's state
        setName(event.target.value);
    }

    const handleAdd = () => {
        //add item
        const newList = list.concat({ name, id: uuidv4() });

        setList(newList);

        setName('');
    }

    return (
        <div>
            <StyledHeader className="headerBanner">
                <h2>Create Event</h2>
            </StyledHeader>
            <form onSubmit={onSubmit}>
                <StyledDTL>
                    <label>Event Name
                        <input
                            type="text"
                            id="eventName"
                            name="eventName"
                            value={eventData.name}
                            required
                            onChange={onChange}
                        />
                    </label>
                    <label>Date
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={eventData.date}
                            required
                            onChange={onChange}
                        />
                    </label>
                    <label>Time
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={eventData.time}
                            onChange={onChange}
                        />
                    </label>
                    <label>Location
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={eventData.location}
                            onChange={onChange}
                        />
                    </label>
                </StyledDTL>

                <StyledDiv>
                    <div>
                        <input type="text" value={name} onChange={handleChange} />
                        <button type="button" onClick={handleAdd}>
                            Add food to list
                        </button>
                    </div>
                    <StyledFood>
                        {list.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </StyledFood>
                </StyledDiv>

                <label>Guest Invitations
                    <input
                        type="email"
                        id="guest"
                        name="guest"
                        value={eventData.email}
                        onChange={onChange}
                    />
                </label>
                <input
                    type="submit"
                    value="Invite Guest"
                />

                <input type="submit" value="Create Event" />
            </form>
        </div>
    )
};

export default CreateEvent;

const StyledHeader = styled.div`
	background-image: url('https://hips.hearstapps.com/ell.h-cdn.co/assets/15/52/1450738482-elle-potluck-04-getty.jpg');
	background-size: cover;
	background-position: center;
`;

const StyledDTL = styled.div`
	display: flex;
    flex-direction: column;
    margin: 3%;
`;

const StyledFood = styled.ul`
    list-style-type: none;
    border: solid black 1px;
    width: 50%;
    height: 20vh;
`;

const StyledDiv = styled.div`
display: flex;
justify-content: center;
height: 100%;
align-items: center;
`;
