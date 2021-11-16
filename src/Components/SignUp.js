import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import axios from 'axios';

const ininialState = {
    credentials: {
      username: '',
      password: ''
    },
    error: ''
}

const SignUpForm = () => {
    const [state, setState] = useState(ininialState);
    const {push} = useHistory();
    
    
    const handleChange = e => {
        setState({
        credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
        }
        });
    };

    const handleSignUp = e => {
        e.preventDefault();

        axios.post('https://potluckplanner2.herokuapp.com/api/auth/register', state.credentials)
        .then(resp=> {
            push('/login');
        })
        .catch(err=> { 
            console.log(err);
            setState({
                ...state,
                error: 'Registration was not successful, please try again.'
            })
        })
    };


    return(
        <div className="formContainer">
            <StyledHeader className="headerBanner">
                <h2>Create an Account</h2>
            </StyledHeader>
            <ComponentContainer>
        <ModalContainer>
            <h2>Please enter the required information.</h2>
            <div>
                <form onSubmit={handleSignUp}>
                <Label>Username</Label>
                <Input
                    id="username"
                    type="Text"
                    name="username"
                    value={state.credentials.username}
                    onChange={handleChange}
                />

                <LineBreak/>

                <Label>Password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    value={state.credentials.password}
                    onChange={handleChange}
                />
                <p id="error">{state.error}</p>
                <Button id="submit">Sign Up</Button>
                </form>
            </div>
        </ModalContainer>
    </ComponentContainer>
        </div>
    );
};

export default SignUpForm;

const StyledHeader = styled.div `
    background-image: url('https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg');
`

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
const LineBreak = styled.div`
    height: 1vh
`

// const StyledHeader = styled.div 
//  `   background-image: url('https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg');
//  `
 const StyledErrors = styled.div 
 `   color: red;
     font-weight: bold;
     padding: 1%;
 `
 const StyledInputFields = styled.div 
 `   display: flex;
     flex-direction: column;
 `
 const StyledSubmitButton = styled.button 
 `   background-color: green;
     color: white;
     margin-bottom: 2%;
     padding: .5% 1%;
     border-radius: 5px;
     border: none;
     &:hover {
         background-color: darkgreen;
     }
     &:disabled {
         background-color: lightgrey;
         color: darkgrey;
     }
 `