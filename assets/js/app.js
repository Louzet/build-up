import React, { Component } from "react";
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


export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        
        return (
            <div className="app">
                <Router>
                    <div className="container-fluid pt-5">
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
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);