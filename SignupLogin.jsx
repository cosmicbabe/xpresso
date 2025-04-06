import React from 'react'
import './SignupLogin.css'


export const SignupLogin = () => {

  return (
    <div className='container'>
        <div className='inputs'>
            <div className='input'>
                <input className='email' type='email' placeholder='Please enter your email'/>
            </div>
            <div className='input'>
                <select placeholder='Select your gender'>
                    <option value="" className="gender">Select your gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Custom</option>
                    <option value="4">Prefer not to say</option>
                </select>
            </div>
            <div className='input'>
                <input type="text" placeholder="Create your username"></input>
            </div>
            <div className='input'>
                <input type="password" placeholder='Create your password' />
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className='submit-containers'>
            <div className='submit'>Sign Up</div> 
            <div className='submit'>Login</div>
        </div>
    </div>
  )
}
// signup and login can be replaced with type submit to send data
// the code and the ui is very messy right now, I might missed some stuff