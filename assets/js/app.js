import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	HashRouter,
	Route,
	Switch,
	withRouter,
	matchPath,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css'

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import Home from './pages/Home'
import Registration from './pages/auth/RegistrationPage'
import Login from './pages/auth/LoginPage'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

const App = (props) => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<main>
					<Switch>
						<PrivateRoute exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/registration" component={Registration} />
					</Switch>
				</main>
			</Router>
		</Provider>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
