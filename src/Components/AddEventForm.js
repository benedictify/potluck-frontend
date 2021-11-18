import { React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import { v4 as uuidv4 } from 'uuid';
import image from '../Images/addEventFormImg.jpeg';

const initialEventData = { // formerly "initialFormValues"
    eventName: "",
    date: "",
    foodList: [],
    time: "",
    location: "",
    guestList: [] // formerly "email"
};

const AddEventForm = (props) => {
    const { eventsList, setEventsList } = props; // formerly "events"
    const [eventData, setEventData] = useState(initialEventData); // formerly "formValues"
    // const [list, setList] = useState(); // now storing foods list inside eventData
    // const [name, setName] = useState(''); // this is now in eventData

    const addEvent = () => { // formerly "postNewEvent"
        axiosWithAuth() // this function contains a "baseURL" of "https://potluckplanner2.herokuapp.com/api", so whatever's below will append onto "baseURL"
            .post('/events', eventData)
            .then(res => { // retrieve data of added event, 
                const newEvent = res.data;
                // add event to local events list in App state
                setEventsList([...eventsList, newEvent]);
                // instead of resetting the form, we'll redirect to the display page for the event we just added
                return <Redirect to={`/events/${newEvent.id}`} />
            })
            .catch(err => console.error(err))
    };

    const onSubmit = event => { // now does job of onSubmit and formSubmit
        event.preventDefault();

        addEvent(eventData);
    };

    // const inputChange = (name, value) => {
    //     //validate(name, value);
    //     setEventsList({ ...eventData, [name]: value });
    // };

    const onChange = event => {
        // const realValue = (type) === 'checkbox' ? checked : value;
        setEventData({
            ...eventData,
            [event.target.name]: event.target.value
        });
    };

    // Food List
    // const initialFoodList = []; // foodList is now in eventData
    // const [foodList, setFoodList] = useState(initialFoodList);
    const [foodName, setFoodName] = useState('');

    const handleChangeFood = (event) => {
        //track input field's state
        setFoodName(event.target.value);
    }

    const handleAddFood = () => {
        //add item
        const newFoodList = eventData.foodList.concat({ foodName, id: uuidv4() });

        setEventData({ // formerly "setFoodList"
            ...eventData,
            foodList: newFoodList
        });

        setFoodName('');
    }

    // Guest List
    // const initialGuestList = [];
    // const [guestList, setGuestList] = useState(initialGuestList);
    //
    const [guestName, setGuestName] = useState('');

    const handleChangeGuest = (event) => {
        //track input field's state
        setGuestName(event.target.value);
    }

    const handleAddGuest = () => {
        //add item
        // const newGuestList = guestList.concat([{ guestName, id: uuidv4() }]);
        setEventData({
            ...eventData,
            guestList: [
                ...eventData.guestList,
                { 
                    guestName: guestName,
                    id: uuidv4()
                }
            ]
        });

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
                        <StyledDetails>
                            <label className="topP">Event Name&nbsp;
                                <input
                                    type="text"
                                    id="eventName"
                                    name="eventName"
                                    value={eventData.eventName}
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
                                    value={eventData.date}
                                    required
                                    onChange={onChange}
                                />
                            </label>
                            <label>Time&nbsp;
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={eventData.time}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Location&nbsp;
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={eventData.location}
                                    onChange={onChange}
                                    placeholder="Location"
                                />
                            </label>
                        </StyledDetails>
                    </StyledDTL>
                    <div id="listContainer">
                        <StyledDiv id="itemList">
                            <div>
                                <h4>Item List</h4>
                                <p>Enter an item that you would like a guest to bring, then click the button to add it to the list.</p>
                                <input type="text" value={foodName} onChange={handleChangeFood} placeholder="Item" />
                                <button type="button" onClick={handleAddFood}>
                                    Add item
                                </button>
                            </div>
                            <div>
                                {eventData.foodList.map((item) => (
                                    <li key={item.id}>{item.foodName}</li>
                                ))}
                            </div>
                        </StyledDiv>

                        <StyledDiv id="guestList">
                            <div>
                                <h4>Guest List</h4>
                                <p>Enter a guest's PotluckPlanner username, then click the button to add them to the guest list.</p>
                                <p id="note"><i>NOTE: </i>You must enter their username correctly, otherwise they will not receive their invitation.</p>
                                <input type="text" value={guestName} onChange={handleChangeGuest} placeholder="Username" />
                                <button type="button" onClick={handleAddGuest}>
                                    Add guest
                                </button>
                            </div>
                            <div>
                                {eventData.guestList.map((item) => (
                                    <li key={item.id}>{item.guestName}</li>
                                ))}
                            </div>
                        </StyledDiv>
                    </div>
                </div>

                <input type="submit" value="CREATE EVENT" id="eventSubmit" />

            </form>
        </div>
    )
};

export default AddEventForm;

const StyledHeader = styled.div`
	background-image: url(${image});
	background-size: cover;
	background-position: center;
`;

const StyledDTL = styled.div`
	display: flex;
    flex-direction: column;
    margin: 3%;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

const StyledDetails = styled.div`
    border: solid lightgrey 1px;
    padding: 5%;
    text-align: left;
    display: flex;
    flex-direction: column;
`;
