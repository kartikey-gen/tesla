import React from "react";
import {  Link, useNavigate } from "react-router-dom";
import "./Login.css";
import tesla from "../images/tesla.png";
import { useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import ButtonPrimary from "./Features/ButtonPrimary";
import ButtonSecondary from "./Features/ButtonSecondary";
import { auth } from "./firebase"
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const history = useNavigate()
  console.log('hello');
  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        )
        history.push('/teslaaccount')
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className='login'>
      <div className='login-header'>
        <div className='login-logo'>
          <Link to='/'>
            {' '}
            <img
              src={tesla}
              alt=''
            />
          </Link>
        </div>
        <div className='login-language'>
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className='login-info'>
        <h1>Sign In</h1>
        <form className='login-form'>
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
          <ButtonPrimary name='Sign In' type='submit' onClick={signIn} />
        </form>
        <div className='login-divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/signup'>
          <ButtonSecondary name='create account' />
        </Link>
      </div>
    </div>
  )
}

export default Login;
