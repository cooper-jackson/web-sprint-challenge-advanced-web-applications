import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({})
  const [error, setError] = useState(false)


  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  const handleChange = e => {
    setCredentials ({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    console.log(credentials)
    axios.post(`http://localhost:5000/api/login`, credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      props.history.push('/bubbles')
      setError('')
    })
    .catch(err => {
      console.log(err)
      setError(err.response.data.error)
    })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Username</h2>
        <input type="text" name="username" data-testid="username" onChange={handleChange}></input>
        <h2>Password</h2>
        <input type="text" name="password" data-testid="password" onChange={handleChange}></input>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
      <button onClick={onSubmit}>Login</button>

    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.