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
    margin: 0 0 10% 3%;
    padding: 1% 1% 2% ;
    text-align: left;
    border: solid lightgrey 1px;
    height: 50%;
`

const StyledList = styled.ul`
    list-style-type: none;
    border: solid black 1px;
    width: 100%;
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
            <h3 id="createTagline">Create an event by filling in each of the fields below!</h3>
            <form onSubmit={onSubmit} id="eventForm">
                <div id="formContent">
                    <StyledDTL className="DTL">
                        <h4>Event Details</h4>
                        <label>Event Name&nbsp;
                            <input 
                                type="text" 
                                id="eventName" 
                                name="eventName" 
                                value={formValues.eventName} 
                                required 
                                onChange={onChange}
                                placeholder="Event Name"
                            />
                        </label>
                        <label>Date&nbsp;
                            <input 
                                type="date" 
                                id="date" 
                                name="date" 
                                value={formValues.date} 
                                required 
                                onChange={onChange}
                            />
                        </label>
                        <label>Time&nbsp;
                            <input 
                                type="time" 
                                id="time" 
                                name="time" 
                                value={formValues.time}
                                onChange={onChange}
                            />
                        </label>
                        <label>Location&nbsp;
                            <input 
                                type="text" 
                                id="location" 
                                name="location" 
                                value={formValues.location}
                                onChange={onChange}
                                placeholder="Location"
                            />
                        </label>
                    </StyledDTL>
                    <div id="listContainer">
                        <StyledDiv id="itemList">
                            <div>
                                <h4>Item List</h4>
                                <p>Enter an item that you would like a guest to bring, then click the button to add it to the list.</p>
                                <input type="text" value={foodName} onChange={handleChangeFood} placeholder="Item"/>
                                <button type="button" onClick={handleAddFood}>
                                    Add item
                                </button>
                            </div>
                            <StyledList>
                                {foodList.map((item) => (
                                    <li key={item.id}>{item.foodName}</li>
                                ))}
                            </StyledList>
                        </StyledDiv>
                        
                        <StyledDiv id="guestList">
                            <div>
                                <h4>Guest List</h4>
                                <p>Enter a guest's PotluckPlanner username, then click the button to add them to the guest list.<br/><i>NOTE:</i>You must enter their username correctly, otherwise they will not receive their invitation.</p>
                                <input type="text" value={guestName} onChange={handleChangeGuest} placeholder="Username"/>
                                <button type="button" onClick={handleAddGuest}>
                                    Add guest
                                </button>
                            </div>
                            <StyledList>
                                {guestList.map((item) => (
                                    <li key={item.id}>{item.guestName}</li>
                                ))}
                            </StyledList>
                        </StyledDiv>
                    </div>
                </div>

                    <input type="submit" value="CREATE EVENT" id="eventSubmit"/>
                
            </form>
        </div>
    )
};

export default CreateEvent;