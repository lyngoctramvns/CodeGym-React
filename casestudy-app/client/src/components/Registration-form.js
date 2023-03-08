import '../css/registration.css'
import React, {useState} from 'react';

function RegistrationForm() {

const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();
const [email, setEmail] = useState();
const [password,setPassword] = useState();
const [confirmPassword,setConfirmPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        // make API call with userData
        fetch('https://example.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
        })
        .catch(error => {
        });
    }

    return(
        <div className = "registration-container">
            <h2 className="registration-title">Registration Form</h2>
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div>
                <div className="registration-button">
                    <button type="submit" className="btn">Register</button>
                </div>
            </form>
        </div>
        
    )
}

export default RegistrationForm;