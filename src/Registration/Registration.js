import React, {Component} from 'react';
import Signup from './Signup'
import './Signup.css'
import Login from './Login'
import './Login.css'
// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'





class Registration extends Component {
  //Data
  state = {
    signup: false
  }


  //Functions
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


  changeToLogin = () => {
    this.setState({ signup: false })
  }

  changeToSignup = () => {
    this.setState({ signup: true })
  }


  render() {
    return (
      <div className="registration">
        {
          this.state.signup === true ? <Signup changeToLogin={this.changeToLogin} checkAuth={this.checkAuth} auth={this.auth} /> :
                                      <Login changeToSignup={this.changeToSignup} checkAuth={this.checkAuth} auth={this.auth} />

        }
      </div>
    )
  }

}
export default Registration
