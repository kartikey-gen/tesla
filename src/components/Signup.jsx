import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import tesla from '../images/tesla.png'
import './Signup.css'
import LanguageIcon from '@mui/icons-material/Language';
import ButtonPrimary from "./Features/ButtonPrimary";
import ButtonSecondary from "./Features/ButtonSecondary"
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className='signup'>
      <div className='signup-header'>
        <div className='signup-logo'>
          <Link to='/'>
            {' '}
            <img
              src={tesla}
              alt=''
            />
          </Link>
        </div>
        <div className='signup-language'>
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className='signup-info'>
        <h1>Sign Up</h1>
        <form className='signup-form'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name='Sign Up' type='submit' />
        </form>
        <div className='signup-divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/signup'>
          <ButtonSecondary name='create account' />
        </Link>
      </div>
    </div>
  )
}

export default Signup