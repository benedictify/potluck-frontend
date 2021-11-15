import React from 'react';

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
            <div className="formHeader">
                <h2>Create an Account</h2>
            </div>
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
                
                <div className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                </div>
                <button disabled={disabled} id='order-button'>SUBMIT</button>
            </form>
        </div>
    );
};

export default SignUpForm;