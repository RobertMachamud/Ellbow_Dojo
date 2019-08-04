import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
// import Signup from './Signup'
import App from './App'
import Registration from './Registration/Registration'
import Profile from './Profile/Profile'
import Sparring from './Sparring/Sparring'
import Tutorials from './Tutorials/Tutorials'
import ProfileChange from './Profile/ProfileChange'
import Rps from './RpsGame/Rps'

class Routes extends Component {
	// Data
	state = {}


	// Functions
	checkAuth = () => {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false
		}
	}


	auth = () => {
		if (this.checkAuth()) {
			window.location.href = '/'
		}
	}

	// Render
	render() {
		return (
			<BrowserRouter>
				<Switch>
  					<Route path="/registration" component={() => <Registration auth={this.auth} />} />
            <Route path="/profile" render={() => (
    							this.checkAuth() ? (<Profile />) : (<Redirect to="/registration" />) )} />
            <Route path="/profile_change" render={() => (
    							this.checkAuth() ? (<ProfileChange />) : (<Redirect to="/registration" />) )} />
            <Route path="/sparring" component={() => <Sparring auth={this.auth} />} />
            <Route path="/tutorials" component={() => <Tutorials auth={this.auth} />} />
            <Route path="/game" component={() => <Rps auth={this.auth} />} />
  					<Route path="/" render={() => (
  						     this.checkAuth() ? (<App />) : (<Redirect to="/registration" />) )} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
