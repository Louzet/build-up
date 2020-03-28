import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route, Switch, withRouter, matchPath } from 'react-router-dom';


// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
require('bootstrap/dist/css/bootstrap.min.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';
import Home from "./pages/Home";
import Registration from "./pages/auth/RegistrationPage";
import Login from "./pages/auth/LoginPage";
import AuthApi from "./api/AuthApi";

import 'mdbreact/dist/css/mdb.css';

import Navbar from "./components/Navbar/Navbar";
import NavbarMDB from "./components/NavbarMDB";

const App = (props) => {
    
    
    return (
        <div className="app">
            <Router>
                <div className="container-full">
                    <NavbarMDB />
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </Router> 
        </div>
    )
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("root")
);