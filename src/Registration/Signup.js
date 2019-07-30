import React, {Component} from 'react'
import './Signup.css'
import axios from 'axios'

class Signup extends Component {
  //Data
  state = {
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    total_rounds: 0,
    total_moves: 0,
    profile_pic: ''
  }


  //Functions
  signup = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/signup', this.state).then( (res) => {
      localStorage.setItem('token', res.data.token)
      this.props.auth()
    }).catch( (err) => {
      console.log('Signup_Err', err);
    })
  }

  //Render
  render() {
    return (
      <div className="signup">

      </div>
    )
  }

}

export default Signup
