import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute'

function App() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    console.log('Logged out!')
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={handleLogout}>logout</a>
        </header> 
        <Route exact path="/" component={Login} />

        <PrivateRoute exact path='/bubbles' component={BubblePage}/>
        

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.