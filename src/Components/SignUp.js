import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div 
`   background-image: url('https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
    height: 50vh;
    color: white;
`
const Styledh2 = styled.h2 
`   font-size: 3rem;
    text-shadow: 2px 2px 4px #190000;
`
const StyledErrors = styled.div 
`   color: red;
    font-weight: bold;
    padding: 2%;
`

const SignUpForm = (props) => {
    const {
        formValues,
        inputChange,
        formSubmit,
        disabled,
        formErrors,
      } = props

    const onSubmit = event => {
        event.preventDefault();
        formSubmit();
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue);
    }
    
    return(
        <div className="formContainer">
            <StyledHeader className="formHeader">
                <Styledh2>Create an Account</Styledh2>
            </StyledHeader>
            <form id="form-body" onSubmit={onSubmit}>
                <label>Name&nbsp;
                    <input 
                        id='name-input'
                        value={formValues.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email&nbsp;
                    <input 
                        value = {formValues.email}
                        onChange = {onChange}
                        name = 'email'
                        type = 'email'
                    />
                </label>
                <label>Password&nbsp;
                    <input 
                        value = {formValues.password}
                        onChange = {onChange}
                        name = 'password'
                        type = 'password'
                    />
                </label>
                
                <StyledErrors className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                </StyledErrors>
                <button disabled={disabled} id='order-button'>SUBMIT</button>
            </form>
        </div>
    );
};

export default SignUpForm;