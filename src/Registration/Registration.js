import React, {Component} from 'react';
import './Registration.css'
import Signup from './Signup'
import './Signup.css'
import Login from './Login'
import './Login.css'
// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'



class Registration extends Component {
  render() {
    return (
      <div className="registration">
        <Signup />
        <Login />
      </div>
    )
  }

}
export default Registration
