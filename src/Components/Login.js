import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import axios from 'axios';

const initialState = {
    credentials: {
      username: '',
      password: ''
    },
    error: ''
}

const Login = () => {
    const [state, setState] = useState(initialState);
    const history = useHistory();

    const handleChange = e => {
        setState({
          credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    const handleLogin = e => {
        e.preventDefault();
    
        axios.post('https://potluckplanner2.herokuapp.com/api/auth/login', state.credentials)
          .then(resp=> {
            localStorage.setItem('token', resp.data.token);
            history.push('/events');
          })
          .catch(err=> { 
            console.log(err);
            setState({
                ...state,
                error: 'Login was not successful, please try again.'
            })
          })
      };

    return(<ComponentContainer>
        <ModalContainer>
            <h2>Please enter your account information.</h2>
            <div>
                <form onSubmit={handleLogin}>
                <Label>Username</Label>
                <Input
                    id="username"
                    type="text"
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
                <Button id="submit">Log in</Button>
                </form>
            </div>
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;


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
