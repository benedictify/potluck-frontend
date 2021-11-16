import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Food from './FoodList';

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

const initialFormValues = {
    date: "",
    food: [],
    time: "",
    location: "",
    email: ""
};
const initialEvents = [];
const initialItems = [];

const CreateEvent = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [events, setEvents] = useState(initialEvents);
    const [items, setItems] = useState(initialItems);

    const postNewEvent = newEvent => {
        axios.post('https://reqres.in/api/events', newEvent)
          .then(res => {
            setEvents([res.data, ...events]);
          })
          .catch(err => console.error(err))
          .finally(() => {
            setFormValues(initialFormValues);
          })
      };

    const formSubmit = () => {
        const newEvent = {
            date: formValues.date,
            food: formValues.food,
            time: formValues.time,
            location: formValues.location,
            email: formValues.email
        }
        postNewEvent(newEvent);
      };

    const onSubmit = event => {
        event.preventDefault();
        formSubmit();
    }

    const inputChange = (name, value) => {
        // validate(name, value);
        setFormValues({ ...formValues, [name]: value});
    };

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue);
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
                            value={formValues.date} 
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
                
                <label>Add food to list
                    <input 
                        type="text" 
                        id="food" 
                        name="food" 
                        value={formValues.food}
                        onChange={onChange}
                    />
                </label>
                <input 
                    type="submit" 
                    value="Add food to list"
                />
                
                <label>Guest Invitations
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
                />

                <input type="submit" value="Create Event"/>
            </form>
            <Food />
        </div>
    )
};

export default CreateEvent;