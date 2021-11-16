import React, {     useState    } from 'react';
import {    v4 as uuidv4    } from 'uuid';
import styled from 'styled-components';

const initialFoodList = [];
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

const Food = () => {
    const [list, setList] = useState(initialFoodList);
    const [name, setName] = useState('');

    const handleChange = (event) => {
        //track input field's state
        setName(event.target.value);
    }

    const handleAdd = () => {
        //add item
        const newList = list.concat({   name, id: uuidv4()    });

        setList(newList);

        setName('');
    }

    return (
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
    );
};

export default Food;