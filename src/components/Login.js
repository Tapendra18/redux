import React, { useState } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { setLoginSuccess, setLoginError } from '../actions/index';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const users = [
    {
      username: "tapendra1@gmail.com",
      password: "123456",
    },
    {
      username: "tapendra12@gmail.com",
      password: "1234567",
    },
    {
      username:"tapendra123@gmail.com",
      password:"12345678"
    }

  ];

  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const toCompare = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };

    // Or just compare properties  
    if (users.some(u => JSON.stringify(u) === JSON.stringify(toCompare))) {
      console.log('User exists in array');
      console.log('form submited');
      dispatch(setLoginSuccess());
      navigate("/logout");

    } else {
      console.log('User does not exist in array');
      console.log('form not submited');
      dispatch(setLoginError());
    }

    // alert("donneeeeeeeeeeeeeeeeeeee");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='login'>
          <label className='login_'>Enter Your Email</label>
          <input className='login_input' name='username' value={input} type="text" onChange={(e) => setInput(e.target.value)} />
          <label className='login_'>Enter Your password</label>
          <input className='login_input' name='password' type="text" value={type} onChange={(e) => setType(e.target.value)} />

          <button type='submit' className='submit__btn'>Login</button>
        </div>
      </form>
    </>
  )
}

export default Login
