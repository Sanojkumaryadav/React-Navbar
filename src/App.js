import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import "../src/App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
  
      </Switch>
    </>
  );
};

export default App;
