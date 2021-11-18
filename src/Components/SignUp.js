import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import axios from 'axios';
import image from '../Images/signUpImg.jpeg';

const initialUser = {
    credentials: {
        username: '',
        email: '',
        password: ''
    },
    error: ''
}

// creates new User, posts to server
const SignUpForm = () => { 
    const [user, setUser] = useState(initialUser);
    const { push } = useHistory();

    const handleChange = e => {
        setUser({
            credentials: {
                ...user.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSignUp = e => {
        e.preventDefault();

        axios.post('https://potluckplanner2.herokuapp.com/api/auth/register', user.credentials)
            .then(resp => {
                push('/login');
            })
            .catch(err => {
                console.log(err);
                setUser({
                    ...user,
                    error: 'Registration was not successful, please try again.'
                })
            })
    };


    return (
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
                                value={user.credentials.username}
                                onChange={handleChange}
                            />

                            <LineBreak />
                            
                            <Label>Email</Label>
                            <Input
                                id="email"
                                type="Text"
                                name="email"
                                value={user.credentials.email}
                                onChange={handleChange}
                            />

                            <LineBreak />

                            <Label>Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={user.credentials.password}
                                onChange={handleChange}
                            />
                            <p id="error">{user.error}</p>
                            <Button id="submit">Sign Up</Button>
                        </form>
                    </div>
                </ModalContainer>
            </ComponentContainer>
        </div>
    );
};

export default SignUpForm;

const StyledHeader = styled.div`
    background-image: url(${image});
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
