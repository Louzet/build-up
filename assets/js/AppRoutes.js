import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import Registration from './pages/auth/RegistrationPage';
import Login from './pages/auth/LoginPage';

const AppRoutes = () => (
	<Router>
		<Fragment>
			<PrivateRoute exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/registration" component={Registration} />
		</Fragment>
	</Router>
);

export default AppRoutes;
