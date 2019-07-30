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
    login: false
  }


  //Functions
  changeToSignup = () => {
    this.setState({ login: false })
  }

  changeToLogin = () => {
    this.setState({ login: true })
  }


  render() {
    return (
      <div className="registration">
        {
          this.state.login === true ? <Login changeToSignup={this.changeToSignup} /> :
                                      <Signup changeToLogin={this.changeToLogin} />
        }
      </div>
    )
  }

}
export default Registration
