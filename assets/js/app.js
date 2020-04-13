import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, HashRouter, Route, Switch, withRouter, matchPath } from 'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import Home from './pages/Home';
import Registration from './pages/auth/RegistrationPage';
import Login from './pages/auth/LoginPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

import store from './store';
import { Provider } from 'react-redux';
import logOutUser, { setLoggedInUser } from './actions/auth';
import { isLoggedIn } from './utils/userUtils';
import AppRoutes from './AppRoutes';

const mapStateToProps = (state) => ({
	authReducer: state.authReducer
});

const mapDispatchToProps = {
	logOutUser
};

if (!isLoggedIn()) {
	store.dispatch(logOutUser());
}

const App = (props) => {
	const { isAuthenticated, logOutUser } = props;

	return (
		<Provider store={store}>
			<Router>
				<Navbar auth={isAuthenticated} logout={logOutUser} />
				<main>
					<Switch>
						<AppRoutes />
					</Switch>
				</main>
			</Router>
		</Provider>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<App />, document.getElementById('root'));
