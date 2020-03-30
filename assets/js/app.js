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

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css'

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import Home from './pages/Home'
import Registration from './pages/auth/RegistrationPage'
import Login from './pages/auth/LoginPage'
import Navbar from './components/Navbar'

const App = (props) => {
	return (
		<Router>
			<Navbar />
			<main>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/registration" component={Registration} />
					<Route exact path="/" component={Home} />
				</Switch>
			</main>
		</Router>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
