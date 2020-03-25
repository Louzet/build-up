import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route, Switch, withRouter, matchPath } from 'react-router-dom';


// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';
import Home from "./components/Home";

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="container-fluid">
                    <div className="row">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);