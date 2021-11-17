import { React, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {    v4 as uuidv4    } from 'uuid';

const StyledHeader = styled.div 
`   background-image: url('https://hips.hearstapps.com/ell.h-cdn.co/assets/15/52/1450738482-elle-potluck-04-getty.jpg');
background-size: cover;
background-position: center;
`

const StyledDTL = styled.div 
`   display: flex;
    flex-direction: column;
    margin: 3%;
`

const StyledList = styled.ul`
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

const initialFormValues = {
    eventName: "",
    date: "",
    food: [],
    time: "",
    location: "",
    email: []
};
const initialEvents = [];


const CreateEvent = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [events, setEvents] = useState(initialEvents);

    const postNewEvent = newEvent => {
        axios.post('https://reqres.in/api/events', newEvent)
          .then(res => {
              console.log(res.data)
            setEvents([res.data, ...events]);
          })
          .catch(err => console.error(err))
          .finally(() => {
            setFormValues(initialFormValues);
          })
      };

    const formSubmit = () => {
        const newEvent = {
            name: formValues.eventName,
            date: formValues.date,
            food: foodList,
            time: formValues.time,
            location: formValues.location,
            email: guestList
        }
        postNewEvent(newEvent);
      };

    const onSubmit = event => {
        event.preventDefault();
        formSubmit();
    }

    const inputChange = (name, value) => {
        //validate(name, value);
        setFormValues({ ...formValues, [name]: value});
    };

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue);
    }
// Food List
    const initialFoodList = [];    
    const [foodList, setFoodList] = useState(initialFoodList);
    const [foodName, setFoodName] = useState('');

    const handleChangeFood = (event) => {
        //track input field's state
        setFoodName(event.target.value);
    }

    const handleAddFood = () => {
        //add item
        const newFoodList = foodList.concat({   foodName, id: uuidv4()    });

        setFoodList(newFoodList);

        setFoodName('');
    }
// Guest List
    const initialGuestList = [];    
    const [guestList, setGuestList] = useState(initialGuestList);
    const [guestName, setGuestName] = useState('');

    const handleChangeGuest = (event) => {
        //track input field's state
        setGuestName(event.target.value);
    }

    const handleAddGuest = () => {
        //add item
        const newGuestList = guestList.concat({   guestName, id: uuidv4()    });

        setGuestList(newGuestList);

        setGuestName('');
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
                            value={formValues.eventName} 
                            required 
                            onChange={onChange}
                        />
                    </label>
                    <label>Date
                        <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            value={formValues.date} 
                            required 
                            onChange={onChange}
                        />
                    </label>
                    <label>Time
                        <input 
                            type="time" 
                            id="time" 
                            name="time" 
                            value={formValues.time}
                            onChange={onChange}
                        />
                    </label>
                    <label>Location
                        <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            value={formValues.location}
                            onChange={onChange}
                        />
                    </label>
                </StyledDTL>

                <StyledDiv>
                    <div>
                        <input type="text" value={foodName} onChange={handleChangeFood} />
                        <button type="button" onClick={handleAddFood}>
                            Add food to list
                        </button>
                    </div>
                    <StyledList>
                        {foodList.map((item) => (
                            <li key={item.id}>{item.foodName}</li>
                        ))}
                    </StyledList>
                </StyledDiv>
                
                <StyledDiv>
                    <div>
                        <input type="text" value={guestName} onChange={handleChangeGuest} />
                        <button type="button" onClick={handleAddGuest}>
                            Add guest to list
                        </button>
                    </div>
                    <StyledList>
                        {guestList.map((item) => (
                            <li key={item.id}>{item.guestName}</li>
                        ))}
                    </StyledList>
                </StyledDiv>
               
                {/* <label>Guest Invitations
                    <input 
                        type="email" 
                        id="guest" 
                        name="guest" 
                        value={formValues.email}
                        onChange={onChange}
                    />
                </label>
                <input 
                    type="submit" 
                    value="Invite Guest"
                /> */}

                <input type="submit" value="Create Event"/>
            </form>
        </div>
    )
};

export default CreateEvent;